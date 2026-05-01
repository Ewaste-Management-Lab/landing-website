import { Injectable, signal, effect } from '@angular/core';

export type Theme = 'light' | 'dark' | 'system';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly STORAGE_KEY = 'theme-preference';
  
  // Theme state signal
  theme = signal<Theme>(this.getStoredTheme());

  constructor() {
    // Apply theme whenever it changes
    effect(() => {
      const currentTheme = this.theme();
      this.applyTheme(currentTheme);
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(this.STORAGE_KEY, currentTheme);
      }
    });

    // Listen for system theme changes if set to 'system'
    if (typeof window !== 'undefined' && window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        if (this.theme() === 'system') {
          this.applyTheme('system');
        }
      });
    }
  }

  setTheme(theme: Theme) {
    this.theme.set(theme);
  }

  private getStoredTheme(): Theme {
    if (typeof localStorage !== 'undefined' && typeof localStorage.getItem === 'function') {
      const stored = localStorage.getItem(this.STORAGE_KEY) as Theme;
      return stored || 'system';
    }
    return 'system';
  }

  private applyTheme(theme: Theme) {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }
    let activeTheme: 'light' | 'dark';

    if (theme === 'system') {
      activeTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    } else {
      activeTheme = theme;
    }

    document.documentElement.setAttribute('data-theme', activeTheme);
  }
}
