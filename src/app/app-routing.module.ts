import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent }, // deafult Route
  {
    path: 'service/:name',
    loadChildren: () =>
      import('./service-details/service-details.module').then(
        (m) => m.ServiceDetailsModule
      ),
  }, // Lazy loaded moudle
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
