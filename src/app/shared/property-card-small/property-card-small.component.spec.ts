import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyCardSmallComponent } from './property-card-small.component';

describe('PropertyCardSmallComponent', () => {
  let component: PropertyCardSmallComponent;
  let fixture: ComponentFixture<PropertyCardSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyCardSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyCardSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
