import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankEmployeeSalaryComponent } from './bank-employee-salary.component';

describe('BankEmployeeSalaryComponent', () => {
  let component: BankEmployeeSalaryComponent;
  let fixture: ComponentFixture<BankEmployeeSalaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankEmployeeSalaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankEmployeeSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
