import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimateStoryComponent } from './estimate-story.component';

describe('EstimateStoryComponent', () => {
  let component: EstimateStoryComponent;
  let fixture: ComponentFixture<EstimateStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstimateStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimateStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
