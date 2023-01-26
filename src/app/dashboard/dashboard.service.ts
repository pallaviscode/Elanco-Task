import { Constants } from './../../../constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class DashboardService {
  constructor(private httpClient: HttpClient) {}

  getRawData(): Observable<any> {
    return this.httpClient.get(Constants.BASE_API + '/api/raw');
  }

  getApplication(): Observable<any> {
    return this.httpClient.get(Constants.BASE_API + '/api/applications');
  }
}
