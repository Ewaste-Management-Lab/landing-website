import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should apply primary variant class', () => {
    component.variant = 'primary';
    expect(component.classes).toContain('btn--primary');
  });

  it('should apply size classes', () => {
    component.size = 'lg';
    expect(component.classes).toContain('btn--lg');
  });

  it('should apply disabled class when disabled', () => {
    component.disabled = true;
    expect(component.classes).toContain('btn--disabled');
  });
});
