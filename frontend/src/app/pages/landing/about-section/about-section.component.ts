import { Component } from '@angular/core';
import { ContainerComponent } from '@shared/container/container.component';
import { CardComponent } from '@shared/card/card.component';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [ContainerComponent, CardComponent],
  template: `
    <section class="about" id="about">
      <app-container>
        <div class="about-content">
          <h2>About Our Lab</h2>
          <p class="about-description">
            The E-Waste Eco Lab at Makerere University restores discarded electronics and equips
            students with hands-on technical skills. Our flagship project refurbished MTN Foundation
            donations into fully working computers — now used by students across campus.
          </p>

          <div class="about-grid">
            <app-card class="about-card">
              <h3>Restore</h3>
              <p>
                We take donated and discarded electronics — like the MTN Foundation computers — and
                bring them back to life through component-level repair and refurbishment.
              </p>
            </app-card>

            <app-card class="about-card">
              <h3>Train</h3>
              <p>
                Students learn practical skills in hardware diagnostics, 3D modelling, networking,
                and server management by working on real equipment.
              </p>
            </app-card>

            <app-card class="about-card">
              <h3>Deploy</h3>
              <p>
                Restored machines go back into the university, providing labs and students with
                functional computers while keeping e-waste out of landfills.
              </p>
            </app-card>
          </div>
        </div>
      </app-container>
    </section>
  `,
  styleUrl: './about-section.component.css',
})
export class AboutSectionComponent {}
