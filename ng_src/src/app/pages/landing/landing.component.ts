import { Component } from '@angular/core';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { PartnersSectionComponent } from './partners-section/partners-section.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { ServicesSectionComponent } from './services-section/services-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { FooterSectionComponent } from './footer-section/footer-section.component';

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
