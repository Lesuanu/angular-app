import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 {path: "employees", loadChildren: () => import('./bank-employee/bank-employee.module')
                                                                 .then(m => m.BankEmployeeModule)},
 {path: "login", loadChildren: () => import('./auth/auth.module')
                                                                 .then(m => m.AuthModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
