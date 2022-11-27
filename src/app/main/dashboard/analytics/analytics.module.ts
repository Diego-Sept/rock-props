import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticsComponent } from './analytics.component';

import { AuthGuard } from 'app/auth/helpers';
import { Role } from 'app/auth/models';

import { DashboardService } from 'app/main/dashboard/dashboard.service';
import { InvoiceListService } from 'app/main/apps/invoice/invoice-list/invoice-list.service';
import { RouterModule } from '@angular/router';
import { CoreCommonModule } from '@core/common.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { InvoiceModule } from 'app/main/apps/invoice/invoice.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

const routes = [
  {
    path: '',
    component: AnalyticsComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin], animation: 'danalytics' },
    resolve: {
      css: DashboardService,
      inv: InvoiceListService
    }
  },
]

@NgModule({
  declarations: [
    AnalyticsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslateModule,
    NgbModule,
    PerfectScrollbarModule,
    CoreCommonModule,
    NgApexchartsModule,
    InvoiceModule
  ],
  providers: [DashboardService, InvoiceListService],
  exports: [
    AnalyticsComponent
  ]
})
export class AnalyticsModule { }
