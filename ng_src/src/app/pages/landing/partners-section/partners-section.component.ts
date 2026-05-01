import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from '../../../shared/container/container.component';

@Component({
  selector: 'app-partners-section',
  standalone: true,
  imports: [CommonModule, ContainerComponent],
  template: `
    <section class="partners">
      <app-container>
        <div class="partners-inner">
          <h2 class="partners-title">Supported By</h2>
          <div class="partners-grid">
            <div class="partner-item">
              <span class="partner-name">Makerere University</span>
            </div>
            <div class="partner-item">
              <span class="partner-placeholder">Partner Placeholder</span>
            </div>
            <div class="partner-item">
              <span class="partner-placeholder">Partner Placeholder</span>
            </div>
          </div>
        </div>
      </app-container>
    </section>
  `,
  styleUrl: './partners-section.component.css',
})
export class PartnersSectionComponent {}
