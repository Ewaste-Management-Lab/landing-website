import { Component } from '@angular/core';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { ServicesSectionComponent } from './services-section/services-section.component';
import { FooterSectionComponent } from './footer-section/footer-section.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    HeroSectionComponent,
    AboutSectionComponent,
    ServicesSectionComponent,
    FooterSectionComponent,
  ],
  template: `
    <app-hero-section></app-hero-section>
    <app-about-section></app-about-section>
    <app-services-section></app-services-section>
    <app-footer-section></app-footer-section>
  `,
})
export class LandingComponent {}
