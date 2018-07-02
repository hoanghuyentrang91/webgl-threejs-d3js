import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex1GlobeComponent } from './ex1-globe.component';

describe('Ex1GlobeComponent', () => {
  let component: Ex1GlobeComponent;
  let fixture: ComponentFixture<Ex1GlobeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex1GlobeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex1GlobeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
