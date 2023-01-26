import { AppService } from './app.service';
import { BreadcrumbService } from 'ng-breadcrumb';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'elanco';

  constructor(
    private breadcrumbService: BreadcrumbService,
    private appSvc: AppService
  ) {}

  ngOnInit() {
    this.breadcrumbService.addFriendlyNameForRoute('/dashboard', 'Services');
    this.breadcrumbService.addFriendlyNameForRoute('/service', 'Services');
  }

  updateSearchQuery(key: string) {
    this.appSvc.searchQuerySubject$.next(key);
  }
}
