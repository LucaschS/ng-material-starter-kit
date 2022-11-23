import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {ActivityModel} from "../models/activity.model";

@Injectable()
export class ActivityService {
  constructor(private _httpClient: HttpClient) {
  }
  getOne(type: string): Observable<ActivityModel> {
    return this._httpClient.get<ActivityModel>(`http://www.boredapi.com/api/activity?${type}`);
  }
}
