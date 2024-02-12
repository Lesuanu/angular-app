import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankEmployeeListComponent } from './component/bank-employee-list/bank-employee-list.component';
import { BankEmployeeComponent } from './component/bank-employee/bank-employee.component';

const routes: Routes = [
  {path: '', component: BankEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankEmployeeRoutingModule { }
