import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LpMapComponent } from './lp-map.component';

describe('LpMapComponent', () => {
  let component: LpMapComponent;
  let fixture: ComponentFixture<LpMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LpMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LpMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
