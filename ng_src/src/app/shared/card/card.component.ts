import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="classes">
      <div class="card-image" *ngIf="imageUrl">
        <img [src]="imageUrl" [alt]="imageAlt" />
      </div>
      <div class="card-content">
        <div class="card-header" *ngIf="title">
          <h3 class="card-title">{{ title }}</h3>
        </div>
        <div class="card-body">
          <ng-content></ng-content>
        </div>
        <div class="card-footer">
          <ng-content select="[footer]"></ng-content>
        </div>
      </div>
    </div>
  `,
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() title?: string;
  @Input() imageUrl?: string;
  @Input() imageAlt = '';
  @Input() hoverable = true;

  get classes(): string {
    return [
      'card',
      this.hoverable && 'card--hoverable',
    ]
      .filter(Boolean)
      .join(' ');
  }
}
