import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, concatMap } from 'rxjs/operators';
import { BankEmployeeService } from '../service/bank-employee.service';
import *  as fromEmployeeActions from './bank-employee.actions';
import { of } from "rxjs";


@Injectable()
export class BankEmployeeEffects {

loadEmployees$ = createEffect(() => 
  this.actions$.pipe(
    ofType(fromEmployeeActions.loadBankEmployees),
    mergeMap(action => 
      this.bankEmployeeservice.getAllemployee().pipe(
        map(bankEmployee => fromEmployeeActions.loadBankEmployeesSuccess({ bankEmployee })),
        catchError(error =>
          of(fromEmployeeActions.loadBankEmployeesFailure({ error })))
      )),
  )
)

loadEmployee$ = createEffect(() => 
 this.actions$.pipe(
  ofType(fromEmployeeActions.loadBankEmployee),
  mergeMap(action => 
    this.bankEmployeeservice.getEmployeeById(action.id).pipe(
      map(employee => fromEmployeeActions.loadBankEmployeeSuccess({ selectedBankEmployee: employee })),
      catchError(error =>
        of(fromEmployeeActions.loadBankEmployeesFailure({ error })))
    )),
)
)

createEmployee$ = createEffect(() => 
    this.actions$.pipe(
      ofType(fromEmployeeActions.addBankEmployee),
      mergeMap(action => 
        this.bankEmployeeservice.addEmployee(action.bankEmployee).pipe(
          map(bankEmployee => fromEmployeeActions.addBankEmployeeSuccess({ bankEmployee })),
          catchError(error =>
            of(fromEmployeeActions.addBankEmployeeFailure({ error })))
        )),
        //tap(() => this.router.navigate(["/bank-employee-list"]))
    )
)

updateEmployee$ = createEffect(() => 
  this.actions$.pipe(
    ofType(fromEmployeeActions.updateBankEmployee),
    concatMap(action => 
      this.bankEmployeeservice.updateEmployee(
        action.bankEmployee.id,
        action.bankEmployee.changes)      
      ),
      //tap(() => this.router.navigate(["/bank-employee-list"]))
  ),
  { dispatch: false }
)

deleteEmployee$ = createEffect(() => 
this.actions$.pipe(
  ofType(fromEmployeeActions.deleteBankEmployee),
  mergeMap(action => 
    this.bankEmployeeservice.removeEmployee(action.id).pipe(
      map(id => fromEmployeeActions.deleteBankEmployeeSuccess({ id: action.id })),
      catchError(error =>
        of(fromEmployeeActions.deleteBankEmployeeFailure({ error })))
    )),
)
)
constructor(private actions$: Actions, private bankEmployeeservice: BankEmployeeService) {}
}
