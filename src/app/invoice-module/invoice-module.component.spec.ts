import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceModuleComponent } from './invoice-module.component';

describe('InvoiceModuleComponent', () => {
  let component: InvoiceModuleComponent;
  let fixture: ComponentFixture<InvoiceModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
