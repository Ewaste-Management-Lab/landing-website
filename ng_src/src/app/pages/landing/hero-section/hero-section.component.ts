import { Component } from '@angular/core';
import { ContainerComponent } from '@shared/container/container.component';
import { ButtonComponent } from '@shared/button/button.component';
import { LucideAngularModule, ArrowRight, Info } from 'lucide-angular';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [ContainerComponent, ButtonComponent, LucideAngularModule],
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
              <app-button variant="primary" size="lg">
                Our Programs
                <lucide-icon [name]="ArrowRightIcon" [size]="18" class="btn-icon"></lucide-icon>
              </app-button>
              <app-button variant="outline" size="lg">
                Learn More
                <lucide-icon [name]="InfoIcon" [size]="18" class="btn-icon"></lucide-icon>
              </app-button>
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
export class HeroSectionComponent {
  readonly ArrowRightIcon = ArrowRight;
  readonly InfoIcon = Info;
}
