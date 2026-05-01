import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ContainerComponent } from '@shared/container/container.component';
import { ThemeToggleComponent } from '@shared/theme-toggle/theme-toggle.component';
import { LucideAngularModule, Menu, X, Recycle } from 'lucide-angular';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule, 
    RouterLink, 
    ThemeToggleComponent,
    LucideAngularModule
  ],
  template: `
    <header class="header">
      <div class="logo">
        <a routerLink="/" fragment="home" class="logo-link">
          <lucide-icon [name]="RecycleIcon" class="logo-icon"></lucide-icon>
          <span class="logo-text">E-Waste <span class="highlight">Eco Lab</span></span>
        </a>
      </div>

      <nav class="nav" [class.nav--open]="isMenuOpen">
        <ul class="nav-list">
          <li class="nav-item">
            <a routerLink="/" fragment="home" [class.active]="activeSection() === 'home'" (click)="closeMenu()">Home</a>
          </li>
          <li class="nav-item">
            <a routerLink="/" fragment="about" [class.active]="activeSection() === 'about'" (click)="closeMenu()">About</a>
          </li>
          <li class="nav-item">
            <a routerLink="/" fragment="programs" [class.active]="activeSection() === 'programs'" (click)="closeMenu()">Programs</a>
          </li>
          <li class="nav-item">
            <a routerLink="/" fragment="contact" [class.active]="activeSection() === 'contact'" (click)="closeMenu()">Contact</a>
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
  activeSection = signal<string>('home');

  readonly MenuIcon = Menu;
  readonly XIcon = X;
  readonly RecycleIcon = Recycle;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = ['home', 'about', 'programs', 'contact'];
    const scrollPosition = window.pageYOffset + 100; // Offset for header height

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const height = element.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
          this.activeSection.set(section);
          break;
        }
      }
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
