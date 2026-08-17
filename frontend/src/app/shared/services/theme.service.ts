import { Injectable, signal, effect, inject } from '@angular/core';
import {
  THEME_PERSISTENCE_PORT,
  THEME_RESOLVER_PORT,
  THEME_RENDERER_PORT,
} from '@domain/ports/theme.port';
import { Theme } from '@domain/models/theme.model';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private persistence = inject(THEME_PERSISTENCE_PORT);
  private resolver = inject(THEME_RESOLVER_PORT);
  private renderer = inject(THEME_RENDERER_PORT);

  theme = signal<Theme>(this.persistence.load());

  constructor() {
    effect(() => {
      const current = this.theme();
      const resolved = this.resolver.resolve(current);
      this.renderer.apply(resolved);
      this.persistence.save(current);
    });

    const cleanup = this.resolver.onChange((resolved) => {
      if (this.theme() === Theme.System) {
        this.renderer.apply(resolved);
      }
    });

    if (typeof window !== 'undefined') {
      window.addEventListener('beforeunload', cleanup);
    }
  }

  setTheme(theme: Theme): void {
    this.theme.set(theme);
  }
}
