import { Component } from '@angular/core';
import { ContainerComponent } from '../../../shared/container/container.component';
import { ButtonComponent } from '../../../shared/button/button.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [ContainerComponent, ButtonComponent],
  template: `
    <section class="hero">
      <app-container [padded]="false" [bordered]="false">
        <div class="hero-content">
          <h1 class="hero-title">E-Waste Management Lab</h1>
          <p class="hero-subtitle">
            Innovative solutions for sustainable electronic waste management at Makerere University
          </p>
          <div class="hero-actions">
            <app-button variant="primary" size="lg">Get Started</app-button>
            <app-button variant="outline" size="lg">Learn More</app-button>
          </div>
        </div>
      </app-container>
    </section>
  `,
  styleUrl: './hero-section.component.css',
})
export class HeroSectionComponent {}
