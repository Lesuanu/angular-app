import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { IEmployee } from '../model/employee';

export const GetAllEmployees = createAction(
  '[bankEmployee/Api] Get Employees',
);

//create employee
export const addBankEmployee = createAction(
  '[BankEmployee add effect] Add BankEmployee success',
  props<{ bankEmployee: IEmployee }>()
  );
 
export const addBankEmployeeSuccess = createAction(
    '[BankEmployee/API] Add BankEmployee',
    props<{ bankEmployee: IEmployee }>()
);

export const addBankEmployeeFailure = createAction(
  '[BankEmployee add effect] Add BankEmployee failure',
  props<{ error: any }>()
  );

//read employees
export const loadBankEmployees = createAction(
    '[BankEmployee/API] Load BankEmployees', 
);

export const loadBankEmployeesSuccess = createAction(
  '[BankEmployee/API] Upsert BankEmployee',
  props<{ bankEmployee: IEmployee[] }>()
);

export const loadBankEmployeesFailure = createAction(
  '[BankEmployee/API] Add BankEmployees',
  props<{ error: any }>()
);

//read Employee
export const loadBankEmployee = createAction(
  '[BankEmployee/API] Upsert BankEmployees',
  props<{ id: string }>()
);

export const loadBankEmployeeSuccess = createAction(
  '[BankEmployee/API] Update BankEmployee',
  props<{ selectedBankEmployee: IEmployee }>()
);

export const loadBankEmployeeFailure = createAction(
  '[BankEmployee/API] Update BankEmployees',
  props<{ error: any }>()
);

//update employee
export const updateBankEmployee = createAction(
  '[BankEmployee/API] Delete BankEmployee',
  props<{ bankEmployee: Update<IEmployee> }>()
);

//delete
export const deleteBankEmployee = createAction(
  '[BankEmployee/API] Delete BankEmployee',
  props<{ id: string }>()
);

export const deleteBankEmployeeSuccess = createAction(
  '[BankEmployee/API] from effect Delete BankEmployees',
  props<{ id: string }>()
);

export const deleteBankEmployeeFailure = createAction(
  '[BankEmployee/API] Delete BankEmployees',
  props<{ error: any }>()
);

