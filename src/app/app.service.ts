import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  searchQuerySubject$: BehaviorSubject<any> = new BehaviorSubject('');
  serviceList: Array<any> = [];
  serviceDetailsList: Array<any> = [];
  constructor() {}
}
