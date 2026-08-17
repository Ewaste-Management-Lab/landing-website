import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h4>E-Waste Eco Lab</h4>
          <p>Restoring electronics. Training students. Reducing e-waste.</p>
        </div>

        <div class="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#programs">Programs</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4>Contact</h4>
          <p>Makerere University<br />Kampala, Uganda</p>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2026 E-Waste Eco Lab. All rights reserved.</p>
      </div>
    </footer>
  `,
  styleUrl: './footer-section.component.css',
})
export class FooterSectionComponent {}
