import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex2AviatorGameComponent } from './ex2-aviator-game.component';

describe('Ex2AviatorGameComponent', () => {
  let component: Ex2AviatorGameComponent;
  let fixture: ComponentFixture<Ex2AviatorGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex2AviatorGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex2AviatorGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
