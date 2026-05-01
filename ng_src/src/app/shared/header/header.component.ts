import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ContainerComponent } from '@shared/container/container.component';
import { ThemeToggleComponent } from '@shared/theme-toggle/theme-toggle.component';
import { LucideAngularModule, Menu, X, Recycle } from 'lucide-angular';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule, 
    RouterLink, 
    RouterLinkActive, 
    ContainerComponent, 
    ThemeToggleComponent,
    LucideAngularModule
  ],
  template: `
    <header class="header">
      <div class="logo">
        <a routerLink="/" class="logo-link">
          <lucide-icon [name]="RecycleIcon" class="logo-icon"></lucide-icon>
          <span class="logo-text">E-Waste <span class="highlight">Eco Lab</span></span>
        </a>
      </div>

      <nav class="nav" [class.nav--open]="isMenuOpen">
        <ul class="nav-list">
          <li class="nav-item">
            <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" (click)="closeMenu()">Home</a>
          </li>
          <li class="nav-item">
            <a routerLink="/about" routerLinkActive="active" (click)="closeMenu()">About</a>
          </li>
          <li class="nav-item">
            <a routerLink="/services" routerLinkActive="active" (click)="closeMenu()">Programs</a>
          </li>
          <li class="nav-item">
            <a routerLink="/contact" routerLinkActive="active" (click)="closeMenu()">Contact</a>
          </li>
        </ul>
      </nav>
      
      <div class="header-actions">
        <app-theme-toggle></app-theme-toggle>

        <button class="mobile-toggle" (click)="toggleMenu()" aria-label="Toggle menu">
          <lucide-icon [name]="isMenuOpen ? XIcon : MenuIcon"></lucide-icon>
        </button>
      </div>
    </header>
  `,
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isMenuOpen = false;
  readonly MenuIcon = Menu;
  readonly XIcon = X;
  readonly RecycleIcon = Recycle;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
