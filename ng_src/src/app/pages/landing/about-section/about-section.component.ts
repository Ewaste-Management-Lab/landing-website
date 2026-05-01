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
            The E-Waste Management Lab at Makerere University is dedicated to research and innovation in sustainable electronic waste management. We develop practical solutions that benefit communities while protecting the environment.
          </p>

          <div class="about-grid">
            <app-card class="about-card">
              <h3>Research</h3>
              <p>Conducting groundbreaking research on e-waste recycling technologies and environmental impact assessment.</p>
            </app-card>

            <app-card class="about-card">
              <h3>Education</h3>
              <p>Training the next generation of environmental engineers and sustainability practitioners.</p>
            </app-card>

            <app-card class="about-card">
              <h3>Innovation</h3>
              <p>Developing affordable and scalable solutions for e-waste management in developing regions.</p>
            </app-card>
          </div>
        </div>
      </app-container>
    </section>
  `,
  styleUrl: './about-section.component.css',
})
export class AboutSectionComponent {}
