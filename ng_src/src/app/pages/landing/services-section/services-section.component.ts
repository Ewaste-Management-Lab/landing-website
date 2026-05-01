import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from '../../../shared/container/container.component';
import { CardComponent } from '../../../shared/card/card.component';
import { ButtonComponent } from '../../../shared/button/button.component';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [CommonModule, ContainerComponent, CardComponent, ButtonComponent],
  template: `
    <section class="services">
      <app-container>
        <div class="services-header">
          <h2>Student Programs</h2>
          <p>We focus on skilling students with practical knowledge and innovative thinking for sustainable e-waste management.</p>
        </div>
        <div class="services-grid">
          <app-card *ngFor="let service of services" [title]="service.title">
            <p>{{ service.description }}</p>
            <div footer>
              <app-button variant="outline" size="sm">Learn More</app-button>
            </div>
          </app-card>
        </div>
      </app-container>
    </section>
  `,
  styleUrl: './services-section.component.css',
})
export class ServicesSectionComponent {
  services = [
    {
      title: 'Technical Workshops',
      description: 'Hands-on sessions for students to learn about electronic components, disassembly, and safe handling of e-waste.',
    },
    {
      title: 'Innovation Projects',
      description: 'Mentorship for students to develop creative solutions for recycling and upcycling electronic waste.',
    },
    {
      title: 'Environmental Advocacy',
      description: 'Training students to become ambassadors for sustainable consumption and proper e-waste disposal within the university.',
    },
    {
      title: 'Research Assistantships',
      description: 'Opportunities for students to participate in data collection and analysis for lab research projects.',
    },
  ];
}
