import { Injectable } from '@angular/core';
import {ProductModel} from "../models/product.model";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {EmployeeModel} from "../models/employee.model";

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient){
  }
  create(product: Omit<EmployeeModel, 'id'>): Observable<EmployeeModel> {
    return this._httpClient.post<EmployeeModel>('https://dummy.restapiexample.com/api/v1/create', product);
  }
}
