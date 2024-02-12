import { Update } from '@ngrx/entity';
import { IEmployee } from './../../model/employee';
import { addBankEmployee } from './../../store/bank-employee.actions';
import { EmployeeState } from './../../store/bank-employee.reducer';
import { BankEmployeeService } from './../../service/bank-employee.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { selectEmployees } from '../../store/bank-employee.selector';
import * as fromActions from "../../store/bank-employee.actions";
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bank-employee',
  templateUrl: './bank-employee.component.html',
  styleUrls: ['./bank-employee.component.scss']
})
export class BankEmployeeComponent implements OnInit {

  constructor(private bankEmployeeService: BankEmployeeService,
    private store: Store<EmployeeState>,
    private route: ActivatedRoute) { }

  employees$: Observable<IEmployee[]> | undefined;
 
  employeeForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    dateEmployed: new FormControl(),
    monthlySalary: new FormControl(),
    taxPayable: new FormControl(),
    anualSalary: new FormControl(),
    grossPayable: new FormControl(),
  })

  ngOnInit(): void {
    //this.store.dispatch(fromActions.loadBankEmployee({ id: this.route.snapshot.paramMap.get("id") as string}))
    //this.employees$ = this.store.pipe(select(selectEmployees))
  
  }
  
  onSubmit(v: NgForm){
     this.store.dispatch(addBankEmployee({ bankEmployee: v.value}))
     //this.router.navigate(['/bank-employee-list'])
     console.log(this.employeeForm.value)
     //this.bankservice.CreateBankEmployee(v.value).subscribe(data => console.log(data))
  }

}

