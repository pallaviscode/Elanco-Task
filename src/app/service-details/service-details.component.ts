import { AppService } from './../app.service';
import { ServiceDetailsService } from './service-details.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.scss'],
})
export class ServiceDetailsComponent implements OnInit {
  serviceDetails: any;
  constructor(
    private route: ActivatedRoute,
    private appSvc: AppService,
    private service: ServiceDetailsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params['name']);
      this.getServiceDetails(params['name']);
    });

    // Search with respect the service name
    this.appSvc.searchQuerySubject$.subscribe((key: string) => {
      this.serviceDetails = this.appSvc.serviceDetailsList.filter((res: any) =>
        res.ServiceName?.toLocaleLowerCase().includes(key.toLocaleLowerCase())
      );
    });
  }

  getServiceDetails(name: string) {
    this.service.getApplicationByName(name).subscribe((res: any) => {
      this.serviceDetails = res;
      this.appSvc.serviceDetailsList = this.serviceDetails.slice(0);
    });
  }

  getTags(tags: any) {
    return `${tags['app-name']}, ${tags['environment']}, ${tags['environment']}`;
  }
}
