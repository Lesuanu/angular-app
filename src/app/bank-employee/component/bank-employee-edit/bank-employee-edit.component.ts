import { IEmployee } from './../../model/employee';
import { updateBankEmployee } from './../../store/bank-employee.actions';
import { selectEmployee } from './../../store/bank-employee.selector';
import { Actions } from '@ngrx/effects';
import { Component, OnInit } from '@angular/core';
import { EmployeeState } from '../../store/bank-employee.reducer';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { BankEmployeeService } from '../../service/bank-employee.service';
import { loadBankEmployee } from '../../store/bank-employee.actions';
import { Update } from '@ngrx/entity';


@Component({
  selector: 'app-bank-employee-edit',
  templateUrl: './bank-employee-edit.component.html',
  styleUrls: ['./bank-employee-edit.component.scss']
})
export class BankEmployeeEditComponent implements OnInit {
  
  model: any = {};

  constructor(private store: Store<EmployeeState>,
               private route: ActivatedRoute,
               private bankEmployeeService: BankEmployeeService) { }

  ngOnInit(): void {
    this.store.dispatch(loadBankEmployee({ id: this.route.snapshot.paramMap.get("id") as string}))

    this.store.pipe(select(selectEmployee)).subscribe(employee => {
      this.model = Object.assign({} as IEmployee, employee)
    })
  }

  OnSubmit(){ 
    const update: Update<IEmployee> = {
      id: this.model.id,
      changes: this.model
   }
    this.store.dispatch(updateBankEmployee({ bankEmployee: update}))
  }
}

