import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [CommonModule],
  template: `<div [class]="classes">
    <ng-content></ng-content>
  </div>`,
  styleUrl: './container.component.css',
})
export class ContainerComponent {
  @Input() bordered = true;
  @Input() padded = true;

  get classes(): string {
    return [
      'container',
      this.bordered && 'container--bordered',
      this.padded && 'container--padded',
    ]
      .filter(Boolean)
      .join(' ');
  }
}
