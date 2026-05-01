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
          <h4>E-Waste Lab</h4>
          <p>Building sustainable solutions for electronic waste management.</p>
        </div>

        <div class="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#research">Research</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4>Contact</h4>
          <p>Makerere University<br />Kampala, Uganda</p>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2026 E-Waste Management Lab. All rights reserved.</p>
      </div>
    </footer>
  `,
  styleUrl: './footer-section.component.css',
})
export class FooterSectionComponent {}
