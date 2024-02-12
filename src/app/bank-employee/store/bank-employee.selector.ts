import { createFeatureSelector, createSelector } from "@ngrx/store";
import { bankEmployeesFeatureKey, EmployeeState, selectAll } from "./bank-employee.reducer";

export const selectEmployeeState = createFeatureSelector<EmployeeState>(
    bankEmployeesFeatureKey
);

//to select all employees
export const selectEmployees = createSelector(selectEmployeeState, selectAll);

//to select one employee
export const selectEmployee = createSelector(selectEmployeeState, (state: EmployeeState) => {
    state.selectedBankEmployee
});
