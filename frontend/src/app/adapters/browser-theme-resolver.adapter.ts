import { Injectable, NgZone } from '@angular/core';
import { ThemeResolverPort } from '@domain/ports/theme.port';
import { Theme, ResolvedTheme } from '@domain/models/theme.model';

@Injectable()
export class BrowserThemeResolverAdapter implements ThemeResolverPort {
  private darkQuery: MediaQueryList | null = null;

  constructor(private ngZone: NgZone) {
    if (typeof window !== 'undefined' && window.matchMedia) {
      this.darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
    }
  }

  resolve(theme: Theme): ResolvedTheme {
    if (theme === Theme.System) {
      return this.darkQuery?.matches ? Theme.Dark : Theme.Light;
    }
    return theme as ResolvedTheme;
  }

  onChange(callback: (resolved: ResolvedTheme) => void): () => void {
    if (!this.darkQuery) {
      return () => {};
    }

    const handler = (e: MediaQueryListEvent) => {
      this.ngZone.run(() => {
        callback(e.matches ? Theme.Dark : Theme.Light);
      });
    };

    this.darkQuery.addEventListener('change', handler);
    return () => this.darkQuery?.removeEventListener('change', handler);
  }
}
