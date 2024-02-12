import { GetAllEmployees } from './../../store/bank-employee.actions';
import { IEmployee } from './../../model/employee';
import { BankEmployeeService, IBuilding } from './../../service/bank-employee.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromActions from "../../store/bank-employee.actions";

@Component({
  selector: 'app-bank-employee-list',
  templateUrl: './bank-employee-list.component.html',
  styleUrls: ['./bank-employee-list.component.scss']
})
export class BankEmployeeListComponent implements OnInit {
  //product$: Observable<BankEmployee[]> | undefined
  employees: IEmployee[] = []
  building: IBuilding[] = []

  constructor(private employeeService: BankEmployeeService, private store: Store<IEmployee>) { }

  ngOnInit(): void {
    //this.store.dispatch(loadBankEmployees())
    this.getAllEmployee();
    this.employeeService.getBuilding().subscribe(b => this.employees = b);
   //this.getE();
  }

  getAllEmployee(){
    //this.product$ = this.store.pipe(select(selectEmployees))
    const empSub = {
      next: (e: IEmployee[]) =>{
         this.store.dispatch(fromActions.GetAllEmployees())
         this.employees = e
        },

      error: () => {
  
      }
    }
    this.employeeService.getAllemployee().subscribe(empSub)
    console.log(this.employees)
  }

  // getE(){
  //   this.employeeService.getAllemployee().subscribe(employee => {
  //     this.employees == employee})
  //   
  // }
}
