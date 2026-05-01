import { Component } from '@angular/core';
import { HeroSectionComponent } from '@pages/landing/hero-section/hero-section.component';
import { PartnersSectionComponent } from '@pages/landing/partners-section/partners-section.component';
import { AboutSectionComponent } from '@pages/landing/about-section/about-section.component';
import { ServicesSectionComponent } from '@pages/landing/services-section/services-section.component';
import { ContactSectionComponent } from '@pages/landing/contact-section/contact-section.component';
import { FooterSectionComponent } from '@pages/landing/footer-section/footer-section.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    HeroSectionComponent,
    PartnersSectionComponent,
    AboutSectionComponent,
    ServicesSectionComponent,
    ContactSectionComponent,
    FooterSectionComponent,
  ],
  template: `
    <app-hero-section></app-hero-section>
    <app-partners-section></app-partners-section>
    <app-about-section></app-about-section>
    <app-services-section></app-services-section>
    <app-contact-section></app-contact-section>
    <app-footer-section></app-footer-section>
  `,
})
export class LandingComponent {}
