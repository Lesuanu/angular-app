import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankEmployeeListComponent } from './bank-employee-list.component';

describe('BankEmployeeListComponent', () => {
  let component: BankEmployeeListComponent;
  let fixture: ComponentFixture<BankEmployeeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankEmployeeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankEmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
