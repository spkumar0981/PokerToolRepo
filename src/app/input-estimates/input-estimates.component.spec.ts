import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputEstimatesComponent } from './input-estimates.component';

describe('InputEstimatesComponent', () => {
  let component: InputEstimatesComponent;
  let fixture: ComponentFixture<InputEstimatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputEstimatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputEstimatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
