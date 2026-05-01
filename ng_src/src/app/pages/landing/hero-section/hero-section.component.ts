import { Component } from '@angular/core';
import { ContainerComponent } from '@shared/container/container.component';
import { ButtonComponent } from '@shared/button/button.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [ContainerComponent, ButtonComponent],
  template: `
    <section class="hero">
      <app-container [padded]="false" [bordered]="false">
        <div class="hero-grid">
          <div class="hero-content">
            <h1 class="hero-title">E-Waste <span class="highlight">Management Lab</span></h1>
            <p class="hero-subtitle">
              Innovation and skilling for sustainable electronic waste solutions at Makerere University.
            </p>
            <div class="hero-actions">
              <app-button variant="primary" size="lg">Our Programs</app-button>
              <app-button variant="outline" size="lg">Contact Us</app-button>
            </div>
          </div>
          <div class="hero-image-container">
            <div class="hero-image-placeholder">
              <span class="placeholder-text">Hero Image Placeholder</span>
            </div>
          </div>
        </div>
      </app-container>
    </section>
  `,
  styleUrl: './hero-section.component.css',
})
export class HeroSectionComponent {}
