import { AppService } from './../app.service';
import { Component } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [DashboardService],
})
export class DashboardComponent {
  serviceList: Array<any> = [];
  maxusedService: number = 0;

  constructor(private dashboardService: DashboardService, private appSvc: AppService) {}

  ngOnInit(): void {
    this.loadData();
    // Search with respect the service Group name
    this.appSvc.searchQuerySubject$.subscribe((key: string) => {
      this.serviceList = this.appSvc.serviceList.filter((res: any) => res.ResourceGroup?.toLocaleLowerCase().includes(key.toLocaleLowerCase()));
    })
  }

  loadData() {
    this.dashboardService.getRawData().subscribe((res: any) => {
      const key = 'ResourceGroup';
      const arrayUniqueByKey = [
        ...new Map(res.map((item: any) => [item[key], item])).values(),
      ]; // find the unique service from the response
      this.serviceList = arrayUniqueByKey.sort(
        (a: any, b: any) => b.ConsumedQuantity - a.ConsumedQuantity
      ); // Top used service should be display in top.
      this.maxusedService = this.serviceList[0].ConsumedQuantity;
      this.appSvc.serviceList = this.serviceList.slice(0); // clone and keep the master copy for search
    });
  }
}
