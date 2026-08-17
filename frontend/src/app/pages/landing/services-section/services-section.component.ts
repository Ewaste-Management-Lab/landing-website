import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from '@shared/container/container.component';
import { CardComponent } from '@shared/card/card.component';
import { ButtonComponent } from '@shared/button/button.component';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [CommonModule, ContainerComponent, CardComponent, ButtonComponent],
  template: `
    <section class="services" id="programs">
      <app-container>
        <div class="services-header">
          <h2>Skills We Teach</h2>
          <p>
            Every restored device is a learning opportunity. Students gain hands-on experience
            across real hardware and systems.
          </p>
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
      title: 'Computer Hardware',
      description:
        'Disassembly, diagnostics, component replacement, and full system restoration — from identifying faulty capacitors to rebuilding complete machines.',
    },
    {
      title: '3D Modelling',
      description:
        'Designing replacement parts, enclosures, and custom components using CAD tools to repair or improve restored electronics.',
    },
    {
      title: 'Networking',
      description:
        'Setting up LANs, configuring routers and switches, and restoring network connectivity across lab environments.',
    },
    {
      title: 'Server Management',
      description:
        'Deploying and maintaining servers from restored hardware, including OS installation, user management, and service configuration.',
    },
  ];
}
