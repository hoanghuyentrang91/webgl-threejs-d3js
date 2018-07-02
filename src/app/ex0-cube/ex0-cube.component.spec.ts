import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex0CubeComponent } from './ex0-cube.component';

describe('Ex0CubeComponent', () => {
  let component: Ex0CubeComponent;
  let fixture: ComponentFixture<Ex0CubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex0CubeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex0CubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
