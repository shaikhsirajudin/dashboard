import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';

import { DefaultComponent } from './default.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardService } from 'src/app/modules/dashboard.service';
import { LoginComponent } from 'src/app/modules/login/login.component';
import { Dashboard1Component } from 'src/app/modules/dashboard1/dashboard1.component';

@NgModule({
  declarations: [
    DefaultComponent,
    Dashboard1Component
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    MatDividerModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatTableModule,
    RouterModule,
    SharedModule,
  ],
  providers: [
    DashboardService
  ]
})
export class DefaultModule { }
