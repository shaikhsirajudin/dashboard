import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { HomeComponent } from './modules/home/home.component';
import { MeasureComponent } from './modules/measure/measure.component';
import { CalculateComponent } from './modules/calculate/calculate.component';
import { AnalyzeComponent } from './modules/analyze/analyze.component';
import { ReduceComponent } from './modules/reduce/reduce.component';
import { OffsetComponent } from './modules/offset/offset.component';
import { ReportsComponent } from './modules/reports/reports.component';
import { PredictComponent } from './modules/predict/predict.component';
import { SignOutComponent } from './modules/sign-out/sign-out.component';
import { SettingsComponent } from './modules/settings/settings.component';
import { LoginComponent } from './modules/login/login.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent,
    MeasureComponent,
    CalculateComponent,
    AnalyzeComponent,
    ReduceComponent,
    OffsetComponent,
    ReportsComponent,
    PredictComponent,
    SignOutComponent,
    SettingsComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule, 
    FlexLayoutModule,
    MatCardModule,
    MatDividerModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatTableModule,
    RouterModule,    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class AppModule { }
