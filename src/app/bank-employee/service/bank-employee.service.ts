import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from '../model/employee';
import { Observable } from 'rxjs';
//import { environment } from  '../../enviromnents/environment';

export interface IBuilding{
    id: string | null | number;
    buildingName: string;
    buildingPrice: number;
    buildingAgent: string;
    buildingLocation: string;
    datePurchased: string;
}

@Injectable({
  providedIn: 'root'
})

export class BankEmployeeService {

  //private baseUrl: string = "https://localhost:5001/bankemployees/";
  private baseUrl: string = "https://localhost:7215/api/Building/all-building"; 

  constructor(private http: HttpClient) { }

  getBuilding(): Observable<IEmployee[]>{
    console.log(this.baseUrl)
     return this.http.get<IEmployee[]>(this.baseUrl)
  }
  
  getAllemployee() : Observable<IEmployee[]>{
      return this.http.get<IEmployee[]>(this.baseUrl + "get-employees")
  }

  getEmployeeById(id: string) : Observable<IEmployee>{
      return this.http.get<IEmployee>(this.baseUrl + "get-employee" + id)
  }

  addEmployee(employee: IEmployee) : Observable<IEmployee>{
      return this.http.post<IEmployee>(this.baseUrl + "add-employee", employee);
  }

  removeEmployee(id: string){
      return this.http.delete(this.baseUrl + "delete-employee" + id)
  }

  updateEmployee(id: number | string, changes: Partial<IEmployee>) : Observable<IEmployee> {
      return this.http.put<IEmployee>(this.baseUrl + "update-employee" + id, changes)
  }
  
}
