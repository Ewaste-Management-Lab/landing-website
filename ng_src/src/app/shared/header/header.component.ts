import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ContainerComponent } from '../container/container.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, ContainerComponent],
  template: `
    <header class="header">
      <app-container [bordered]="false" [padded]="false">
        <div class="header-inner">
          <div class="logo">
            <a routerLink="/">
              <span class="logo-text">E-Waste <span class="highlight">Eco Lab</span></span>
            </a>
          </div>
          <button class="mobile-toggle" (click)="toggleMenu()" aria-label="Toggle menu">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </button>
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
        </div>
      </app-container>
    </header>
  `,
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
