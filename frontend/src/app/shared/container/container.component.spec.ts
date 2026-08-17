import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerComponent } from './container.component';

describe('ContainerComponent', () => {
  let component: ContainerComponent;
  let fixture: ComponentFixture<ContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should apply bordered class by default', () => {
    expect(component.classes).toContain('container--bordered');
  });

  it('should apply padded class by default', () => {
    expect(component.classes).toContain('container--padded');
  });

  it('should not apply bordered class when bordered is false', () => {
    component.bordered = false;
    expect(component.classes).not.toContain('container--bordered');
  });
});
