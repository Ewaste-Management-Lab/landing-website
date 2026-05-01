import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContainerComponent } from '@shared/container/container.component';
import { ButtonComponent } from '@shared/button/button.component';
import { LucideAngularModule, MapPin, Mail, Send } from 'lucide-angular';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule, 
    ContainerComponent, 
    ButtonComponent,
    LucideAngularModule
  ],
  template: `
    <section class="contact" id="contact">
      <app-container>
        <div class="contact-grid">
          <div class="contact-info">
            <h2>Get in Touch</h2>
            <p>
              Interested in our programs or want to collaborate? Reach out to us.
            </p>
            <ul class="contact-details">
              <li class="contact-detail-item">
                <lucide-icon [name]="MapPinIcon" [size]="20" class="contact-icon"></lucide-icon>
                <span><strong>Location:</strong> Makerere University, Kampala, Uganda</span>
              </li>
              <li class="contact-detail-item">
                <lucide-icon [name]="MailIcon" [size]="20" class="contact-icon"></lucide-icon>
                <span><strong>Email:</strong> [Lab Email]</span>
              </li>
            </ul>
          </div>
          <div class="contact-form-container">
            <form (submit)="onSubmit($event)" class="contact-form">
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" required placeholder="Your Name" />
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required placeholder="Your Email" />
              </div>
              <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" name="message" rows="4" required placeholder="How can we help?"></textarea>
              </div>
              <app-button type="submit" variant="primary">
                Send Message
                <lucide-icon [name]="SendIcon" [size]="18" class="btn-icon"></lucide-icon>
              </app-button>
            </form>
          </div>
        </div>
      </app-container>
    </section>
  `,
  styleUrl: './contact-section.component.css',
})
export class ContactSectionComponent {
  readonly MapPinIcon = MapPin;
  readonly MailIcon = Mail;
  readonly SendIcon = Send;

  onSubmit(event: Event) {
    event.preventDefault();
    // Implementation for form submission would go here
    console.log('Form submitted');
  }
}
