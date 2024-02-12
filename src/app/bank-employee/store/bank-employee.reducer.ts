import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as BankEmployeeActions from './bank-employee.actions';
import { IEmployee } from './../model/employee';

export const modified = Object.create({}) 

export const bankEmployeesFeatureKey = 'bankEmployees';

export interface EmployeeState extends EntityState<IEmployee> {
  // additional entities state properties
  error: any
  selectedBankEmployee: typeof modified
}

export const adapter: EntityAdapter<IEmployee> = createEntityAdapter<IEmployee>();

export const initialState: EmployeeState = adapter.getInitialState({
  // additional entity state properties
  error: undefined,
  selectedBankEmployee: undefined
});

export const reducer = createReducer(
  initialState,
  on(BankEmployeeActions.addBankEmployeeSuccess,
    (state, action) => adapter.addOne(action.bankEmployee, state)
  ),

  on(BankEmployeeActions.addBankEmployeeFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error
      }
    }
  ),

  //single employee
  on(BankEmployeeActions.loadBankEmployeeSuccess,
    (state, action) => {
      return {
        ...state,
        selectedBankEmployee: action.selectedBankEmployee
      }
    }
  ),
  on(BankEmployeeActions.loadBankEmployeeFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error
      }
    }
  ),

  //multiple employee
  on(BankEmployeeActions.loadBankEmployeesSuccess,
    (state, action) => adapter.addMany(action.bankEmployee, state)
  ),
  on(BankEmployeeActions.loadBankEmployeesFailure, (state, action) => {
    return {
      ...state,
      error: action.error
    }
  }
  ),

  on(BankEmployeeActions.updateBankEmployee,
    (state, action) => adapter.updateOne(action.bankEmployee, state)
  ),

  on(BankEmployeeActions.deleteBankEmployeeSuccess,
    (state, action) => adapter.removeOne(action.id, state)
  ),

  on(BankEmployeeActions.deleteBankEmployeeFailure, (state, action) => {
    return {
      ...state,
      error: action.error
    }
  }
  ),
  

);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
