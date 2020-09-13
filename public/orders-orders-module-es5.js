(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["orders-orders-module"], {
    /***/
    "./src/app/orders/orders-routing.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/orders/orders-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: OrdersRoutingModule */

    /***/
    function srcAppOrdersOrdersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrdersRoutingModule", function () {
        return OrdersRoutingModule;
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


      var _orders_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./orders.component */
      "./src/app/orders/orders.component.ts");

      var routes = [{
        path: '',
        component: _orders_component__WEBPACK_IMPORTED_MODULE_2__["OrdersComponent"]
      }];

      var OrdersRoutingModule = /*@__PURE__*/function () {
        var OrdersRoutingModule = function OrdersRoutingModule() {
          _classCallCheck(this, OrdersRoutingModule);
        };

        OrdersRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: OrdersRoutingModule
        });
        OrdersRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function OrdersRoutingModule_Factory(t) {
            return new (t || OrdersRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
        return OrdersRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OrdersRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "./src/app/orders/orders.component.ts":
    /*!********************************************!*\
      !*** ./src/app/orders/orders.component.ts ***!
      \********************************************/

    /*! exports provided: OrdersComponent */

    /***/
    function srcAppOrdersOrdersComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrdersComponent", function () {
        return OrdersComponent;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/data.service */
      "./src/app/services/data.service.ts");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");

      var OrdersComponent = /*@__PURE__*/function () {
        var OrdersComponent = /*#__PURE__*/function () {
          function OrdersComponent(router, dataService) {
            _classCallCheck(this, OrdersComponent);

            this.router = router;
            this.dataService = dataService;
            this.faChevronDown = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faChevronDown"];
            this.faCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCircle"];
            this.faFileContract = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFileContract"];
            this.faFileDownload = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFileDownload"];
            this.dataService.url.next(this.router.url);
          }

          _createClass(OrdersComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }]);

          return OrdersComponent;
        }();

        OrdersComponent.ɵfac = function OrdersComponent_Factory(t) {
          return new (t || OrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]));
        };

        OrdersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: OrdersComponent,
          selectors: [["app-orders"]],
          decls: 259,
          vars: 9,
          consts: [[1, "container", "m-t-2"], [1, "row", "m-b-1"], [1, "col-12"], ["data-toggle", "collapse", "data-target", "#multiCollapseExample1", "aria-expanded", "false", "aria-controls", "multiCollapseExample1", 1, "card"], [1, "card-body"], [1, "row"], [1, "col-xl-11", "col-lg-10"], [1, "list-group", "list-group-horizontal-sm", "order-details-collapse"], [1, "list-group-item"], [1, "badge", "badge-dark"], [1, "text-success", 3, "icon"], [1, "col-xl-1", "col-lg-2"], [1, "m-l-1", "m-r-1", "toggle", 3, "icon"], ["id", "multiCollapseExample1", 1, "collapse", "multi-collapse", "show"], [1, "card", "card-body"], [1, "col-xl-8", "col-lg-6"], [1, "card", "m-t-5p"], [1, "text-center", "text-uppercase", "text-muted"], [1, "col-xl-4", "col-lg-12"], [1, "text-center", "m-b-0", "m-t-5p"], [1, "text-center"], [1, "col-xl-8", "col-lg-12"], [1, "text-center", "m-t-5p"], [1, "col-xl-4", "col-lg-6"], [1, "m-r-1", 3, "icon"], ["type", "button", 1, "btn", "btn-outline-dark", "btn-block"], [1, "card"], [1, "card", "no-border"], [1, "row", "no-gutters"], [1, "col-md-5"], ["src", "./assets/images/dummy.png", "alt", "...", 1, "card-img"], [1, "col-md-7"], [1, "card-title"], ["data-toggle", "collapse", "data-target", "#multiCollapseExample2", "aria-expanded", "false", "aria-controls", "multiCollapseExample2", 1, "card"], ["id", "multiCollapseExample2", 1, "collapse", "multi-collapse"], ["data-toggle", "collapse", "data-target", "#multiCollapseExample3", "aria-expanded", "false", "aria-controls", "multiCollapseExample3", 1, "card"], ["id", "multiCollapseExample3", 1, "collapse", "multi-collapse"]],
          template: function OrdersComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Program 1");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u20B9500");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Monthly");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "fa-icon", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Order placed on Jun 21 ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "fa-icon", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h6", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Delivery Address");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "hr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 19);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "strong");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Mark Stephen");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 20);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "XXXXXXXXXX");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "X-14, ABC CHSL, NEAR ABC SCHOOL, ABC LOCALITY, MUMBAI, MAHARASHTRA - 400001");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 23);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h6", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "fa-icon", 24);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Invoice");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "hr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 25);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Download");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 26);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 27);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 28);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 29);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 30);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 31);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h5", 32);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "COCONUT WATER");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " (500 ML X 3 PC)");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 27);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 28);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 29);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 30);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 31);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h5", 32);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "ALMOND MILK");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " (500 ML X 1 PC)");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 27);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 28);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 29);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "img", 30);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 31);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h5", 32);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "PROTIEN MILKSHAKE");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " (500 ML X 1 PC)");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 33);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "ul", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "li", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Program 1");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "li", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "\u20B9500");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "li", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "span", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Monthly");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "li", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "fa-icon", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " Order placed on Jun 21 ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "fa-icon", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 34);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "h6", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Delivery Address");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "hr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "p", 19);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "strong");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Mark Stephen");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "p", 20);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "XXXXXXXXXX");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "p", 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "X-14, ABC CHSL, NEAR ABC SCHOOL, ABC LOCALITY, MUMBAI, MAHARASHTRA - 400001");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 23);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "h6", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "fa-icon", 24);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, " Invoice");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "hr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "button", 25);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Download");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 26);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 27);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 28);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 29);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "img", 30);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 31);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "h5", 32);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "COCONUT WATER");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, " (500 ML X 3 PC)");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 27);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 28);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 29);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "img", 30);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 31);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "h5", 32);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "ALMOND MILK");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, " (500 ML X 1 PC)");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 27);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 28);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 29);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "img", 30);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 31);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "h5", 32);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "PROTIEN MILKSHAKE");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, " (500 ML X 1 PC)");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 35);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "ul", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "li", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "Program 1");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "li", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "\u20B9500");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "li", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "span", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Monthly");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "li", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "fa-icon", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, " Order placed on Jun 21 ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "fa-icon", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 36);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "h6", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "Delivery Address");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "hr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "p", 19);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "strong");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "Mark Stephen");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "p", 20);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "XXXXXXXXXX");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "p", 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "X-14, ABC CHSL, NEAR ABC SCHOOL, ABC LOCALITY, MUMBAI, MAHARASHTRA - 400001");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 23);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "h6", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "fa-icon", 24);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, " Invoice");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](218, "hr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "button", 25);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "Download");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 26);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 27);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 28);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 29);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](230, "img", 30);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div", 31);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "h5", 32);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "COCONUT WATER");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, " (500 ML X 3 PC)");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "div", 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 27);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div", 28);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 29);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](241, "img", 30);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "div", 31);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "h5", 32);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "ALMOND MILK");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, " (500 ML X 1 PC)");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "div", 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 27);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 28);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 29);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](252, "img", 30);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 31);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "h5", 32);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "PROTIEN MILKSHAKE");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, " (500 ML X 1 PC)");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

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
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faCircle);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faChevronDown);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faFileContract);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](58);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faCircle);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faChevronDown);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faFileContract);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](58);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faCircle);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faChevronDown);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faFileContract);
            }
          },
          directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconComponent"]],
          styles: [".card[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 0em;\n}\n\n.toggle[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.order-details-collapse[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%] {\n  border: 0em;\n  padding: 0.15rem 1.25rem;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n\n.badge[_ngcontent-%COMP%] {\n  padding: 0.4em;\n}\n\nimg[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  height: 120px;\n}\n\n.no-border[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.m-t-5p[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\n.f-x-large[_ngcontent-%COMP%] {\n  font-size: x-large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXJzL29yZGVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9vcmRlcnMvb3JkZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwZW07XHJcbn1cclxuXHJcbi50b2dnbGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbn1cclxuXHJcbi5vcmRlci1kZXRhaWxzLWNvbGxhcHNlIC5saXN0LWdyb3VwLWl0ZW0ge1xyXG4gICAgYm9yZGVyOiAwZW07XHJcbiAgICBwYWRkaW5nOiAwLjE1cmVtIDEuMjVyZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XHJcbn1cclxuXHJcbi5iYWRnZSB7XHJcbiAgICBwYWRkaW5nOiAuNGVtO1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbn1cclxuXHJcbi5uby1ib3JkZXIge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4ubS10LTVwIHtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLmYteC1sYXJnZSB7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbn0iXX0= */"]
        });
        return OrdersComponent;
      }();
      /***/

    },

    /***/
    "./src/app/orders/orders.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/orders/orders.module.ts ***!
      \*****************************************/

    /*! exports provided: OrdersModule */

    /***/
    function srcAppOrdersOrdersModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrdersModule", function () {
        return OrdersModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _orders_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./orders-routing.module */
      "./src/app/orders/orders-routing.module.ts");
      /* harmony import */


      var _orders_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./orders.component */
      "./src/app/orders/orders.component.ts");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");

      var OrdersModule = /*@__PURE__*/function () {
        var OrdersModule = function OrdersModule() {
          _classCallCheck(this, OrdersModule);
        };

        OrdersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: OrdersModule
        });
        OrdersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function OrdersModule_Factory(t) {
            return new (t || OrdersModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _orders_routing_module__WEBPACK_IMPORTED_MODULE_3__["OrdersRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"]]]
        });
        return OrdersModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OrdersModule, {
          declarations: [_orders_component__WEBPACK_IMPORTED_MODULE_4__["OrdersComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _orders_routing_module__WEBPACK_IMPORTED_MODULE_3__["OrdersRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=orders-orders-module-es5.js.map