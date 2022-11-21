import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {ProductModel} from "../models/product.model";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class CategoryService {
  constructor(private _httpClient: HttpClient){

  }

  getAllCategories(): Observable<ProductModel[]> {
    return this._httpClient.get<ProductModel[]>('https://fakestoreapi.com/products/categories');
  }
}
