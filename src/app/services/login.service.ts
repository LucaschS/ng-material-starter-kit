import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginModel } from '../models/login.model';

@Injectable()
export class LoginService {
  constructor(private _httpClient: HttpClient) {
  }

  create(token: LoginModel): Observable<void> {
    return this._httpClient.post('https://fakestoreapi.com/auth/login', token).pipe(map(_ => void 0));
  }


}
