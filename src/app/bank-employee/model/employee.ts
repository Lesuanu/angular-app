
export interface IEmployee {
  
    firstName: string,
    lastName: string,
    dateEmployed: Date,  
    employeeSalary: IEmployeeSalary
}

export interface IEmployeeSalary {   
  
    monthlySalary: number,
    taxPayable: number,
    anualSalary: number,
    grossPayable: number
}

export enum EmployeeDepartment{
    Manager,
    HR,
    Receptionist,
    Cashier,
    Accontant,
    CustomerService,
    Security,
    Officer1,
    Officer2,
    Officer3,
}
type Employee = IEmployee & IEmployeeSalary 

export type OnlyBoolsAndHorses = {
    [key: string]: boolean | number | undefined;
  };
   