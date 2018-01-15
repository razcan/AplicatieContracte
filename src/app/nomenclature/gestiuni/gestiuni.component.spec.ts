import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestiuniComponent } from './gestiuni.component';

describe('GestiuniComponent', () => {
  let component: GestiuniComponent;
  let fixture: ComponentFixture<GestiuniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestiuniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestiuniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
