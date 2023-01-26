import { Constants } from './../../../constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ServiceDetailsService {
  constructor(private httpClient: HttpClient) {}

  getApplicationByName(name: string) {
    return this.httpClient.get(Constants.BASE_API + 'api/applications/' + name);
  }
}
