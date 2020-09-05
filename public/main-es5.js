(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login/login.component */
      "./src/app/login/login.component.ts");
      /* harmony import */


      var _program_program_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./program/program.component */
      "./src/app/program/program.component.ts");
      /* harmony import */


      var _cart_cart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./cart/cart.component */
      "./src/app/cart/cart.component.ts");
      /* harmony import */


      var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./services/auth-guard.service */
      "./src/app/services/auth-guard.service.ts");

      var routes = [{
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }, {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
      }, {
        path: 'profile',
        canLoad: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]],
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]],
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | profile-profile-module */
          "profile-profile-module").then(__webpack_require__.bind(null,
          /*! ./profile/profile.module */
          "./src/app/profile/profile.module.ts")).then(function (m) {
            return m.ProfileModule;
          });
        }
      }, {
        path: 'orders',
        canLoad: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]],
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]],
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | orders-orders-module */
          "orders-orders-module").then(__webpack_require__.bind(null,
          /*! ./orders/orders.module */
          "./src/app/orders/orders.module.ts")).then(function (m) {
            return m.OrdersModule;
          });
        }
      }, {
        path: 'program',
        component: _program_program_component__WEBPACK_IMPORTED_MODULE_3__["ProgramComponent"]
      }, {
        path: 'cart',
        component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_4__["CartComponent"]
      }];

      var AppRoutingModule = /*@__PURE__*/function () {
        var AppRoutingModule = function AppRoutingModule() {
          _classCallCheck(this, AppRoutingModule);
        };

        AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: AppRoutingModule
        });
        AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function AppRoutingModule_Factory(t) {
            return new (t || AppRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
        return AppRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./services/auth.service */
      "./src/app/services/auth.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./services/http.service */
      "./src/app/services/http.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");

      function AppComponent_ng_container_16_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_container_16_ng_container_1_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.navigateToProgram(item_r4.programid);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.name);
        }
      }

      function AppComponent_ng_container_16_ng_container_2_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function AppComponent_ng_container_16_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_container_16_ng_container_2_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r13.navigateToProgram(item_r4.programid);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_ng_container_16_ng_container_2_ng_container_3_Template, 2, 0, "ng-container", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var item_r4 = ctx_r16.$implicit;
          var p_r5 = ctx_r16.index;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r5 !== ctx_r7.programList.length - 1);
        }
      }

      function AppComponent_ng_container_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_ng_container_16_ng_container_1_Template, 3, 1, "ng-container", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_ng_container_16_ng_container_2_Template, 4, 2, "ng-container", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.programList.length === 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.programList.length !== 1);
        }
      }

      function AppComponent_li_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppComponent_li_21_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "fa-icon", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "My Profile ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "fa-icon", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "My Orders ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "fa-icon", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Notifications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_li_21_Template_a_click_20_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r17.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "fa-icon", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.authService.clientName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r2.faIdCard);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r2.faBoxOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r2.faBell);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r2.faPowerOff);
        }
      }

      function AppComponent_a_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "fa-icon", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Cart ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r3.faShoppingCart);
        }
      }

      var AppComponent = /*@__PURE__*/function () {
        var AppComponent = /*#__PURE__*/function () {
          function AppComponent(authService, router, activatedRoute, _httpService) {
            _classCallCheck(this, AppComponent);

            this.authService = authService;
            this.router = router;
            this.activatedRoute = activatedRoute;
            this._httpService = _httpService;
            this.faShoppingCart = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faShoppingCart"];
            this.faBoxOpen = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faBoxOpen"];
            this.faIdCard = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faIdCard"];
            this.faBell = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faBell"];
            this.faPowerOff = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPowerOff"];
            this.programList = [];
          }

          _createClass(AppComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.getPrograms();
            }
          }, {
            key: "logout",
            value: function logout() {
              var _this = this;

              this.authService.logout(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SIGN_OUT).subscribe(function (res) {
                var body = res.body;
                _this.authService.isLoggedIn = false;
                _this.authService.token = undefined;
                _this.authService.clientName = '';
                _this.authService.usrObj = null;

                _this.router.navigate(['/login'], {
                  relativeTo: _this.activatedRoute
                });
              }, function (error) {});
            }
          }, {
            key: "getPrograms",
            value: function getPrograms() {
              var _this2 = this;

              this._httpService.getRequest(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].PROGRAM_LIST, this.authService.token).subscribe(function (res) {
                var body = res.body;
                _this2.programList = body['data'];
              });
            }
          }, {
            key: "navigateToProgram",
            value: function navigateToProgram(programId) {
              var _this3 = this;

              this.programList.forEach(function (el) {
                if (el.programid === programId) {
                  _this3.authService.program = el;
                }
              });
              this.router.navigate(['/program'], {
                relativeTo: this.activatedRoute,
                queryParams: {
                  programId: programId
                }
              });
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              delete this.programList;
              delete this.faBell;
              delete this.faBoxOpen;
              delete this.faIdCard;
              delete this.faPowerOff;
              delete this.faShoppingCart;
            }
          }]);

          return AppComponent;
        }();

        AppComponent.ɵfac = function AppComponent_Factory(t) {
          return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]));
        };

        AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: AppComponent,
          selectors: [["app-root"]],
          decls: 26,
          vars: 4,
          consts: [[1, "navbar", "navbar-expand-lg", "navbar-light"], ["href", "javascript:void(0);", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNavDropdown", "aria-controls", "navbarNavDropdown", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNavDropdown", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], [1, "nav-item"], ["href", "javascript:void(0);", 1, "nav-link"], [1, "sr-only"], [1, "nav-item", "dropdown"], ["href", "javascript:void(0);", "id", "navbarDropdownMenuLink", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "navbarDropdownMenuLink", 1, "dropdown-menu"], [4, "ngFor", "ngForOf"], ["class", "nav-item active", 4, "ngIf"], ["class", "nav-item dropdown", "id", "user-dropdown", 4, "ngIf"], ["class", "nav-link", "routerLink", "cart", 4, "ngIf"], [1, "container-fluid"], [4, "ngIf"], [1, "dropdown-item", 3, "click"], [1, "dropdown-divider"], [1, "nav-item", "active"], ["routerLink", "login", 1, "nav-link"], ["id", "user-dropdown", 1, "nav-item", "dropdown"], ["src", "https://d19m59y37dris4.cloudfront.net/bubbly-dashboard/1-0/img/avatar-6.jpg", "alt", "Jason Doe", 1, "img-fluid", "rounded-circle", "shadow", 2, "max-width", "2.5rem"], ["href", "javascript:void(0);", 1, "dropdown-item", "user-name"], [1, "d-block", "text-uppercase"], ["routerLink", "profile", 1, "dropdown-item"], [1, "float-left", "m-r-1", 3, "icon"], ["routerLink", "orders", 1, "dropdown-item"], ["href", "javascript:void(0);", 1, "dropdown-item"], ["routerLink", "cart", 1, "nav-link"], [1, "badge", "badge-danger"], [3, "icon"]],
          template: function AppComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "COMPANY NAME");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "(current)");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Shop ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AppComponent_ng_container_16_Template, 3, 2, "ng-container", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "About Us");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AppComponent_li_20_Template, 3, 0, "li", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AppComponent_li_21_Template, 23, 5, "li", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AppComponent_a_23_Template, 5, 1, "a", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "router-outlet");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.programList);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.authService.isLoggedIn);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.isLoggedIn);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.isLoggedIn);
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FaIconComponent"]],
          styles: [".navbar[_ngcontent-%COMP%] {\n  background-color: #fff;\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.16);\n}\n\n.navbar-brand[_ngcontent-%COMP%] {\n  margin-left: 2rem;\n  font-size: 1.5rem;\n  text-transform: uppercase;\n}\n\nli[_ngcontent-%COMP%] {\n  width: 100px;\n  line-height: 35px;\n}\n\nli[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 400;\n  text-transform: uppercase;\n}\n\nli.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\nli.nav-item[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  left: auto;\n  top: 101%;\n  right: 0;\n  border: none;\n  box-shadow: 0 0.125rem 0.8rem rgba(0, 0, 0, 0.1) !important;\n  text-align: center;\n}\n\n#user-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n#user-dropdown[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.footer[_ngcontent-%COMP%] {\n  background-color: #fff;\n  width: 100%;\n  display: block;\n  margin-top: 10px;\n  padding: 40px 0 20px;\n  position: absolute;\n  bottom: 0;\n  overflow: hidden;\n}\n\n.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin: 0px 10px;\n}\n\n.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.navbar-collapse[_ngcontent-%COMP%]   .badge-danger[_ngcontent-%COMP%] {\n  position: absolute;\n  margin-left: 10px;\n  margin-top: -5px;\n}\n\na.dropdown-item[_ngcontent-%COMP%]:active, a.dropdown-item[_ngcontent-%COMP%]:hover {\n  color: #0c5460;\n  background-color: #d1ecf1;\n  border-color: #bee5eb;\n}\n\n.dropdown-menu[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7RUFDQSwyQ0FBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUVJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBQUo7O0FBR0E7RUFDSSxnQkFBQTtBQUFKOztBQUdBO0VBQ0ksVUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLDJEQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHQTtFQUNJLGdCQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksc0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUdBO0VBQ0ksZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLDBCQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHQTs7RUFFSSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQUFKOztBQUdBO0VBQ0ksb0JBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgLjE2KTtcclxufVxyXG5cclxuLm5hdmJhci1icmFuZCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxubGkge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XHJcbn1cclxuXHJcbmxpIGEge1xyXG4gICAgLy8gZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbmxpLmFjdGl2ZSBhIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbmxpLm5hdi1pdGVtIC5kcm9wZG93bi1tZW51IHtcclxuICAgIGxlZnQ6IGF1dG87XHJcbiAgICB0b3A6IDEwMSU7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IDAgMC4xMjVyZW0gMC44cmVtIHJnYmEoMCwgMCwgMCwgMC4xKSAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jdXNlci1kcm9wZG93biAuZHJvcGRvd24tbWVudSB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4jdXNlci1kcm9wZG93biB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZzogNDBweCAwIDIwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uZm9vdGVyIGEge1xyXG4gICAgbWFyZ2luOiAwcHggMTBweDtcclxufVxyXG5cclxuLmZvb3RlciBhOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4ubmF2YmFyLWNvbGxhcHNlIC5iYWRnZS1kYW5nZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xyXG59XHJcblxyXG5hLmRyb3Bkb3duLWl0ZW06YWN0aXZlLFxyXG5hLmRyb3Bkb3duLWl0ZW06aG92ZXIge1xyXG4gICAgY29sb3I6ICMwYzU0NjA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFlY2YxO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjYmVlNWViO1xyXG59XHJcblxyXG4uZHJvcGRvd24tbWVudSAudXNlci1uYW1lIHtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59Il19 */"]
        });
        return AppComponent;
      }();
      /***/

    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./main/main.component */
      "./src/app/main/main.component.ts");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./login/login.component */
      "./src/app/login/login.component.ts");
      /* harmony import */


      var ng_otp_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-otp-input */
      "./node_modules/ng-otp-input/__ivy_ngcc__/fesm2015/ng-otp-input.js");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _program_program_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./program/program.component */
      "./src/app/program/program.component.ts");
      /* harmony import */


      var _cart_cart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./cart/cart.component */
      "./src/app/cart/cart.component.ts");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./services/auth.service */
      "./src/app/services/auth.service.ts");
      /* harmony import */


      var _services_http_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./services/http.service */
      "./src/app/services/http.service.ts");
      /* harmony import */


      var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./services/auth-guard.service */
      "./src/app/services/auth-guard.service.ts");

      var AppModule = /*@__PURE__*/function () {
        var AppModule = function AppModule() {
          _classCallCheck(this, AppModule);
        };

        AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
          type: AppModule,
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        });
        AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
          factory: function AppModule_Factory(t) {
            return new (t || AppModule)();
          },
          providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"], _services_http_service__WEBPACK_IMPORTED_MODULE_14__["HttpService"], _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__["AuthGuardService"]],
          imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], ng_otp_input__WEBPACK_IMPORTED_MODULE_8__["NgOtpInputModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModalModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbTooltipModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]]]
        });
        return AppModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _program_program_component__WEBPACK_IMPORTED_MODULE_11__["ProgramComponent"], _cart_cart_component__WEBPACK_IMPORTED_MODULE_12__["CartComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], ng_otp_input__WEBPACK_IMPORTED_MODULE_8__["NgOtpInputModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModalModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbTooltipModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]]
        });
      })();
      /***/

    },

    /***/
    "./src/app/cart/cart.component.ts":
    /*!****************************************!*\
      !*** ./src/app/cart/cart.component.ts ***!
      \****************************************/

    /*! exports provided: CartComponent */

    /***/
    function srcAppCartCartComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartComponent", function () {
        return CartComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! lodash */
      "./node_modules/lodash/lodash.js");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/http.service */
      "./src/app/services/http.service.ts");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/auth.service */
      "./src/app/services/auth.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      function CartComponent_tr_21_ul_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var pitem_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pitem_r5.name);
        }
      }

      function CartComponent_tr_21_option_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var name_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](name_r6);
        }
      }

      function CartComponent_tr_21_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CartComponent_tr_21_ul_6_Template, 3, 1, "ul", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "select", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CartComponent_tr_21_Template_select_change_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var item_r1 = ctx.$implicit;
            var i_r2 = ctx.index;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.onChange($event, item_r1.id, i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CartComponent_tr_21_option_9_Template, 2, 1, "option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;
          var i_r2 = ctx.index;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r2 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r1.products);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r1.packages);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9", ctx_r0.getSubscriptionCost(item_r1.id), "");
        }
      }

      var CartComponent = /*@__PURE__*/function () {
        var CartComponent = /*#__PURE__*/function () {
          function CartComponent(_httpService, authService, router, activatedRoute) {
            _classCallCheck(this, CartComponent);

            this._httpService = _httpService;
            this.authService = authService;
            this.router = router;
            this.activatedRoute = activatedRoute;
            this.cartItems = [];
            this.subscriptions = [];
            this.totalPrice = 0;
          }

          _createClass(CartComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.getSubscriptions();
              var storageItem = localStorage.getItem('cart');

              if (storageItem) {
                this.cartItems = JSON.parse(storageItem);
              } else {
                this.cartItems = [];
              }
            }
          }, {
            key: "getSubscriptions",
            value: function getSubscriptions() {
              var _this4 = this;

              this._httpService.getRequest(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].SUBSCRIPTIONS, this.authService.token).subscribe(function (res) {
                var body = res.body;
                _this4.subscriptions = body['data'];
                _this4.subscriptionMap = new Map();
                _this4.priceMap = new Map();
                var g = lodash__WEBPACK_IMPORTED_MODULE_2__["groupBy"](_this4.subscriptions, function (item) {
                  return item.programid;
                });

                var _loop = function _loop(key) {
                  var n = [];
                  g[key].forEach(function (element, index) {
                    if (index === 0) {
                      _this4.priceMap.set(Number(key), Number(element.price));
                    }

                    n.push(element["package"].toUpperCase());
                  });

                  _this4.subscriptionMap.set(Number(key), n);
                };

                for (var key in g) {
                  _loop(key);
                }

                console.log('subscriptionMap: ', _this4.subscriptionMap);
                console.log('priceMap: ', _this4.priceMap);

                _this4.cartItems.forEach(function (el) {
                  el.packages = _this4.subscriptionMap.get(el.id);
                });
              });
            }
          }, {
            key: "onChange",
            value: function onChange(event, programId, index) {
              var _this5 = this;

              var packageName = event.target.value.toLowerCase();
              this.subscriptions.forEach(function (el) {
                if (el["package"] === packageName && el.programid === programId) {
                  _this5.priceMap.set(programId, el.price);

                  _this5.cartItems[index].price = el.price;
                }
              });
              this.totalPrice = 0;
              this.cartItems.forEach(function (el) {
                _this5.totalPrice += el.price;
              });
            }
          }, {
            key: "getSubscriptionProgramsWise",
            value: function getSubscriptionProgramsWise(programId) {
              return this.subscriptionMap.get(programId);
            }
          }, {
            key: "getSubscriptionCost",
            value: function getSubscriptionCost(programId) {
              try {
                return this.priceMap.get(programId);
              } catch (ex) {
                console.log(ex);
                return 0;
              }
            }
          }]);

          return CartComponent;
        }();

        CartComponent.ɵfac = function CartComponent_Factory(t) {
          return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]));
        };

        CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: CartComponent,
          selectors: [["app-cart"]],
          decls: 31,
          vars: 2,
          consts: [[1, "container", "m-t-2"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "table-responsive"], [1, "table", "table-bordered"], ["scope", "col", "colspan", "4", 1, "text-center"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "total"], ["colspan", "3", 1, "text-center"], [1, "btn", "btn-dark", "text-uppercase", "float-right", "m-l-1", "m-b-1"], ["scope", "row"], [1, "text-left", "f-w-600"], ["id", "exampleFormControlSelect1", 1, "form-control", 3, "change"], [1, "text-left"]],
          template: function CartComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "thead");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Order Summary");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Sr No.");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Particulars");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Package");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Amount (Rs.)");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tbody");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, CartComponent_tr_21_Template, 12, 5, "tr", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "TOTAL");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Proceed to Checkout");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cartItems);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9", ctx.totalPrice, "");
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_x"]],
          styles: ["th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  text-align: center;\n  text-transform: uppercase;\n  vertical-align: middle;\n}\n\nselect[_ngcontent-%COMP%] {\n  -moz-text-align-last: center;\n       text-align-last: center;\n  font-weight: 400;\n  text-transform: uppercase;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n\nul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:before {\n  content: \"-\";\n  margin-right: 1rem;\n}\n\n.total[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.btn-dark[_ngcontent-%COMP%] {\n  width: auto;\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%], td[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], td[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydC9jYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVJLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksNEJBQUE7T0FBQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFHQTtFQUNJLGlCQUFBO0FBQUo7O0FBR0E7RUFDSSxXQUFBO0FBQUo7O0FBR0E7Ozs7O0VBS0ksZUFBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvY2FydC9jYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGgsXHJcbnRkIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG5zZWxlY3Qge1xyXG4gICAgdGV4dC1hbGlnbi1sYXN0OiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxudWwge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcblxyXG51bD5saTpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCItXCI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgICAvLyBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnRvdGFsIHRkIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uYnRuLWRhcmsge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbnRoLFxyXG50ZCxcclxudGQgcCxcclxudGQgdWwgbGksXHJcbnNlbGVjdCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn0iXX0= */"]
        });
        return CartComponent;
      }();
      /***/

    },

    /***/
    "./src/app/login/login.component.ts":
    /*!******************************************!*\
      !*** ./src/app/login/login.component.ts ***!
      \******************************************/

    /*! exports provided: LoginComponent */

    /***/
    function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/auth.service */
      "./src/app/services/auth.service.ts");
      /* harmony import */


      var _services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/http.service */
      "./src/app/services/http.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var ng_otp_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng-otp-input */
      "./node_modules/ng-otp-input/__ivy_ngcc__/fesm2015/ng-otp-input.js");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");

      var _c0 = ["signUpForm"];
      var _c1 = ["signInForm"];

      function LoginComponent_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 9, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_ng_container_5_Template_form_ngSubmit_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.login();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Mobile Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 13, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 16, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 18, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Remember Me");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_ng_container_5_Template_a_click_18_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

            return ctx_r12.launchModal(_r4, "ForgotPwd");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Forgot Password?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Log In");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r6.valid);
        }
      }

      var _c2 = function _c2() {
        return {
          standalone: true
        };
      };

      function LoginComponent_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 9, 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_ng_container_6_Template_form_ngSubmit_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

            return ctx_r18.launchModal(_r2, "SignUp");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "First Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 27, 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Last Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 30, 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 33, 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 16, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Mobile Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_ng_container_6_Template_input_ngModelChange_29_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r20.mobileNumber = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Sign Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.mobileNumber)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r13.valid);
        }
      }

      function LoginComponent_ng_template_11_p_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r22.faStopwatch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r22.timerText, " ");
        }
      }

      var _c3 = function _c3() {
        return {
          length: 6,
          allowNumbersOnly: true,
          containerClass: "otp-container-class",
          inputClass: "otp-input-class"
        };
      };

      var _c4 = function _c4(a0) {
        return {
          "not-allowed": a0
        };
      };

      var _c5 = function _c5(a0) {
        return {
          "not-clickable": a0
        };
      };

      function LoginComponent_ng_template_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_ng_template_11_Template_button_click_1_listener() {
            var modal_r21 = ctx.$implicit;
            return modal_r21.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Phone Number Verification");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Enter the code sent to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "+91 - XXXXXXXXXX");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ng-otp-input", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onInputChange", function LoginComponent_ng_template_11_Template_ng_otp_input_onInputChange_13_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r24.onOtpChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LoginComponent_ng_template_11_p_15_Template, 3, 2, "p", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Didn't receive the code? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_ng_template_11_Template_a_click_18_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r26.sendOTP();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "RESEND OTP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.timerView);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c4, !ctx_r3.timerExpired));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c5, !ctx_r3.timerExpired));
        }
      }

      function LoginComponent_ng_template_13_p_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You can reset your password here.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_ng_template_13_p_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enter the code sent to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "+91 - XXXXXXXXXX");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_ng_template_13_ng_container_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_ng_template_13_ng_container_11_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r32.forgotPwdform.mobileNumber = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_ng_template_13_ng_container_11_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r34.enablePasswordInput();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r30.forgotPwdform.mobileNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r30.forgotPwdform.mobileNumber.length !== 10);
        }
      }

      function LoginComponent_ng_template_13_ng_container_12_p_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r35.faStopwatch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r35.timerText, " ");
        }
      }

      var _c6 = function _c6() {
        return {
          length: 6,
          allowNumbersOnly: true,
          containerClass: "otp-container-class",
          inputClass: "otp-input-class",
          disableAutoFocus: true
        };
      };

      function LoginComponent_ng_template_13_ng_container_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "New Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_ng_template_13_ng_container_12_Template_input_ngModelChange_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r36.forgotPwdform.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Re-enter New Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_ng_template_13_ng_container_12_Template_input_ngModelChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

            var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r38.forgotPwdform.confirmPassword = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ng-otp-input", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onInputChange", function LoginComponent_ng_template_13_ng_container_12_Template_ng_otp_input_onInputChange_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

            var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r39.onOtpChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LoginComponent_ng_template_13_ng_container_12_p_12_Template, 3, 2, "p", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Didn't receive the code? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_ng_template_13_ng_container_12_Template_a_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

            var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r40.sendOTP();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "RESEND OTP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_ng_template_13_ng_container_12_Template_button_click_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

            var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r41.forgotPassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r31.forgotPwdform.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r31.forgotPwdform.confirmPassword);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c6));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r31.timerView);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c4, !ctx_r31.timerExpired));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c5, !ctx_r31.timerExpired));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r31.OTP.length !== 6 || ctx_r31.forgotPwdform.password.length === 0 || ctx_r31.forgotPwdform.confirmPassword.length === 0 || ctx_r31.forgotPwdform.password !== ctx_r31.forgotPwdform.confirmPassword);
        }
      }

      function LoginComponent_ng_template_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_ng_template_13_Template_button_click_1_listener() {
            var modal_r27 = ctx.$implicit;
            return modal_r27.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Forgot Password ?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LoginComponent_ng_template_13_p_9_Template, 2, 0, "p", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LoginComponent_ng_template_13_p_10_Template, 4, 0, "p", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LoginComponent_ng_template_13_ng_container_11_Template, 4, 2, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LoginComponent_ng_template_13_ng_container_12_Template, 19, 12, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.otpView);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.otpView);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.otpView);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.otpView);
        }
      }

      var LoginComponent = /*@__PURE__*/function () {
        var LoginComponent = /*#__PURE__*/function () {
          function LoginComponent(modalService, authService, _httpService, router, activatedRoute) {
            _classCallCheck(this, LoginComponent);

            this.modalService = modalService;
            this.authService = authService;
            this._httpService = _httpService;
            this.router = router;
            this.activatedRoute = activatedRoute;
            this.toggleBtn = {
              msgText: 'Don\'t have an account?',
              linkText: 'Sign Up',
              headerText: 'Account Login'
            };
            this.signInFormEnabled = true;
            this.timeLeft = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].OTP_TIMEOUT;
            this.OTP = '';
            this.timerExpired = false;
            this.timerView = false;
            this.faStopwatch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faStopwatch"];
            this.otpView = false;
            this.mobileNumber = '';
            this.forgotPwdform = {
              password: '',
              confirmPassword: '',
              mobileNumber: ''
            };
          }

          _createClass(LoginComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }, {
            key: "launchModal",
            value: function launchModal(ref, name) {
              var _this6 = this;

              var ngbModalOptions = {
                backdrop: 'static',
                keyboard: false
              };

              if (name === 'SignUp') {
                this.sendOTP();
                console.log(this.signUpForm.form.value);
              }

              this.modalReference = this.modalService.open(ref, ngbModalOptions);
              this.modalReference.result.then(function (result) {}, function (reason) {
                _this6.otpView = false;
              });
            }
          }, {
            key: "toggleBtnHandler",
            value: function toggleBtnHandler() {
              this.signInFormEnabled = !this.signInFormEnabled;

              if (this.signInFormEnabled) {
                this.toggleBtn = {
                  msgText: 'Don\'t have an account?',
                  linkText: 'Sign Up',
                  headerText: 'Account Login'
                };
              } else {
                this.toggleBtn = {
                  msgText: 'Existing User?',
                  linkText: 'Sign In',
                  headerText: 'Create Your Account'
                };
              }
            }
          }, {
            key: "onOtpChange",
            value: function onOtpChange($event) {
              console.log($event);
              var ev = $event;
              this.OTP = ev.toString();

              if (this.OTP.length === 6) {
                if (!this.signInFormEnabled) {
                  this.signUp(this.OTP);
                }
              }
            }
          }, {
            key: "countdown",
            value: function countdown() {
              if (this.timeLeft === 0) {
                clearTimeout(this.timeTracker);
                this.timeLeft = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].OTP_TIMEOUT;
                this.timerText = 'OTP entered is expired. Please generate a new one and try again';
                this.timerExpired = true;
              } else {
                this.timerView = true;
                this.timerExpired = false;
                this.timerText = 'OTP expires within ' + this.timeLeft + ' seconds';
                this.timeLeft--;
              }
            }
          }, {
            key: "sendOTP",
            value: function sendOTP() {
              var _this7 = this;

              console.log('Sending OTP');

              var _url;

              if (!this.signInFormEnabled) {
                _url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SIGN_UP_VERIFY;
              } else {
                _url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].FORGOT_PWD_VERIFY;
              }

              this._httpService.postRequest(_url, JSON.stringify({
                mobile_number: this.mobileNumber
              }), '').subscribe(function (res) {
                clearTimeout(_this7.timeTracker);
                _this7.timeLeft = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].OTP_TIMEOUT;
                _this7.timerText = 'OTP expires within ' + _this7.timeLeft + ' seconds';
                _this7.timerView = false;
                _this7.timeTracker = setInterval(function () {
                  _this7.countdown();
                }, 1000);
              }, function (error) {});
            }
          }, {
            key: "enablePasswordInput",
            value: function enablePasswordInput() {
              this.sendOTP();
              this.otpView = true;
            }
          }, {
            key: "login",
            value: function login() {
              var _this8 = this;

              var formValues = this.signInForm.form.value;
              var body = {
                mobile_number: formValues.mobileNumber,
                password: formValues.password
              };
              this.authService.login(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].LOGIN, JSON.stringify(body)).subscribe(function (res) {
                var body = res.body;

                _this8.postAuth(body);
              }, function (error) {});
            }
          }, {
            key: "forgotPassword",
            value: function forgotPassword() {
              var body = {
                mobile_number: this.forgotPwdform.mobileNumber,
                password: this.forgotPwdform.confirmPassword,
                otp: this.OTP
              };

              this._httpService.postRequest(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].FORGOT_PWD, JSON.stringify(body), '').subscribe(function (res) {
                var body = res.body;
                console.log(body);
              }, function (error) {});
            }
          }, {
            key: "signUp",
            value: function signUp(OTP) {
              var _this9 = this;

              var formValues = this.signUpForm.form.value;
              var body = {
                firstname: formValues.firstName,
                lastname: formValues.lastName,
                email: formValues.emailID,
                password: formValues.password,
                mobile_number: this.mobileNumber,
                userrole: 'Consumer',
                otp: OTP
              };

              this._httpService.postRequest(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SIGN_UP, JSON.stringify(body), '').subscribe(function (res) {
                var body = res.body;

                _this9.postAuth(body);

                _this9.modalReference.close();
              }, function (error) {});
            }
          }, {
            key: "postAuth",
            value: function postAuth(body) {
              this.authService.token = body.token;
              delete body.token;
              this.authService.usrObj = body;
              console.log(body);
              this.authService.clientName = body.firstname.charAt(0).toUpperCase() + body.firstname.slice(1) + ' ' + body.lastname.charAt(0).toUpperCase() + body.lastname.slice(1);
              this.authService.isLoggedIn = true;

              if (this.authService.redirectUrl) {
                this.router.navigate([this.authService.redirectUrl]);
              } else {
                this.router.navigate(['/profile'], {
                  relativeTo: this.activatedRoute
                });
              }
            }
          }]);

          return LoginComponent;
        }();

        LoginComponent.ɵfac = function LoginComponent_Factory(t) {
          return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]));
        };

        LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: LoginComponent,
          selectors: [["app-login"]],
          viewQuery: function LoginComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.signUpForm = _t.first);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.signInForm = _t.first);
            }
          },
          decls: 15,
          vars: 5,
          consts: [[1, "card"], ["id", "header"], [1, "text-center"], [1, "card-body"], [4, "ngIf"], [1, "toggle"], ["href", "javascript:void(0);", 3, "click"], ["signUpModal", ""], ["forgotPwdModal", ""], [3, "ngSubmit"], ["signInForm", "ngForm"], [1, "form-group"], ["for", "mobileNumber"], ["type", "email", "id", "mobileNumber", "name", "mobileNumber", "ngModel", "", "required", "", 1, "form-control"], ["mobileNumber", "ngModel"], ["for", "password"], ["type", "password", "id", "password", "name", "password", "ngModel", "", "required", "", 1, "form-control"], ["password", "ngModel"], ["type", "checkbox", "id", "rememberMe", "name", "rememberMe", "ngModel", "", 1, "form-check-input"], ["rememberMe", "ngModel"], ["for", "rememberMe", "id", "rememberMeLabel"], ["id", "forgotPasswordLink", "href", "javascript:void(0);", 3, "click"], ["type", "submit", 1, "btn", "btn-dark", "mx-auto", "d-block", 3, "disabled"], ["signUpForm", "ngForm"], [1, "row"], [1, "col"], ["for", "firstName"], ["type", "text", "id", "firstName", "name", "firstName", "ngModel", "", "required", "", 1, "form-control"], ["firstName", "ngModel"], ["for", "lastName"], ["type", "text", "id", "lastName", "name", "lastName", "ngModel", "", "required", "", 1, "form-control"], ["lastName", "ngModel"], ["for", "emailID"], ["type", "email", "id", "emailID", "name", "emailID", "ngModel", "", "required", "", 1, "form-control"], ["emailID", "ngModel"], ["type", "email", "id", "mobileNumber", "name", "mobileNumber", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], [1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "container"], [1, "header", "m-b-2"], [1, "f-w-600"], [3, "config", "onInputChange"], ["class", "text-danger text-center", 4, "ngIf"], [1, "resend", "m-b-1", 3, "ngClass"], ["href", "javascript:void(0);", 3, "ngClass", "click"], [1, "text-danger", "text-center"], [3, "icon"], ["class", "text-center", 4, "ngIf"], ["type", "text", "id", "inputMobileNumber", "placeholder", "Mobile Number", 1, "form-control", "m-b-1", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-dark", "mx-auto", "d-block", 3, "disabled", "click"], ["for", "newPassword"], ["type", "password", "id", "newPassword", "name", "newPassword", "required", "", "autofocus", "", "minlength", "8", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "confirmPassword"], ["type", "password", "id", "confirmPassword", "name", "confirmPassword", "required", "", "minlength", "8", 1, "form-control", 3, "ngModel", "ngModelChange"]],
          template: function LoginComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LoginComponent_ng_container_5_Template, 22, 1, "ng-container", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LoginComponent_ng_container_6_Template, 32, 4, "ng-container", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_9_listener() {
                return ctx.toggleBtnHandler();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LoginComponent_ng_template_11_Template, 20, 9, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LoginComponent_ng_template_13_Template, 13, 4, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.toggleBtn.headerText);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signInFormEnabled);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.signInFormEnabled);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.toggleBtn.msgText, " ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.toggleBtn.linkText);
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["CheckboxControlValueAccessor"], ng_otp_input__WEBPACK_IMPORTED_MODULE_9__["ɵa"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FaIconComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["MinLengthValidator"]],
          styles: [".card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 40px;\n  max-width: 600px;\n  margin: 40px auto;\n  border-radius: 4px;\n  box-shadow: 0 4px 10px 4px rgba(19, 35, 47, 0.1);\n}\n\nheader[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  padding: 4px 0;\n  color: #343a40;\n  font-size: 24px;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n\n#rememberMeLabel[_ngcontent-%COMP%] {\n  margin-left: 25px;\n}\n\n.toggle[_ngcontent-%COMP%], .resend[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n#forgotPasswordLink[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  margin-right: 60px;\n  margin-top: -27px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnREFBQTtBQUFKOztBQUdBO0VBQ0ksY0FBQTtFQUNBLGNBWkk7RUFhSixlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQUFKOztBQUdBO0VBQ0ksaUJBQUE7QUFBSjs7QUFHQTs7RUFFSSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3I6ICMzNDNhNDA7XHJcbi5jYXJkIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiA0MHB4O1xyXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgIG1hcmdpbjogNDBweCBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTBweCA0cHggcmdiYSgxOSwgMzUsIDQ3LCAwLjEpO1xyXG59XHJcblxyXG5oZWFkZXIgaDYge1xyXG4gICAgcGFkZGluZzogNHB4IDA7XHJcbiAgICBjb2xvcjogJGNvbG9yO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbiNyZW1lbWJlck1lTGFiZWwge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbn1cclxuXHJcbi50b2dnbGUsXHJcbi5yZXNlbmQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jZm9yZ290UGFzc3dvcmRMaW5rIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTI3cHg7XHJcbn0iXX0= */"]
        });
        return LoginComponent;
      }();
      /***/

    },

    /***/
    "./src/app/main/main.component.ts":
    /*!****************************************!*\
      !*** ./src/app/main/main.component.ts ***!
      \****************************************/

    /*! exports provided: MainComponent */

    /***/
    function srcAppMainMainComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
        return MainComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var MainComponent = /*@__PURE__*/function () {
        var MainComponent = /*#__PURE__*/function () {
          function MainComponent() {
            _classCallCheck(this, MainComponent);
          }

          _createClass(MainComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }]);

          return MainComponent;
        }();

        MainComponent.ɵfac = function MainComponent_Factory(t) {
          return new (t || MainComponent)();
        };

        MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: MainComponent,
          selectors: [["app-main"]],
          decls: 2,
          vars: 0,
          template: function MainComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "main works!");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
          },
          styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyJ9 */"]
        });
        return MainComponent;
      }();
      /***/

    },

    /***/
    "./src/app/program/program.component.ts":
    /*!**********************************************!*\
      !*** ./src/app/program/program.component.ts ***!
      \**********************************************/

    /*! exports provided: ProgramComponent */

    /***/
    function srcAppProgramProgramComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProgramComponent", function () {
        return ProgramComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! lodash */
      "./node_modules/lodash/lodash.js");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/http.service */
      "./src/app/services/http.service.ts");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/auth.service */
      "./src/app/services/auth.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");

      function ProgramComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Minimum ", ctx_r0.minBasketItems, " to be selected in this program to proceed to Cart ");
        }
      }

      function ProgramComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " You can proceed to cart now ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProgramComponent_div_4_ng_container_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProgramComponent_div_4_ng_container_7_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.basketOps(i_r7, "Remove");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "fa-icon", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProgramComponent_div_4_ng_container_7_Template_button_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r13.basketOps(i_r7, "Add");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "fa-icon", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r8.faMinus);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", item_r6.total);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r8.faPlus);
        }
      }

      function ProgramComponent_div_4_ng_container_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProgramComponent_div_4_ng_container_8_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r16.basketOps(i_r7, "Add");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fa-icon", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " ADD TO BASKET");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r9.faShoppingBasket);
        }
      }

      function ProgramComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProgramComponent_div_4_Template_img_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            var i_r7 = ctx.index;

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

            return ctx_r19.open(_r4, i_r7);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProgramComponent_div_4_ng_container_7_Template, 11, 3, "ng-container", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProgramComponent_div_4_ng_container_8_Template, 4, 1, "ng-container", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r6.total > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r6.total === 0);
        }
      }

      function ProgramComponent_button_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProgramComponent_button_8_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r21.goToCart();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Proceed to Cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r3.basketItems < ctx_r3.minBasketItems);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r3.faShoppingCart);
        }
      }

      function ProgramComponent_ng_template_9_ng_container_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fa-icon", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "ADD TO BASKET");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r24.faShoppingBasket);
        }
      }

      function ProgramComponent_ng_template_9_ng_container_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProgramComponent_ng_template_9_ng_container_14_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r27.basketOps(ctx_r27.selectedItemIndex, "Remove");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "fa-icon", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProgramComponent_ng_template_9_ng_container_14_Template_button_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r29.basketOps(ctx_r29.selectedItemIndex, "Add");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "fa-icon", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r25.faMinus);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r25.selectedItemCount);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r25.faPlus);
        }
      }

      function ProgramComponent_ng_template_9_li_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r30 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r30);
        }
      }

      function ProgramComponent_ng_template_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProgramComponent_ng_template_9_Template_button_click_1_listener() {
            var modal_r23 = ctx.$implicit;
            return modal_r23.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "COCONUT WATER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ProgramComponent_ng_template_9_ng_container_13_Template, 4, 1, "ng-container", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ProgramComponent_ng_template_9_ng_container_14_Template, 11, 3, "ng-container", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Every athlete\u2019s go-to natural energy drink; Coconut Water is a complete win-win for your everyday rehydration needs. #iaminlovewiththecoco!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h6", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "ADVANTAGES");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ProgramComponent_ng_template_9_li_24_Template, 2, 1, "li", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.selectedItemCount === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.selectedItemCount > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.productAdvantages);
        }
      }

      var ProgramComponent = /*@__PURE__*/function () {
        var ProgramComponent = /*#__PURE__*/function () {
          function ProgramComponent(modalService, activatedRoute, _httpService, authService, router) {
            _classCallCheck(this, ProgramComponent);

            this.modalService = modalService;
            this.activatedRoute = activatedRoute;
            this._httpService = _httpService;
            this.authService = authService;
            this.router = router;
            this.products = [];
            this.closeResult = '';
            this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faPlus"];
            this.faMinus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faMinus"];
            this.faShoppingCart = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faShoppingCart"];
            this.faShoppingBasket = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faShoppingBasket"];
            this.basketItems = 0;
            this.minBasketItems = 0;
            this.cartAlert = false;
            this.selectedItemCount = 0;
            this.selectedItemIndex = 0;
          }

          _createClass(ProgramComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this10 = this;

              this.activeProgram = this.authService.program;
              this.minBasketItems = this.activeProgram['min_buy_criteria'] ? this.activeProgram['min_buy_criteria'] : 0;
              this.activatedRoute.queryParams.subscribe(function (params) {
                var programId = parseInt(params['programId']);

                _this10.getProducts(programId);
              });
            }
          }, {
            key: "open",
            value: function open(ref, index) {
              var _this11 = this;

              this.productAdvantages = this.products[index]['advantages'];
              this.selectedItemIndex = index;
              this.selectedItemCount = this.products[index]['total'];
              this.modalService.open(ref, {
                size: 'lg'
              }).result.then(function (result) {
                _this11.closeResult = "Closed with: ".concat(result);
              }, function (reason) {
                _this11.closeResult = "Dismissed ".concat(_this11.getDismissReason(reason));
              });
            }
          }, {
            key: "getDismissReason",
            value: function getDismissReason(reason) {
              if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
                return 'by pressing ESC';
              } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
                return 'by clicking on a backdrop';
              } else {
                return "with: ".concat(reason);
              }
            }
          }, {
            key: "getProducts",
            value: function getProducts(programId) {
              var _this12 = this;

              this._httpService.getRequest(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].PRODUCTS_LIST + "?programId=" + programId, this.authService.token).subscribe(function (res) {
                var body = res.body;
                _this12.products = body['data'];

                _this12.products.forEach(function (el) {
                  el.total = 0;
                });
              }, function (error) {});
            }
          }, {
            key: "basketOps",
            value: function basketOps(index, operation) {
              if (operation === 'Add') {
                this.products[index]['total'] += 1;
              } else {
                this.products[index]['total'] -= 1;
              }

              this.selectedItemCount = this.products[index]['total'];
              this.validateBasket();
            }
          }, {
            key: "validateBasket",
            value: function validateBasket() {
              var _this13 = this;

              this.basketItems = 0;
              this.products.forEach(function (el) {
                if (el.total > 0) {
                  _this13.basketItems += el.total;
                }
              });
            }
          }, {
            key: "goToCart",
            value: function goToCart() {
              var items = [];
              this.products.forEach(function (element) {
                if (element.total > 0) {
                  items.push(element);
                }
              });
              var cartObj = localStorage.getItem('cart');

              if (cartObj) {
                var cartArr = JSON.parse(cartObj);
                var o = lodash__WEBPACK_IMPORTED_MODULE_4__["groupBy"](cartArr, function (item) {
                  return item.name;
                });
                console.log(o);
              } else {
                localStorage.setItem('cart', JSON.stringify([{
                  name: this.activeProgram['name'],
                  id: this.activeProgram['programid'],
                  products: items,
                  price: 0
                }]));
              }

              if (this.authService.isLoggedIn) {
                this.router.navigate(['/cart'], {
                  relativeTo: this.activatedRoute
                });
              } else {
                this.router.navigate(['/login'], {
                  relativeTo: this.activatedRoute
                });
              }
            }
          }]);

          return ProgramComponent;
        }();

        ProgramComponent.ɵfac = function ProgramComponent_Factory(t) {
          return new (t || ProgramComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
        };

        ProgramComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: ProgramComponent,
          selectors: [["app-program"]],
          decls: 11,
          vars: 4,
          consts: [[1, "container"], ["class", "alert alert-danger text-uppercase animate__animated animate__slideInDown", "role", "alert", 4, "ngIf"], ["class", "alert alert-success text-uppercase animate__animated animate__slideInDown", "role", "alert", 4, "ngIf"], [1, "row", "m-t-2"], ["class", "col-xl-4 col-lg-12", 4, "ngFor", "ngForOf"], [1, "container-fluid"], [1, "row"], [1, "col-12"], ["class", "btn btn-xl btn-dark float-right text-uppercase animate__animated animate__pulse animate__infinite", 3, "disabled", "click", 4, "ngIf"], ["content", ""], ["role", "alert", 1, "alert", "alert-danger", "text-uppercase", "animate__animated", "animate__slideInDown"], ["role", "alert", 1, "alert", "alert-success", "text-uppercase", "animate__animated", "animate__slideInDown"], [1, "col-xl-4", "col-lg-12"], [1, "card", "m-b-1"], ["src", "./assets/images/dummy.png", "alt", "item.name", 1, "card-img-top", 3, "click"], [1, "card-body"], [1, "card-title", "text-center", "text-uppercase"], [4, "ngIf"], [1, "col-xl-8", "col-lg-12", "d-block", "mx-auto"], [1, "input-group"], [1, "input-group-prepend"], ["type", "button", "id", "button-addon1", 1, "btn", "btn-outline-dark", 3, "click"], [3, "icon"], ["type", "text", "placeholder", "", "aria-label", "Example text with button addon", "aria-describedby", "button-addon1", "disabled", "", 1, "form-control", 3, "value"], [1, "input-group-append"], ["type", "button", "id", "button-addon2", 1, "btn", "btn-outline-dark", 3, "click"], ["type", "button", 1, "btn", "btn-dark", "btn-block", "mx-auto", "d-block", 3, "click"], [1, "m-r-1", 3, "icon"], [1, "btn", "btn-xl", "btn-dark", "float-right", "text-uppercase", "animate__animated", "animate__pulse", "animate__infinite", 3, "disabled", "click"], [1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "text-center", "f-w-700"], ["src", "./assets/images/dummy.png", "alt", "Product Image", 1, "modal-image", "m-b-1", 2, "width", "100%"], [1, "col-xl-8", "col-lg-12"], [1, "text-left", "m-b-2", "m-t-1"], [1, "card"], ["id", "advantages", 1, "card-header"], [1, "m-b-0"], [4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-dark", "btn-block", "mx-auto", "d-block"]],
          template: function ProgramComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProgramComponent_div_1_Template, 2, 1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProgramComponent_div_2_Template, 2, 0, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProgramComponent_div_4_Template, 9, 3, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProgramComponent_button_8_Template, 3, 2, "button", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProgramComponent_ng_template_9_Template, 25, 3, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.basketItems > 0 && ctx.basketItems < ctx.minBasketItems);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.basketItems > 0 && ctx.basketItems >= ctx.minBasketItems);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.basketItems > 0);
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FaIconComponent"]],
          styles: [".card-img-top[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: 10%;\n  margin-bottom: 0px;\n}\n\n#advantages[_ngcontent-%COMP%], #disadvantages[_ngcontent-%COMP%], #ingredients[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n\n.expand[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n}\n\n.btn-link[_ngcontent-%COMP%]:focus, .btn-link[_ngcontent-%COMP%]:hover {\n  box-shadow: none;\n  text-decoration: none !important;\n}\n\n.modal-image[_ngcontent-%COMP%] {\n  height: auto;\n  max-height: 250px;\n}\n\ninput.form-control[_ngcontent-%COMP%] {\n  border-top-color: #343a40;\n  border-bottom-color: #343a40;\n  color: #343a40;\n  text-align: center;\n  font-size: x-large;\n}\n\n.btn-outline-dark[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\n  height: 45px;\n  font-weight: 500;\n}\n\n.container-fluid[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  z-index: 50;\n  bottom: 50px;\n}\n\n.container-fluid[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border-radius: 50px;\n  margin-right: 10px;\n}\n\n.alert[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 10;\n  border-top: none;\n  border-radius: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZ3JhbS9wcm9ncmFtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksNkJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxnQ0FBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksd0JBQUE7RUFBQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQ0k7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0FBQ1I7O0FBR0E7RUFDSSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC9wcm9ncmFtL3Byb2dyYW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1pbWctdG9wIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IDEwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuI2FkdmFudGFnZXMsICNkaXNhZHZhbnRhZ2VzLCAjaW5ncmVkaWVudHMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5leHBhbmQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5idG4tbGluazpmb2N1cywgLmJ0bi1saW5rOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1vZGFsLWltYWdlIHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1heC1oZWlnaHQ6IDI1MHB4O1xyXG59XHJcblxyXG5pbnB1dC5mb3JtLWNvbnRyb2wge1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogIzM0M2E0MDtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICMzNDNhNDA7XHJcbiAgICBjb2xvcjogIzM0M2E0MDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLWRhcmssIGlucHV0IHtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5jb250YWluZXItZmx1aWQge1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIHotaW5kZXg6IDUwO1xyXG4gICAgYm90dG9tOiA1MHB4O1xyXG5cclxuICAgICYgLmJ0biB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hbGVydCB7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICBib3JkZXItdG9wOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxufSJdfQ== */"]
        });
        return ProgramComponent;
      }();
      /***/

    },

    /***/
    "./src/app/services/auth-guard.service.ts":
    /*!************************************************!*\
      !*** ./src/app/services/auth-guard.service.ts ***!
      \************************************************/

    /*! exports provided: AuthGuardService */

    /***/
    function srcAppServicesAuthGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () {
        return AuthGuardService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./auth.service */
      "./src/app/services/auth.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var AuthGuardService = /*@__PURE__*/function () {
        var AuthGuardService = /*#__PURE__*/function () {
          function AuthGuardService(authService, router) {
            _classCallCheck(this, AuthGuardService);

            this.authService = authService;
            this.router = router;
          }

          _createClass(AuthGuardService, [{
            key: "canActivate",
            value: function canActivate(route, state) {
              var url = state.url;
              return this.checkLogin(url);
            }
          }, {
            key: "canActivateChild",
            value: function canActivateChild(route, state) {
              return this.canActivate(route, state);
            }
          }, {
            key: "canLoad",
            value: function canLoad(route) {
              var url = "/".concat(route.path);
              return this.checkLogin(url);
            }
          }, {
            key: "checkLogin",
            value: function checkLogin(url) {
              if (this.authService.isLoggedIn) {
                return true;
              } // Store the attempted URL for redirecting


              this.authService.redirectUrl = url; // Create a dummy session id

              var sessionId = 123456789; // Set our navigation extras object
              // that contains our global query params and fragment

              var navigationExtras = {
                queryParams: {
                  'session_id': sessionId
                },
                fragment: 'anchor'
              }; // Navigate to the login page with extras

              this.router.navigate(['/login']);
              return false;
            }
          }]);

          return AuthGuardService;
        }();

        AuthGuardService.ɵfac = function AuthGuardService_Factory(t) {
          return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
        };

        AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: AuthGuardService,
          factory: AuthGuardService.ɵfac
        });
        return AuthGuardService;
      }();
      /***/

    },

    /***/
    "./src/app/services/auth.service.ts":
    /*!******************************************!*\
      !*** ./src/app/services/auth.service.ts ***!
      \******************************************/

    /*! exports provided: AuthService */

    /***/
    function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./http.service */
      "./src/app/services/http.service.ts");

      var AuthService = /*@__PURE__*/function () {
        var AuthService = /*#__PURE__*/function () {
          function AuthService(_httpService) {
            _classCallCheck(this, AuthService);

            this._httpService = _httpService;
            this.isLoggedIn = false;
            this.token = "";
          }

          _createClass(AuthService, [{
            key: "login",
            value: function login(uri, body) {
              return this._httpService.postRequest(uri, body, this.token);
            }
          }, {
            key: "logout",
            value: function logout(uri) {
              return this._httpService.deleteRequest(uri, this.token);
            }
          }]);

          return AuthService;
        }();

        AuthService.ɵfac = function AuthService_Factory(t) {
          return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]));
        };

        AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: AuthService,
          factory: AuthService.ɵfac,
          providedIn: 'root'
        });
        return AuthService;
      }();
      /***/

    },

    /***/
    "./src/app/services/http.service.ts":
    /*!******************************************!*\
      !*** ./src/app/services/http.service.ts ***!
      \******************************************/

    /*! exports provided: HttpService */

    /***/
    function srcAppServicesHttpServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpService", function () {
        return HttpService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      var HttpService = /*@__PURE__*/function () {
        var HttpService = /*#__PURE__*/function () {
          function HttpService(_httpClient) {
            _classCallCheck(this, HttpService);

            this._httpClient = _httpClient;
            this._url = "https://juicedelivery.herokuapp.com/";
          }

          _createClass(HttpService, [{
            key: "getRequest",
            value: function getRequest(uri, token) {
              var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': 'Bearer ' + token
              });
              return this._httpClient.get(this._url + encodeURI(uri), {
                headers: headers,
                observe: 'response'
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
            }
          }, {
            key: "postRequest",
            value: function postRequest(uri, body, token) {
              var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
              });
              return this._httpClient.post(this._url + uri, body, {
                headers: headers,
                observe: 'response'
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
            }
          }, {
            key: "putRequest",
            value: function putRequest(uri, body, token) {
              var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
              });
              return this._httpClient.put(this._url + uri, body, {
                headers: headers,
                observe: 'response'
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
            }
          }, {
            key: "deleteRequest",
            value: function deleteRequest(uri, token) {
              var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': 'Bearer ' + token
              });
              return this._httpClient["delete"](this._url + encodeURI(uri), {
                headers: headers,
                observe: 'response'
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
            }
          }, {
            key: "fileDownload",
            value: function fileDownload(uri, token) {
              var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': 'Bearer ' + token
              });
              return this._httpClient.get(this._url + encodeURI(uri), {
                headers: headers,
                observe: 'response',
                responseType: 'blob'
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
            }
          }, {
            key: "GetSortOrder",
            value: function GetSortOrder(prop) {
              return function (a, b) {
                if (a[prop] > b[prop]) {
                  return 1;
                } else if (a[prop] < b[prop]) {
                  return -1;
                }

                return 0;
              };
            }
          }, {
            key: "errorHandler",
            value: function errorHandler(error) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error || "Server Error");
            }
          }]);

          return HttpService;
        }();

        HttpService.ɵfac = function HttpService_Factory(t) {
          return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
        };

        HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: HttpService,
          factory: HttpService.ɵfac
        });
        return HttpService;
      }();
      /***/

    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        "LOGIN": "api/user/signin",
        "SIGN_UP": "api/user/signup",
        "SIGN_UP_VERIFY": "api/user/signup/verify",
        "FORGOT_PWD": "api/user/forgot-password",
        "FORGOT_PWD_VERIFY": "api/user/forgot-password/verify",
        "RESET_PWD": "api/user/password/reset",
        "USER_ADDRESS": "api/user/address",
        "SIGN_OUT": "api/user/signout",
        "PROGRAM_LIST": "api/program",
        "PRODUCTS_LIST": "api/products",
        "SUBSCRIPTIONS": "api/subscription",
        "OTP_TIMEOUT": 60
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! E:\FREELANCING\Juice Project\juicedelivery-frontend\src\main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map