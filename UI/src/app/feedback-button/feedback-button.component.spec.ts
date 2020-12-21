import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LpFeedbackButtonComponent } from './feedback-button.component';

describe('LpFeedbackButtonComponent', () => {
  let component: LpFeedbackButtonComponent;
  let fixture: ComponentFixture<LpFeedbackButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LpFeedbackButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LpFeedbackButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
