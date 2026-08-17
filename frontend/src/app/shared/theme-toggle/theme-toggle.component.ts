import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '@shared/services/theme.service';
import { Theme } from '@domain/models/theme.model';
import { LucideAngularModule, Sun, Moon, Monitor } from 'lucide-angular';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <div class="theme-toggle">
      <button
        *ngFor="let option of options"
        [class.active]="currentTheme() === option.value"
        (click)="setTheme(option.value)"
        [title]="option.label"
        class="toggle-btn"
      >
        <lucide-icon [name]="option.icon" [size]="18"></lucide-icon>
      </button>
    </div>
  `,
  styles: `
    .theme-toggle {
      display: flex;
      background-color: var(--color-bg-tertiary);
      padding: 4px;
      border-radius: var(--radius-full);
      gap: 2px;
    }
    .toggle-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 6px;
      border-radius: var(--radius-full);
      color: var(--color-text-secondary);
      transition: all var(--transition-fast);
    }
    .toggle-btn:hover {
      color: var(--color-text-primary);
    }
    .toggle-btn.active {
      background-color: var(--color-bg-primary);
      color: var(--color-accent);
      box-shadow: var(--shadow-sm);
    }
  `,
})
export class ThemeToggleComponent {
  private themeService = inject(ThemeService);
  currentTheme = this.themeService.theme;

  options: { value: Theme; label: string; icon: typeof Sun | typeof Moon | typeof Monitor }[] = [
    { value: Theme.Light, label: 'Light Mode', icon: Sun },
    { value: Theme.Dark, label: 'Dark Mode', icon: Moon },
    { value: Theme.System, label: 'System Theme', icon: Monitor },
  ];

  setTheme(theme: Theme) {
    this.themeService.setTheme(theme);
  }
}
