import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ContainerComponent } from '@shared/container/container.component';
import { ButtonComponent } from '@shared/button/button.component';
import { LucideAngularModule, MapPin, Mail, Send, CheckCircle, AlertCircle } from 'lucide-angular';
import { CONTACT_SUBMISSION_PORT } from '@domain/ports/contact.port';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ContainerComponent, ButtonComponent, LucideAngularModule],
  template: `
    <section class="contact" id="contact">
      <app-container>
        <div class="contact-grid">
          <div class="contact-info">
            <h2>Get in Touch</h2>
            <p>Interested in our programs or want to collaborate? Reach out to us.</p>
            <ul class="contact-details">
              <li class="contact-detail-item">
                <lucide-icon [name]="MapPinIcon" [size]="20" class="contact-icon"></lucide-icon>
                <span><strong>Location:</strong> Makerere University, Kampala, Uganda</span>
              </li>
              <li class="contact-detail-item">
                <lucide-icon [name]="MailIcon" [size]="20" class="contact-icon"></lucide-icon>
                <span><strong>Email:</strong> ewaste&#64;mak.ac.ug</span>
              </li>
            </ul>
          </div>
          <div class="contact-form-container">
            @if (submitted()) {
              <div class="form-success">
                <lucide-icon [name]="CheckCircleIcon" [size]="48" class="success-icon"></lucide-icon>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. We'll get back to you soon.</p>
                <app-button variant="outline" (click)="resetForm()">Send Another</app-button>
              </div>
            } @else {
              <form [formGroup]="form" (ngSubmit)="onSubmit()" class="contact-form">
                <div class="form-group">
                  <label for="name">Name</label>
                  <input id="name" formControlName="name" placeholder="Your Name" />
                  @if (form.get('name')?.invalid && form.get('name')?.touched) {
                    <span class="form-error">Name is required</span>
                  }
                </div>
                <div class="form-group">
                  <label for="email">Email</label>
                  <input id="email" type="email" formControlName="email" placeholder="Your Email" />
                  @if (form.get('email')?.invalid && form.get('email')?.touched) {
                    <span class="form-error">Valid email is required</span>
                  }
                </div>
                <div class="form-group">
                  <label for="message">Message</label>
                  <textarea id="message" formControlName="message" rows="4" placeholder="How can we help?"></textarea>
                  @if (form.get('message')?.invalid && form.get('message')?.touched) {
                    <span class="form-error">Message is required</span>
                  }
                </div>
                @if (error()) {
                  <div class="form-error-box">
                    <lucide-icon [name]="AlertCircleIcon" [size]="16"></lucide-icon>
                    {{ error() }}
                  </div>
                }
                <app-button type="submit" variant="primary" [disabled]="loading()">
                  @if (loading()) {
                    Sending...
                  } @else {
                    Send Message
                    <lucide-icon [name]="SendIcon" [size]="18" class="btn-icon"></lucide-icon>
                  }
                </app-button>
              </form>
            }
          </div>
        </div>
      </app-container>
    </section>
  `,
  styleUrl: './contact-section.component.css',
})
export class ContactSectionComponent {
  private fb = inject(FormBuilder);
  private contactPort = inject(CONTACT_SUBMISSION_PORT);

  readonly MapPinIcon = MapPin;
  readonly MailIcon = Mail;
  readonly SendIcon = Send;
  readonly CheckCircleIcon = CheckCircle;
  readonly AlertCircleIcon = AlertCircle;

  loading = signal(false);
  submitted = signal(false);
  error = signal<string | null>(null);

  form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  });

  async onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading.set(true);
    this.error.set(null);

    const result = await this.contactPort.submit(this.form.getRawValue());

    this.loading.set(false);

    if (result.success) {
      this.submitted.set(true);
    } else {
      this.error.set(result.error || 'Something went wrong. Please try again.');
    }
  }

  resetForm() {
    this.form.reset();
    this.submitted.set(false);
    this.error.set(null);
  }
}
