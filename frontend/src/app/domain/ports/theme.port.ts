import { InjectionToken } from '@angular/core';
import { Theme, ResolvedTheme } from '@domain/models/theme.model';

export interface ThemePersistencePort {
  load(): Theme;
  save(theme: Theme): void;
}

export interface ThemeResolverPort {
  resolve(theme: Theme): ResolvedTheme;
  onChange(callback: (resolved: ResolvedTheme) => void): () => void;
}

export interface ThemeRendererPort {
  apply(resolved: ResolvedTheme): void;
}

export const THEME_PERSISTENCE_PORT = new InjectionToken<ThemePersistencePort>(
  'ThemePersistencePort',
);
export const THEME_RESOLVER_PORT = new InjectionToken<ThemeResolverPort>('ThemeResolverPort');
export const THEME_RENDERER_PORT = new InjectionToken<ThemeRendererPort>('ThemeRendererPort');
