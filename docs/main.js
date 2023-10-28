"use strict";
(self["webpackChunkangular_highcharts_dashboard"] = self["webpackChunkangular_highcharts_dashboard"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _layouts_default_default_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/default/default.component */ 9295);
/* harmony import */ var _modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/dashboard/dashboard.component */ 2727);
/* harmony import */ var _modules_posts_posts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/posts/posts.component */ 4682);
/* harmony import */ var _modules_articles_articles_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/articles/articles.component */ 1873);
/* harmony import */ var _modules_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/contacts/contacts.component */ 5156);
/* harmony import */ var _modules_leads_leads_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/leads/leads.component */ 2146);
/* harmony import */ var _modules_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/login/login.component */ 7484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);










const routes = [{
  path: '',
  component: _layouts_default_default_component__WEBPACK_IMPORTED_MODULE_0__.DefaultComponent,
  children: [{
    path: '',
    component: _modules_login_login_component__WEBPACK_IMPORTED_MODULE_6__.LoginComponent
  }, {
    path: 'dashboard',
    component: _modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent
  }, {
    path: 'posts',
    component: _modules_posts_posts_component__WEBPACK_IMPORTED_MODULE_2__.PostsComponent
  }, {
    path: 'articles',
    component: _modules_articles_articles_component__WEBPACK_IMPORTED_MODULE_3__.ArticlesComponent
  }, {
    path: 'contacts',
    component: _modules_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_4__.ContactsComponent
  }, {
    path: 'leads',
    component: _modules_leads_leads_component__WEBPACK_IMPORTED_MODULE_5__.LeadsComponent
  }]
}];
class AppRoutingModule {
  static ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class AppComponent {
  title = 'angular-highcharts-dashboard';
  static ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 1,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
    encapsulation: 2
  });
}

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _layouts_default_default_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts/default/default.module */ 1677);
/* harmony import */ var _modules_articles_articles_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/articles/articles.component */ 1873);
/* harmony import */ var _modules_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/contacts/contacts.component */ 5156);
/* harmony import */ var _modules_leads_leads_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/leads/leads.component */ 2146);
/* harmony import */ var _modules_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/home/home.component */ 4269);
/* harmony import */ var _modules_measure_measure_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/measure/measure.component */ 4259);
/* harmony import */ var _modules_calculate_calculate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/calculate/calculate.component */ 5933);
/* harmony import */ var _modules_analyze_analyze_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/analyze/analyze.component */ 2682);
/* harmony import */ var _modules_reduce_reduce_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/reduce/reduce.component */ 7900);
/* harmony import */ var _modules_offset_offset_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/offset/offset.component */ 8121);
/* harmony import */ var _modules_reports_reports_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/reports/reports.component */ 3405);
/* harmony import */ var _modules_predict_predict_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/predict/predict.component */ 3756);
/* harmony import */ var _modules_sign_out_sign_out_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/sign-out/sign-out.component */ 6931);
/* harmony import */ var _modules_settings_settings_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/settings/settings.component */ 8712);
/* harmony import */ var _modules_login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/login/login.component */ 7484);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/flex-layout */ 5249);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/divider */ 9400);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/paginator */ 9687);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/sidenav */ 1465);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/table */ 6798);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 1699);



























class AppModule {
  static ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__.BrowserAnimationsModule, _layouts_default_default_module__WEBPACK_IMPORTED_MODULE_2__.DefaultModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_20__.FlexLayoutModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_21__.MatCardModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__.MatDividerModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__.MatPaginatorModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__.MatSidenavModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_25__.MatTableModule, _angular_router__WEBPACK_IMPORTED_MODULE_26__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _modules_articles_articles_component__WEBPACK_IMPORTED_MODULE_3__.ArticlesComponent, _modules_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_4__.ContactsComponent, _modules_leads_leads_component__WEBPACK_IMPORTED_MODULE_5__.LeadsComponent, _modules_home_home_component__WEBPACK_IMPORTED_MODULE_6__.HomeComponent, _modules_measure_measure_component__WEBPACK_IMPORTED_MODULE_7__.MeasureComponent, _modules_calculate_calculate_component__WEBPACK_IMPORTED_MODULE_8__.CalculateComponent, _modules_analyze_analyze_component__WEBPACK_IMPORTED_MODULE_9__.AnalyzeComponent, _modules_reduce_reduce_component__WEBPACK_IMPORTED_MODULE_10__.ReduceComponent, _modules_offset_offset_component__WEBPACK_IMPORTED_MODULE_11__.OffsetComponent, _modules_reports_reports_component__WEBPACK_IMPORTED_MODULE_12__.ReportsComponent, _modules_predict_predict_component__WEBPACK_IMPORTED_MODULE_13__.PredictComponent, _modules_sign_out_sign_out_component__WEBPACK_IMPORTED_MODULE_14__.SignOutComponent, _modules_settings_settings_component__WEBPACK_IMPORTED_MODULE_15__.SettingsComponent, _modules_login_login_component__WEBPACK_IMPORTED_MODULE_16__.LoginComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__.BrowserAnimationsModule, _layouts_default_default_module__WEBPACK_IMPORTED_MODULE_2__.DefaultModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_20__.FlexLayoutModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_21__.MatCardModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__.MatDividerModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__.MatPaginatorModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__.MatSidenavModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_25__.MatTableModule, _angular_router__WEBPACK_IMPORTED_MODULE_26__.RouterModule]
  });
})();

/***/ }),

/***/ 9295:
/*!******************************************************!*\
  !*** ./src/app/layouts/default/default.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultComponent: () => (/* binding */ DefaultComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sidenav */ 1465);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/footer/footer.component */ 8014);
/* harmony import */ var _shared_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/sidebar/sidebar.component */ 7378);





class DefaultComponent {
  sideBarOpen = true;
  constructor() {}
  ngOnInit() {}
  sideBarToggler(event) {
    this.sideBarOpen = !this.sideBarOpen;
  }
  static ɵfac = function DefaultComponent_Factory(t) {
    return new (t || DefaultComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: DefaultComponent,
    selectors: [["app-default"]],
    decls: 6,
    vars: 1,
    consts: [["mode", "side", 3, "opened"]],
    template: function DefaultComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-drawer-container")(1, "mat-drawer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-drawer-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "app-footer");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("opened", ctx.sideBarOpen);
      }
    },
    dependencies: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__.MatDrawer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__.MatDrawerContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__.MatDrawerContent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent, _shared_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__.SidebarComponent],
    styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\nmat-drawer[_ngcontent-%COMP%] {\n  width: 350px;\n  background-color: rgb(65, 87, 35);\n}\n\nmat-drawer-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\nmat-drawer-content[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGF5b3V0cy9kZWZhdWx0L2RlZmF1bHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsaUNBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5tYXQtZHJhd2VyIHtcbiAgd2lkdGg6IDM1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjUsIDg3LCAzNSk7XG59XG5cbm1hdC1kcmF3ZXItY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5tYXQtZHJhd2VyLWNvbnRlbnQge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1677:
/*!***************************************************!*\
  !*** ./src/app/layouts/default/default.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultModule: () => (/* binding */ DefaultModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ 5249);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ 9400);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/paginator */ 9687);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sidenav */ 1465);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ 6798);
/* harmony import */ var src_app_modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/modules/dashboard/dashboard.component */ 2727);
/* harmony import */ var _default_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default.component */ 9295);
/* harmony import */ var src_app_modules_posts_posts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/posts/posts.component */ 4682);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ 6208);
/* harmony import */ var src_app_modules_dashboard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/dashboard.service */ 211);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);














class DefaultModule {
  static ɵfac = function DefaultModule_Factory(t) {
    return new (t || DefaultModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: DefaultModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    providers: [src_app_modules_dashboard_service__WEBPACK_IMPORTED_MODULE_4__.DashboardService],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__.FlexLayoutModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__.MatDividerModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__.MatPaginatorModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__.MatSidenavModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](DefaultModule, {
    declarations: [_default_component__WEBPACK_IMPORTED_MODULE_1__.DefaultComponent, src_app_modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent, src_app_modules_posts_posts_component__WEBPACK_IMPORTED_MODULE_2__.PostsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__.FlexLayoutModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__.MatDividerModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__.MatPaginatorModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__.MatSidenavModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule]
  });
})();

/***/ }),

/***/ 2682:
/*!******************************************************!*\
  !*** ./src/app/modules/analyze/analyze.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnalyzeComponent: () => (/* binding */ AnalyzeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class AnalyzeComponent {
  static ɵfac = function AnalyzeComponent_Factory(t) {
    return new (t || AnalyzeComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AnalyzeComponent,
    selectors: [["app-analyze"]],
    decls: 2,
    vars: 0,
    template: function AnalyzeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "analyze works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1873:
/*!********************************************************!*\
  !*** ./src/app/modules/articles/articles.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArticlesComponent: () => (/* binding */ ArticlesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class ArticlesComponent {
  constructor() {}
  ngOnInit() {}
  static ɵfac = function ArticlesComponent_Factory(t) {
    return new (t || ArticlesComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ArticlesComponent,
    selectors: [["app-articles"]],
    decls: 2,
    vars: 0,
    template: function ArticlesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "articles works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5933:
/*!**********************************************************!*\
  !*** ./src/app/modules/calculate/calculate.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalculateComponent: () => (/* binding */ CalculateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class CalculateComponent {
  static ɵfac = function CalculateComponent_Factory(t) {
    return new (t || CalculateComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: CalculateComponent,
    selectors: [["app-calculate"]],
    decls: 2,
    vars: 0,
    template: function CalculateComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "calculate works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5156:
/*!********************************************************!*\
  !*** ./src/app/modules/contacts/contacts.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactsComponent: () => (/* binding */ ContactsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class ContactsComponent {
  constructor() {}
  ngOnInit() {}
  static ɵfac = function ContactsComponent_Factory(t) {
    return new (t || ContactsComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ContactsComponent,
    selectors: [["app-contacts"]],
    decls: 2,
    vars: 0,
    template: function ContactsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "contacts works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 211:
/*!**********************************************!*\
  !*** ./src/app/modules/dashboard.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardService: () => (/* binding */ DashboardService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class DashboardService {
  constructor() {}
  bigChart() {
    return [{
      name: "Asia",
      data: [502, 635, 809, 947, 1402, 3634, 5268]
    }, {
      name: "Africa",
      data: [106, 107, 111, 133, 221, 767, 1766]
    }, {
      name: "Europe",
      data: [163, 203, 276, 408, 547, 729, 628]
    }, {
      name: "America",
      data: [18, 31, 54, 156, 339, 818, 1201]
    }, {
      name: "Oceania",
      data: [2, 2, 2, 6, 13, 30, 46]
    }];
  }
  cards() {
    return [71, 78, 39, 66];
  }
  pieChart() {
    return [{
      name: "Chrome",
      y: 61.41,
      sliced: true,
      selected: true
    }, {
      name: "Internet Explorer",
      y: 11.84
    }, {
      name: "Firefox",
      y: 10.85
    }, {
      name: "Edge",
      y: 4.67
    }, {
      name: "Safari",
      y: 4.18
    }, {
      name: "Sogou Explorer",
      y: 1.64
    }, {
      name: "Opera",
      y: 1.6
    }, {
      name: "QQ",
      y: 1.2
    }, {
      name: "Other",
      y: 2.61
    }];
  }
  static ɵfac = function DashboardService_Factory(t) {
    return new (t || DashboardService)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: DashboardService,
    factory: DashboardService.ɵfac,
    providedIn: "root"
  });
}

/***/ }),

/***/ 2727:
/*!**********************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardComponent: () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 6798);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ 9687);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dashboard.service */ 211);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5356);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ 9400);
/* harmony import */ var _shared_widgets_area_area_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/widgets/area/area.component */ 5705);
/* harmony import */ var _shared_widgets_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/widgets/card/card.component */ 6656);
/* harmony import */ var _shared_widgets_pie_pie_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/widgets/pie/pie.component */ 9253);












function DashboardComponent_th_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function DashboardComponent_td_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](element_r10.position);
  }
}
function DashboardComponent_th_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function DashboardComponent_td_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](element_r11.name);
  }
}
function DashboardComponent_th_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Weight");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function DashboardComponent_td_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](element_r12.weight);
  }
}
function DashboardComponent_th_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Symbol");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function DashboardComponent_td_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](element_r13.symbol);
  }
}
function DashboardComponent_tr_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 23);
  }
}
function DashboardComponent_tr_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 24);
  }
}
const _c0 = function () {
  return [5, 10, 20];
};
const ELEMENT_DATA = [{
  position: 1,
  name: "Hydrogen",
  weight: 1.0079,
  symbol: "H"
}, {
  position: 2,
  name: "Helium",
  weight: 4.0026,
  symbol: "He"
}, {
  position: 3,
  name: "Lithium",
  weight: 6.941,
  symbol: "Li"
}, {
  position: 4,
  name: "Beryllium",
  weight: 9.0122,
  symbol: "Be"
}, {
  position: 5,
  name: "Boron",
  weight: 10.811,
  symbol: "B"
}, {
  position: 6,
  name: "Carbon",
  weight: 12.0107,
  symbol: "C"
}, {
  position: 7,
  name: "Nitrogen",
  weight: 14.0067,
  symbol: "N"
}, {
  position: 8,
  name: "Oxygen",
  weight: 15.9994,
  symbol: "O"
}, {
  position: 9,
  name: "Fluorine",
  weight: 18.9984,
  symbol: "F"
}, {
  position: 10,
  name: "Neon",
  weight: 20.1797,
  symbol: "Ne"
}, {
  position: 11,
  name: "Sodium",
  weight: 22.9897,
  symbol: "Na"
}, {
  position: 12,
  name: "Magnesium",
  weight: 24.305,
  symbol: "Mg"
}, {
  position: 13,
  name: "Aluminum",
  weight: 26.9815,
  symbol: "Al"
}, {
  position: 14,
  name: "Silicon",
  weight: 28.0855,
  symbol: "Si"
}, {
  position: 15,
  name: "Phosphorus",
  weight: 30.9738,
  symbol: "P"
}, {
  position: 16,
  name: "Sulfur",
  weight: 32.065,
  symbol: "S"
}, {
  position: 17,
  name: "Chlorine",
  weight: 35.453,
  symbol: "Cl"
}, {
  position: 18,
  name: "Argon",
  weight: 39.948,
  symbol: "Ar"
}, {
  position: 19,
  name: "Potassium",
  weight: 39.0983,
  symbol: "K"
}, {
  position: 20,
  name: "Calcium",
  weight: 40.078,
  symbol: "Ca"
}];
class DashboardComponent {
  dashboardService;
  bigChart = [];
  cards = [];
  pieChart = [];
  displayedColumns = ["position", "name", "weight", "symbol"];
  dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(ELEMENT_DATA);
  paginator;
  constructor(dashboardService) {
    this.dashboardService = dashboardService;
  }
  ngOnInit() {
    this.bigChart = this.dashboardService.bigChart();
    this.cards = this.dashboardService.cards();
    this.pieChart = this.dashboardService.pieChart();
    this.dataSource.paginator = this.paginator;
  }
  static ɵfac = function DashboardComponent_Factory(t) {
    return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_dashboard_service__WEBPACK_IMPORTED_MODULE_0__.DashboardService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: DashboardComponent,
    selectors: [["app-dashboard"]],
    viewQuery: function DashboardComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__.MatPaginator, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
      }
    },
    decls: 41,
    vars: 11,
    consts: [[3, "data"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", "fxLayoutGap", "20px", 1, "stats-cards"], ["appearance", "outlined", "fxFlex", "25"], ["label", "New Users", "total", "12k", "percentage", "50", 3, "data"], ["label", "Users retention", "total", "10k", "percentage", "40", 3, "data"], ["label", "Users engagement", "total", "8k", "percentage", "30", 3, "data"], ["label", "Referral", "total", "6k", "percentage", "20", 3, "data"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", "fxLayoutGap", "20px"], ["fxFlex", "60"], [1, "mat-elevation-z8"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "weight"], ["matColumnDef", "symbol"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["fxFlex", "40"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]],
    template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-widget-area", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "br")(3, "mat-divider")(4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 1)(6, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "app-widget-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "app-widget-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "app-widget-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "app-widget-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "br")(15, "mat-divider")(16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 7)(18, "div", 8)(19, "div", 9)(20, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](21, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, DashboardComponent_th_22_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, DashboardComponent_td_23_Template, 2, 1, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](24, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, DashboardComponent_th_25_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, DashboardComponent_td_26_Template, 2, 1, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](27, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, DashboardComponent_th_28_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, DashboardComponent_td_29_Template, 2, 1, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](30, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, DashboardComponent_th_31_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, DashboardComponent_td_32_Template, 2, 1, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, DashboardComponent_tr_33_Template, 1, 0, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, DashboardComponent_tr_34_Template, 1, 0, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](35, "mat-paginator", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](37, "app-widget-pie", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](38, "br")(39, "br")(40, "br");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx.bigChart);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx.cards);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx.cards);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx.cards);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx.cards);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](10, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx.pieChart);
      }
    },
    dependencies: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__.MatDivider, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRow, _shared_widgets_area_area_component__WEBPACK_IMPORTED_MODULE_1__.AreaComponent, _shared_widgets_card_card_component__WEBPACK_IMPORTED_MODULE_2__.CardComponent, _shared_widgets_pie_pie_component__WEBPACK_IMPORTED_MODULE_3__.PieComponent],
    styles: [".stats-cards[_ngcontent-%COMP%]   .mat-mdc-card[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZ0JBQUE7QUFBSjs7QUFJQTtFQUNFLFdBQUE7QUFERiIsInNvdXJjZXNDb250ZW50IjpbIi5zdGF0cy1jYXJkcyB7XG4gIC5tYXQtbWRjLWNhcmQge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 4269:
/*!************************************************!*\
  !*** ./src/app/modules/home/home.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class HomeComponent {
  static ɵfac = function HomeComponent_Factory(t) {
    return new (t || HomeComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HomeComponent,
    selectors: [["app-home"]],
    decls: 2,
    vars: 0,
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "home works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2146:
/*!**************************************************!*\
  !*** ./src/app/modules/leads/leads.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LeadsComponent: () => (/* binding */ LeadsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class LeadsComponent {
  constructor() {}
  ngOnInit() {}
  static ɵfac = function LeadsComponent_Factory(t) {
    return new (t || LeadsComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: LeadsComponent,
    selectors: [["app-leads"]],
    decls: 2,
    vars: 0,
    template: function LeadsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "leads works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7484:
/*!**************************************************!*\
  !*** ./src/app/modules/login/login.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 8497);





function LoginComponent_p_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.error, " ");
  }
}
class LoginComponent {
  form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({
    username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(''),
    password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('')
  });
  ngOnInit() {}
  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
    }
  }
  error;
  submitEM = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  static ɵfac = function LoginComponent_Factory(t) {
    return new (t || LoginComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: LoginComponent,
    selectors: [["app-login"]],
    inputs: {
      error: "error"
    },
    outputs: {
      submitEM: "submitEM"
    },
    decls: 15,
    vars: 1,
    consts: [[3, "ngSubmit"], ["type", "text", "matInput", "", "placeholder", "Username", "formControlName", "username"], ["type", "password", "matInput", "", "placeholder", "Password", "formControlName", "password"], ["class", "error", 4, "ngIf"], [1, "button"], ["type", "submit", "mat-button", ""], [1, "error"]],
    template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content")(4, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_4_listener() {
          return ctx.submit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p")(6, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p")(9, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LoginComponent_p_11_Template, 2, 1, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4)(13, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardTitle],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4259:
/*!******************************************************!*\
  !*** ./src/app/modules/measure/measure.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MeasureComponent: () => (/* binding */ MeasureComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class MeasureComponent {
  static ɵfac = function MeasureComponent_Factory(t) {
    return new (t || MeasureComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MeasureComponent,
    selectors: [["app-measure"]],
    decls: 2,
    vars: 0,
    template: function MeasureComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "measure works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8121:
/*!****************************************************!*\
  !*** ./src/app/modules/offset/offset.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OffsetComponent: () => (/* binding */ OffsetComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class OffsetComponent {
  static ɵfac = function OffsetComponent_Factory(t) {
    return new (t || OffsetComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: OffsetComponent,
    selectors: [["app-offset"]],
    decls: 2,
    vars: 0,
    template: function OffsetComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "offset works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4682:
/*!**************************************************!*\
  !*** ./src/app/modules/posts/posts.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PostsComponent: () => (/* binding */ PostsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class PostsComponent {
  constructor() {}
  ngOnInit() {}
  static ɵfac = function PostsComponent_Factory(t) {
    return new (t || PostsComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PostsComponent,
    selectors: [["app-posts"]],
    decls: 2,
    vars: 0,
    template: function PostsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "posts works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3756:
/*!******************************************************!*\
  !*** ./src/app/modules/predict/predict.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PredictComponent: () => (/* binding */ PredictComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class PredictComponent {
  static ɵfac = function PredictComponent_Factory(t) {
    return new (t || PredictComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PredictComponent,
    selectors: [["app-predict"]],
    decls: 2,
    vars: 0,
    template: function PredictComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "predict works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7900:
/*!****************************************************!*\
  !*** ./src/app/modules/reduce/reduce.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReduceComponent: () => (/* binding */ ReduceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class ReduceComponent {
  static ɵfac = function ReduceComponent_Factory(t) {
    return new (t || ReduceComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ReduceComponent,
    selectors: [["app-reduce"]],
    decls: 2,
    vars: 0,
    template: function ReduceComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "reduce works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3405:
/*!******************************************************!*\
  !*** ./src/app/modules/reports/reports.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportsComponent: () => (/* binding */ ReportsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class ReportsComponent {
  static ɵfac = function ReportsComponent_Factory(t) {
    return new (t || ReportsComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ReportsComponent,
    selectors: [["app-reports"]],
    decls: 2,
    vars: 0,
    template: function ReportsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "reports works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8712:
/*!********************************************************!*\
  !*** ./src/app/modules/settings/settings.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsComponent: () => (/* binding */ SettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class SettingsComponent {
  static ɵfac = function SettingsComponent_Factory(t) {
    return new (t || SettingsComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SettingsComponent,
    selectors: [["app-settings"]],
    decls: 2,
    vars: 0,
    template: function SettingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "settings works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6931:
/*!********************************************************!*\
  !*** ./src/app/modules/sign-out/sign-out.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignOutComponent: () => (/* binding */ SignOutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class SignOutComponent {
  static ɵfac = function SignOutComponent_Factory(t) {
    return new (t || SignOutComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SignOutComponent,
    selectors: [["app-sign-out"]],
    decls: 2,
    vars: 0,
    template: function SignOutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sign-out works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8014:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/divider */ 9400);


class FooterComponent {
  constructor() {}
  ngOnInit() {}
  static ɵfac = function FooterComponent_Factory(t) {
    return new (t || FooterComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FooterComponent,
    selectors: [["app-footer"]],
    decls: 2,
    vars: 0,
    template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-divider")(1, "footer");
      }
    },
    dependencies: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_1__.MatDivider],
    styles: ["footer[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7XG4gIHBhZGRpbmc6IDIwcHg7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 74:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5356);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ 2484);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ 8128);







class HeaderComponent {
  toggleSideBarForMe = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  constructor() {}
  ngOnInit() {}
  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);
  }
  static ɵfac = function HeaderComponent_Factory(t) {
    return new (t || HeaderComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HeaderComponent,
    selectors: [["app-header"]],
    outputs: {
      toggleSideBarForMe: "toggleSideBarForMe"
    },
    decls: 27,
    vars: 0,
    consts: [["color", "primary"], ["mat-icon-button", "", 3, "click"], [1, "header-left-logo"], ["fxFlex", "", "fxLayout", "row", "fxLayoutAlign", "flex-end"], ["fxLayout", "row", "fxLayoutGap", "20px"], ["mat-icon-button", ""], ["mat-menu-item", ""]],
    template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0)(1, "mat-toolbar-row")(2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_2_listener() {
          return ctx.toggleSideBar();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span")(6, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "bar_chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3)(9, "ul", 4)(10, "li")(11, "button", 5)(12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li")(15, "button", 5)(16, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "help_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li")(19, "button", 5)(20, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "person_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-menu")(23, "button", 6)(24, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "exit_to_app");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Sign out ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      }
    },
    dependencies: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultFlexDirective, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__.MatToolbar, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__.MatToolbarRow, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatIconButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenuItem],
    styles: ["ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n}\n\n.header-left-logo[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5oZWFkZXItbGVmdC1sb2dvIHtcbiAgbWFyZ2luLXRvcDogOHB4O1xuXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7378:
/*!****************************************************************!*\
  !*** ./src/app/shared/components/sidebar/sidebar.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SidebarComponent: () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/divider */ 9400);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/list */ 3228);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);




class SidebarComponent {
  constructor() {}
  ngOnInit() {}
  static ɵfac = function SidebarComponent_Factory(t) {
    return new (t || SidebarComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SidebarComponent,
    selectors: [["app-sidebar"]],
    decls: 38,
    vars: 0,
    consts: [[1, "profile-card"], ["src", "../../../../assets/e2ee_logo.png"], ["mat-list-item", "", "routerLinkActive", "list-item-active", "routerLink", "/"], ["src", "../../../../assets/home_small.png"], ["mat-list-item", "", "routerLinkActive", "list-item-active", "routerLink", "/posts"], ["src", "../../../../assets/dashboard_small.png"], ["mat-list-item", "", "routerLinkActive", "list-item-active", "routerLink", "/articles"], ["src", "../../../../assets/measure_small.png"], ["src", "../../../../assets/calculate_small.png"], ["src", "../../../../assets/analyze_small.png"], ["src", "../../../../assets/reduce_small.png"], ["src", "../../../../assets/offset_small.png"], ["src", "../../../../assets/reports_small.png"], ["src", "../../../../assets/predict_small.png"], ["mat-list-item", "", "routerLinkActive", "list-item-active", "routerLink", "/contacts"], ["src", "../../../../assets/settings_small.png"], ["mat-list-item", "", "routerLinkActive", "list-item-active", "routerLink", "/leads"], ["src", "../../../../assets/sign_out_small.png"]],
    template: function SidebarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-nav-list")(1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Measure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Calculate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Analyze");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Reduce");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Offset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Predict");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Setting ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Sign Out ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_1__.MatDivider, _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatNavList, _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListItem, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive],
    styles: ["[_nghost-%COMP%]   .list-item-active[_ngcontent-%COMP%] {\n  background-color: rgb(84, 130, 53);\n}\n[_nghost-%COMP%]   .mat-divider[_ngcontent-%COMP%] {\n  border-top-color: rgb(244, 246, 243);\n}\n[_nghost-%COMP%]   a.mdc-list-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 0.2em;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBRUUsa0NBQUE7QUFGSjtBQUlFO0VBQ0Usb0NBQUE7QUFGSjtBQUlFO0VBQ0UsbUJBQUE7QUFGSiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgXG4gIC5saXN0LWl0ZW0tYWN0aXZlIFxuICB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg0LCAxMzAsIDUzKTsgICAgXG4gIH1cbiAgLm1hdC1kaXZpZGVyIHtcbiAgICBib3JkZXItdG9wLWNvbG9yOiByZ2IoMjQ0LCAyNDYsIDI0Myk7IFxuICB9XG4gIGEubWRjLWxpc3QtaXRlbSBpbWcge1xuICAgIG1hcmdpbi1yaWdodDogMC4yZW07ICAgIFxuICB9IFxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6208:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedModule: () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header/header.component */ 74);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/footer/footer.component */ 8014);
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ 7378);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/divider */ 9400);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/toolbar */ 2484);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ 5249);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ 8128);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/list */ 3228);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _widgets_area_area_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./widgets/area/area.component */ 5705);
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! highcharts-angular */ 701);
/* harmony import */ var _widgets_card_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./widgets/card/card.component */ 6656);
/* harmony import */ var _widgets_pie_pie_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./widgets/pie/pie.component */ 9253);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);


















class SharedModule {
  static ɵfac = function SharedModule_Factory(t) {
    return new (t || SharedModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: SharedModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__.FlexLayoutModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__.MatDividerModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__.MatToolbarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_15__.MatListModule, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule, highcharts_angular__WEBPACK_IMPORTED_MODULE_17__.HighchartsChartModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.SidebarComponent, _widgets_area_area_component__WEBPACK_IMPORTED_MODULE_3__.AreaComponent, _widgets_card_card_component__WEBPACK_IMPORTED_MODULE_4__.CardComponent, _widgets_pie_pie_component__WEBPACK_IMPORTED_MODULE_5__.PieComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__.FlexLayoutModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__.MatDividerModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__.MatToolbarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_15__.MatListModule, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule, highcharts_angular__WEBPACK_IMPORTED_MODULE_17__.HighchartsChartModule],
    exports: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.SidebarComponent, _widgets_area_area_component__WEBPACK_IMPORTED_MODULE_3__.AreaComponent, _widgets_card_card_component__WEBPACK_IMPORTED_MODULE_4__.CardComponent, _widgets_pie_pie_component__WEBPACK_IMPORTED_MODULE_5__.PieComponent]
  });
})();

/***/ }),

/***/ 5705:
/*!*******************************************************!*\
  !*** ./src/app/shared/widgets/area/area.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AreaComponent: () => (/* binding */ AreaComponent)
/* harmony export */ });
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! highcharts */ 5080);
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highcharts/modules/exporting */ 224);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts-angular */ 701);




class AreaComponent {
  chartOptions;
  data = [];
  Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_0__;
  constructor() {}
  ngOnInit() {
    this.chartOptions = {
      chart: {
        type: "area"
      },
      title: {
        text: "Random Data"
      },
      subtitle: {
        text: "Demo"
      },
      tooltip: {
        split: true,
        valueSuffix: " millions"
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: true
      },
      series: [{
        name: "Asia",
        data: [502, 635, 809, 947, 1402, 3634, 5268]
      }, {
        name: "Africa",
        data: [106, 107, 111, 133, 221, 767, 1766]
      }, {
        name: "Europe",
        data: [163, 203, 276, 408, 547, 729, 628]
      }, {
        name: "America",
        data: [18, 31, 54, 156, 339, 818, 1201]
      }, {
        name: "Oceania",
        data: [2, 2, 2, 6, 13, 30, 46]
      }]
    };
    highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_1___default()(highcharts__WEBPACK_IMPORTED_MODULE_0__);
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 300);
  }
  static ɵfac = function AreaComponent_Factory(t) {
    return new (t || AreaComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AreaComponent,
    selectors: [["app-widget-area"]],
    inputs: {
      data: "data"
    },
    decls: 1,
    vars: 2,
    consts: [[2, "width", "100%", "height", "400px", "display", "block", 3, "Highcharts", "options"]],
    template: function AreaComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "highcharts-chart", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("Highcharts", ctx.Highcharts)("options", ctx.chartOptions);
      }
    },
    dependencies: [highcharts_angular__WEBPACK_IMPORTED_MODULE_3__.HighchartsChartComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6656:
/*!*******************************************************!*\
  !*** ./src/app/shared/widgets/card/card.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardComponent: () => (/* binding */ CardComponent)
/* harmony export */ });
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! highcharts */ 5080);
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highcharts/modules/exporting */ 224);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! highcharts-angular */ 701);





class CardComponent {
  label;
  total;
  percentage;
  data = [];
  Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_0__;
  chartOptions = {};
  constructor() {}
  ngOnInit() {
    this.chartOptions = {
      chart: {
        type: "area",
        backgroundColor: null,
        borderWidth: 0,
        margin: [2, 2, 2, 2],
        height: 60
      },
      title: {
        text: null
      },
      subtitle: {
        text: null
      },
      tooltip: {
        split: true,
        outside: true
      },
      legend: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: false
      },
      xAxis: {
        labels: {
          enabled: false
        },
        title: {
          text: null
        },
        startOnTick: false,
        endOnTick: false,
        tickOptions: []
      },
      yAxis: {
        labels: {
          enabled: false
        },
        title: {
          text: null
        },
        startOnTick: false,
        endOnTick: false,
        tickOptions: []
      },
      series: [{
        data: [71, 78, 39, 66]
      }]
    };
    highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_1___default()(this.Highcharts);
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 300);
  }
  static ɵfac = function CardComponent_Factory(t) {
    return new (t || CardComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: CardComponent,
    selectors: [["app-widget-card"]],
    inputs: {
      label: "label",
      total: "total",
      percentage: "percentage",
      data: "data"
    },
    decls: 12,
    vars: 5,
    consts: [[1, "card-text"], [1, "total"], ["color", "primary"], [1, "description"], [1, "widget"], [2, "width", "100%", "height", "60px", "display", "block", 3, "Highcharts", "options"]],
    template: function CardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span")(6, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "trending_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "highcharts-chart", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.total);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.percentage, "% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("Highcharts", ctx.Highcharts)("options", ctx.chartOptions);
      }
    },
    dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, highcharts_angular__WEBPACK_IMPORTED_MODULE_4__.HighchartsChartComponent],
    styles: [".card-text[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n\nh4[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n\n.total[_ngcontent-%COMP%] {\n  font-size: 3em;\n}\n\n.mat-icon[_ngcontent-%COMP%], .description[_ngcontent-%COMP%] {\n  color: green;\n  font-size: 1em;\n}\n\n.mat-icon[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 0 20px;\n  top: 5px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL3dpZGdldHMvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsWUFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLXRleHQge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuXG5oNCB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLnRvdGFsIHtcbiAgZm9udC1zaXplOiAzZW07XG59XG5cbi5tYXQtaWNvbixcbi5kZXNjcmlwdGlvbiB7XG4gIGNvbG9yOiBncmVlbjtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbi5tYXQtaWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMCAyMHB4O1xuICB0b3A6IDVweDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 9253:
/*!*****************************************************!*\
  !*** ./src/app/shared/widgets/pie/pie.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PieComponent: () => (/* binding */ PieComponent)
/* harmony export */ });
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! highcharts */ 5080);
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highcharts/modules/exporting */ 224);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts-angular */ 701);




class PieComponent {
  Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_0__;
  chartOptions = {};
  data = [];
  constructor() {}
  ngOnInit() {
    this.chartOptions = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: "pie"
      },
      title: {
        text: "BROWSERS: MARKET SHARE"
      },
      tooltip: {
        pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
      },
      accessibility: {
        point: {
          valueSuffix: "%"
        }
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          dataLabels: {
            enabled: true,
            format: "<b>{point.name}</b>: {point.percentage:.1f} %"
          }
        }
      },
      exporting: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      series: [{
        name: "Brands",
        colorByPoint: true,
        data: this.data
      }]
    };
    highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_1___default()(highcharts__WEBPACK_IMPORTED_MODULE_0__);
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 300);
  }
  static ɵfac = function PieComponent_Factory(t) {
    return new (t || PieComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: PieComponent,
    selectors: [["app-widget-pie"]],
    inputs: {
      data: "data"
    },
    decls: 1,
    vars: 2,
    consts: [[2, "width", "100%", "height", "400px", "display", "block", 3, "Highcharts", "options"]],
    template: function PieComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "highcharts-chart", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("Highcharts", ctx.Highcharts)("options", ctx.chartOptions);
      }
    },
    dependencies: [highcharts_angular__WEBPACK_IMPORTED_MODULE_3__.HighchartsChartComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 553);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map