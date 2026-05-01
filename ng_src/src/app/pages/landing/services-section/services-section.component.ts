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
          <h2>Our Services</h2>
          <p>We provide comprehensive solutions for e-waste management and sustainability research.</p>
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
      title: 'E-Waste Collection',
      description: 'Safe and organized collection of electronic waste from institutions and individuals.',
    },
    {
      title: 'Refurbishment',
      description: 'Repairing and upgrading old electronics to extend their lifecycle and reduce waste.',
    },
    {
      title: 'Material Recovery',
      description: 'Extracting valuable materials from non-functional devices using eco-friendly methods.',
    },
    {
      title: 'Consultancy',
      description: 'Providing expert advice on sustainable electronics procurement and disposal policies.',
    },
  ];
}
