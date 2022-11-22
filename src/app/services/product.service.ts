import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {ProductModel} from "../models/product.model";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ProductService {
  constructor(private _httpClient: HttpClient){
  }

  create(product: Omit<ProductModel, 'id'>): Observable<ProductModel> {
    return this._httpClient.post<ProductModel>('https://fakestoreapi.com/products/', product);
  }

  // create(product: ProductModel): Observable<ProductModel> {
  //   return this._httpClient.post<ProductModel>('https://fakestoreapi.com/products/', product);
  // }

  getAll(): Observable<ProductModel[]> {
    return this._httpClient.get<ProductModel[]>('https://fakestoreapi.com/products/');
  }

  getAllCategories(): Observable<ProductModel[]> {
    return this._httpClient.get<ProductModel[]>('https://fakestoreapi.com/products/categories');
  }

}
