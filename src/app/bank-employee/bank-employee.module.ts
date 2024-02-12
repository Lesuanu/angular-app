import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';   
import { BankEmployeeRoutingModule } from './bank-employee-routing.module';
import { BankEmployeeListComponent } from './component/bank-employee-list/bank-employee-list.component';
import { BankEmployeeSalaryComponent } from './component/bank-employee-salary/bank-employee-salary.component';
import { BankEmployeeService } from './service/bank-employee.service';
import { StoreModule } from '@ngrx/store';
import * as fromBankEmployee from './store/bank-employee.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BankEmployeeEffects } from './store/bank-employee.effects';
import { BankEmployeeComponent } from './component/bank-employee/bank-employee.component';
import { BankEmployeeEditComponent } from './component/bank-employee-edit/bank-employee-edit.component';

@NgModule({
  declarations: [
    BankEmployeeListComponent,
    BankEmployeeSalaryComponent,
    BankEmployeeComponent,
    BankEmployeeEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BankEmployeeRoutingModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromBankEmployee.bankEmployeesFeatureKey, fromBankEmployee.reducer),
    EffectsModule.forFeature([BankEmployeeEffects]),  
  ],
  providers: [
    BankEmployeeService,
  ]
})
export class BankEmployeeModule { }
