import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractModuleComponent } from './contract-module.component';

describe('ContractModuleComponent', () => {
  let component: ContractModuleComponent;
  let fixture: ComponentFixture<ContractModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
