import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {CryptoChipsModel} from "../models/crypto-chips.model";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class CryptoChipsService {
  constructor(private _httpClient: HttpClient){

  }

  getAllCrypto(): Observable<CryptoChipsModel[]> {
    return this._httpClient.get<CryptoChipsModel[]>('https://api2.binance.com/api/v3/ticker/24hr');
  }
}
