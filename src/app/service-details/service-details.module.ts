import { ServiceDetailsService } from './service-details.service';
import { ServiceDetailsComponent } from './service-details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceDetailsRoutingModule } from './service-details-routing.module';

@NgModule({
  declarations: [ServiceDetailsComponent],
  imports: [CommonModule, ServiceDetailsRoutingModule],
  providers: [ServiceDetailsService],
})
export class ServiceDetailsModule {}
