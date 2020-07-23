import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageCompComponent } from './home-page-comp.component';

describe('HomePageCompComponent', () => {
  let component: HomePageCompComponent;
  let fixture: ComponentFixture<HomePageCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
