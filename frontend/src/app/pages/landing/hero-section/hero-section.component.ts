import { Component } from '@angular/core';
import { ContainerComponent } from '@shared/container/container.component';
import { ButtonComponent } from '@shared/button/button.component';
import { LucideAngularModule, ArrowRight, Info } from 'lucide-angular';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [ContainerComponent, ButtonComponent, LucideAngularModule],
  template: `
    <section class="hero" id="home">
      <div class="hero-background">
        <div class="blob"></div>
      </div>
      <app-container [padded]="false" [bordered]="false">
        <div class="hero-content">
          <h1 class="hero-title">
            Turning E-Waste Into <span class="highlight">Student Skills</span>
          </h1>
          <p class="hero-subtitle">
            We restore discarded electronics and train students in hardware, networking, 3D
            modelling, and server management — giving e-waste a second life and students a first
            chance.
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
      </app-container>
    </section>
  `,
  styleUrl: './hero-section.component.css',
})
export class HeroSectionComponent {
  readonly ArrowRightIcon = ArrowRight;
  readonly InfoIcon = Info;
}
