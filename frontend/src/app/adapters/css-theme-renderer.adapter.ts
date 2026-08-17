import { Injectable } from '@angular/core';
import { ThemeRendererPort } from '@domain/ports/theme.port';
import { ResolvedTheme } from '@domain/models/theme.model';

@Injectable()
export class CssThemeRendererAdapter implements ThemeRendererPort {
  apply(resolved: ResolvedTheme): void {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', resolved);
    }
  }
}
