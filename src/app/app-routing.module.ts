import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DefaultComponent } from "./layouts/default/default.component";
import { DashboardComponent } from "./modules/dashboard/dashboard.component";
import { LoginComponent } from "./modules/login/login.component";
import { HomeComponent } from "./modules/home/home.component";
import { MeasureComponent } from "./modules/measure/measure.component";
import { CalculateComponent } from "./modules/calculate/calculate.component";
import { AnalyzeComponent } from "./modules/analyze/analyze.component";
import { ReduceComponent } from "./modules/reduce/reduce.component";
import { OffsetComponent } from "./modules/offset/offset.component";
import { ReportsComponent } from "./modules/reports/reports.component";
import { PredictComponent } from "./modules/predict/predict.component";
import { SettingsComponent } from "./modules/settings/settings.component";
import { SignOutComponent } from "./modules/sign-out/sign-out.component";
import { Dashboard1Component } from "./modules/dashboard1/dashboard1.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "signout", component: SignOutComponent },
  {
    path: "",
    component: DefaultComponent,
    children: [
      {
        path: "home",
        component: HomeComponent,
      },
      {
        path: "dashboard",
        component: Dashboard1Component,
      }, 
      {
        path: "dashboard1",
        component: DashboardComponent,
      },         
      {
        path: "measure",
        component: MeasureComponent,
      },
      {
        path: "calculate",
        component: CalculateComponent,
      },
      {
        path: "analyze",
        component: AnalyzeComponent,
      },{
        path: "reduce",
        component: ReduceComponent,
      },
      {
        path: "offset",
        component: OffsetComponent,
      },
      {
        path: "reports",
        component: ReportsComponent,
      },{
        path: "predict",
        component: PredictComponent,
      },{
        path: "settings",
        component: SettingsComponent,
      }
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
