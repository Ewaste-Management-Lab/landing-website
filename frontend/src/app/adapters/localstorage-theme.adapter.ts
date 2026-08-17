import { Injectable } from '@angular/core';
import { ThemePersistencePort } from '@domain/ports/theme.port';
import { Theme } from '@domain/models/theme.model';

const STORAGE_KEY = 'theme-preference';

@Injectable()
export class LocalStorageThemeAdapter implements ThemePersistencePort {
  load(): Theme {
    if (typeof localStorage === 'undefined') {
      return Theme.System;
    }
    const stored = localStorage.getItem(STORAGE_KEY) as Theme;
    return (Object.values(Theme).includes(stored) ? stored : Theme.System) as Theme;
  }

  save(theme: Theme): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, theme);
    }
  }
}
