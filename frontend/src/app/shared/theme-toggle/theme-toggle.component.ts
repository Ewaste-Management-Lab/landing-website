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
    <button class="theme-toggle" (click)="cycleTheme()" [title]="label">
      <lucide-icon [name]="icon" [size]="18"></lucide-icon>
    </button>
  `,
  styles: `
    .theme-toggle {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      padding: 0;
      border-radius: var(--radius-full);
      color: var(--color-text-secondary);
      background-color: transparent;
      transition: all var(--transition-fast);
    }
    .theme-toggle:hover {
      color: var(--color-text-primary);
      background-color: var(--color-bg-tertiary);
    }
  `,
})
export class ThemeToggleComponent {
  private themeService = inject(ThemeService);
  currentTheme = this.themeService.theme;

  private readonly cycle = [Theme.Light, Theme.Dark, Theme.System];
  private readonly icons: Record<Theme, typeof Sun> = {
    [Theme.Light]: Sun,
    [Theme.Dark]: Moon,
    [Theme.System]: Monitor,
  };
  private readonly labels: Record<Theme, string> = {
    [Theme.Light]: 'Light Mode',
    [Theme.Dark]: 'Dark Mode',
    [Theme.System]: 'System Theme',
  };

  get icon() {
    return this.icons[this.currentTheme()];
  }

  get label() {
    return this.labels[this.currentTheme()];
  }

  cycleTheme() {
    const current = this.currentTheme();
    const next = this.cycle[(this.cycle.indexOf(current) + 1) % this.cycle.length];
    this.themeService.setTheme(next);
  }
}
