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


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _modules_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./modules/home/home.component */
    "./src/app/modules/home/home.component.ts");
    /* harmony import */


    var _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./shared/components/not-found/not-found.component */
    "./src/app/shared/components/not-found/not-found.component.ts");
    /* harmony import */


    var _shared_components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./shared/components/sign-up/sign-up.component */
    "./src/app/shared/components/sign-up/sign-up.component.ts");
    /* harmony import */


    var _modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./modules/dashboard/dashboard.component */
    "./src/app/modules/dashboard/dashboard.component.ts");
    /* harmony import */


    var _shared_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./shared/helpers/auth.guard */
    "./src/app/shared/helpers/auth.guard.ts");
    /* harmony import */


    var _shared_components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./shared/components/sign-in/sign-in.component */
    "./src/app/shared/components/sign-in/sign-in.component.ts");

    var routes = [{
      path: 'home',
      component: _modules_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: 'login',
      component: _shared_components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_7__["SignInComponent"]
    }, {
      path: 'register',
      component: _shared_components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"]
    }, {
      path: 'dashboard',
      component: _modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
      canActivate: [_shared_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    }, {
      path: '',
      pathMatch: 'full',
      component: _modules_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: '**',
      component: _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        }]
      }], null, null);
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
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


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _modules_home_home_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./modules/home/home.module */
    "./src/app/modules/home/home.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _modules_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./modules/dashboard/dashboard.module */
    "./src/app/modules/dashboard/dashboard.module.ts");
    /* harmony import */


    var _shared_helpers_token_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./shared/helpers/token.interceptor */
    "./src/app/shared/helpers/token.interceptor.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
        useClass: _shared_helpers_token_interceptor__WEBPACK_IMPORTED_MODULE_9__["TokenInterceptor"],
        multi: true
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _modules_home_home_module__WEBPACK_IMPORTED_MODULE_5__["HomeModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _modules_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_8__["DashboardModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _modules_home_home_module__WEBPACK_IMPORTED_MODULE_5__["HomeModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _modules_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_8__["DashboardModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _modules_home_home_module__WEBPACK_IMPORTED_MODULE_5__["HomeModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _modules_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_8__["DashboardModule"]],
          providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
            useClass: _shared_helpers_token_interceptor__WEBPACK_IMPORTED_MODULE_9__["TokenInterceptor"],
            multi: true
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/dashboard/chat-message/chat-message.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/modules/dashboard/chat-message/chat-message.component.ts ***!
    \**************************************************************************/

  /*! exports provided: ChatMessageComponent */

  /***/
  function srcAppModulesDashboardChatMessageChatMessageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatMessageComponent", function () {
      return ChatMessageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../shared/services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ChatMessageComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r86.message.content, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 2, ctx_r86.message.time, "medium"));
      }
    }

    function ChatMessageComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r87.message.content, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 2, ctx_r87.message.time, "medium"));
      }
    }

    var ChatMessageComponent =
    /*#__PURE__*/
    function () {
      function ChatMessageComponent(authService) {
        _classCallCheck(this, ChatMessageComponent);

        this.authService = authService;
        this.message = null;
        this.afterRenderMessage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.currentUserId = authService.currentUserValue.id;
      }

      _createClass(ChatMessageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.afterRenderMessage.emit();
        }
      }]);

      return ChatMessageComponent;
    }();

    ChatMessageComponent.ɵfac = function ChatMessageComponent_Factory(t) {
      return new (t || ChatMessageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
    };

    ChatMessageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChatMessageComponent,
      selectors: [["app-chat-message"]],
      inputs: {
        message: "message"
      },
      outputs: {
        afterRenderMessage: "afterRenderMessage"
      },
      decls: 3,
      vars: 2,
      consts: [[1, "row"], ["class", "col-sm-12", 4, "ngIf"], [1, "col-sm-12"], [1, "col-sm-8", "incoming-message-container"], [1, "col-2", "incoming-message-avatar"], ["src", "/assets/img/user_avatar.svg", "alt", ""], [1, "col-10", "incoming-message-content"], [1, "incoming-message-text"], [1, "shadow", "p-3", "mb-5", "rounded", 2, "overflow-wrap", "break-word"], [1, "incoming-message-date"], [1, "col-sm-4"], [1, "col-sm-8", "outgoing-message-container"], [1, "col-12"], [1, "outgoing-message-text"], [1, "outgoing-message-date"]],
      template: function ChatMessageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatMessageComponent_div_1_Template, 15, 5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatMessageComponent_div_2_Template, 13, 5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message.sender !== ctx.currentUserId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message.sender === ctx.currentUserId);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
      styles: [".incoming-message-container[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  margin-top: 10px;\n}\n\n.incoming-message-content[_ngcontent-%COMP%] {\n  width: 90%;\n  float: left;\n  margin-left: 0;\n}\n\n.incoming-message-text[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.incoming-message-text[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  background: #ebebeb none repeat scroll 0 0;\n  padding: 7px;\n  width: auto;\n  border-radius: 10px;\n}\n\n.incoming-message-avatar[_ngcontent-%COMP%] {\n  width: 10%;\n  float: left;\n}\n\n.incoming-message-avatar[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n.incoming-message-date[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-top: -30px;\n}\n\n.outgoing-message-container[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  margin-top: 10px;\n  margin-left: 0;\n  float: right;\n}\n\n.outgoing-message-text[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.outgoing-message-text[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  background: #0275d8 none repeat scroll 0 0;\n  color: #ffffff;\n}\n\n.outgoing-message-text[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]::-moz-selection { \n  color: #000000;\n  background: #0DEBFF;\n}\n\n.outgoing-message-text[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]::selection {\n  color: #000000;\n  background: #0DEBFF;\n}\n\n.outgoing-message-date[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-top: -30px;\n}\n\n@media (max-width: 992px) {\n  .incoming-message-avatar[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n@media (max-width: 576px) {\n\n  .outgoing-message-container[_ngcontent-%COMP%] {\n    margin-left: 140px\n  }\n\n  .incoming-message-container[_ngcontent-%COMP%] {\n    margin-right: 100px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvY2hhdC1tZXNzYWdlL2NoYXQtbWVzc2FnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDBDQUEwQztFQUMxQyxZQUFZO0VBQ1osV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDBDQUEwQztFQUMxQyxjQUFjO0FBQ2hCOztBQUVBLDZDQUE2QyxxQkFBcUI7RUFDaEUsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7O0FBR0E7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUdBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQTs7RUFFRTtJQUNFO0VBQ0Y7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGFzaGJvYXJkL2NoYXQtbWVzc2FnZS9jaGF0LW1lc3NhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbmNvbWluZy1tZXNzYWdlLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5pbmNvbWluZy1tZXNzYWdlLWNvbnRlbnQge1xuICB3aWR0aDogOTAlO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi5pbmNvbWluZy1tZXNzYWdlLXRleHQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uaW5jb21pbmctbWVzc2FnZS10ZXh0ID4gcCB7XG4gIGJhY2tncm91bmQ6ICNlYmViZWIgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgcGFkZGluZzogN3B4O1xuICB3aWR0aDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmluY29taW5nLW1lc3NhZ2UtYXZhdGFyIHtcbiAgd2lkdGg6IDEwJTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5pbmNvbWluZy1tZXNzYWdlLWF2YXRhciA+IGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLmluY29taW5nLW1lc3NhZ2UtZGF0ZSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi10b3A6IC0zMHB4O1xufVxuXG4ub3V0Z29pbmctbWVzc2FnZS1jb250YWluZXIge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ub3V0Z29pbmctbWVzc2FnZS10ZXh0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLm91dGdvaW5nLW1lc3NhZ2UtdGV4dCA+IHAge1xuICBiYWNrZ3JvdW5kOiAjMDI3NWQ4IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4ub3V0Z29pbmctbWVzc2FnZS10ZXh0ID4gcDo6LW1vei1zZWxlY3Rpb24geyAvKiBDb2RlIGZvciBGaXJlZm94ICovXG4gIGNvbG9yOiAjMDAwMDAwO1xuICBiYWNrZ3JvdW5kOiAjMERFQkZGO1xufVxuXG4ub3V0Z29pbmctbWVzc2FnZS10ZXh0ID4gcDo6c2VsZWN0aW9uIHtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGJhY2tncm91bmQ6ICMwREVCRkY7XG59XG5cblxuLm91dGdvaW5nLW1lc3NhZ2UtZGF0ZSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAtMzBweDtcbn1cblxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmluY29taW5nLW1lc3NhZ2UtYXZhdGFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuXG4gIC5vdXRnb2luZy1tZXNzYWdlLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLWxlZnQ6IDE0MHB4XG4gIH1cblxuICAuaW5jb21pbmctbWVzc2FnZS1jb250YWluZXIge1xuICAgIG1hcmdpbi1yaWdodDogMTAwcHg7XG4gIH1cbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatMessageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-chat-message',
          templateUrl: './chat-message.component.html',
          styleUrls: ['./chat-message.component.css']
        }]
      }], function () {
        return [{
          type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }];
      }, {
        message: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['message']
        }],
        afterRenderMessage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/modules/dashboard/dashboard.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/modules/dashboard/dashboard.component.ts ***!
    \**********************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppModulesDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _shared_enum_chat_messages_status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/enum/chat-messages-status */
    "./src/app/shared/enum/chat-messages-status.ts");
    /* harmony import */


    var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_services_chat_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../shared/services/chat-message.service */
    "./src/app/shared/services/chat-message.service.ts");
    /* harmony import */


    var _shared_services_ws_messages_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/services/ws-messages.service */
    "./src/app/shared/services/ws-messages.service.ts");
    /* harmony import */


    var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../shared/services/user.service */
    "./src/app/shared/services/user.service.ts");
    /* harmony import */


    var _shared_services_friend_request_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../shared/services/friend-request.service */
    "./src/app/shared/services/friend-request.service.ts");
    /* harmony import */


    var _shared_services_chat_profile_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../shared/services/chat-profile.service */
    "./src/app/shared/services/chat-profile.service.ts");
    /* harmony import */


    var _shared_services_friend_chat_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../shared/services/friend-chat.service */
    "./src/app/shared/services/friend-chat.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _friend_chat_friend_chat_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./friend-chat/friend-chat.component */
    "./src/app/modules/dashboard/friend-chat/friend-chat.component.ts");
    /* harmony import */


    var _received_friend_request_received_friend_request_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./received-friend-request/received-friend-request.component */
    "./src/app/modules/dashboard/received-friend-request/received-friend-request.component.ts");
    /* harmony import */


    var _new_friend_request_new_friend_request_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./new-friend-request/new-friend-request.component */
    "./src/app/modules/dashboard/new-friend-request/new-friend-request.component.ts");
    /* harmony import */


    var _chat_message_chat_message_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./chat-message/chat-message.component */
    "./src/app/modules/dashboard/chat-message/chat-message.component.ts");
    /* harmony import */


    var _settings_settings_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./settings/settings.component */
    "./src/app/modules/dashboard/settings/settings.component.ts");

    var _c0 = ["inputMessage"];
    var _c1 = ["friendCode"];
    var _c2 = ["notification"];
    var _c3 = ["messageContainer"];
    var _c4 = ["appMessage"];

    function DashboardComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Are you sure you want to delete this friend?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_4_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r35.deleteFriend();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Yes, Im sure!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_4_Template_button_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r37.cancelDeleteFriend();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "We also remove all your messages with this user.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DashboardComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Hello ", ctx_r22.currentUser.firstName + " " + ctx_r22.currentUser.lastName, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Friends code: ", ctx_r22.currentUserChatProfile.friendsRequestCode, " ");
      }
    }

    function DashboardComponent_div_13_span_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Friends request");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DashboardComponent_div_13_span_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invite new friend");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DashboardComponent_div_13_span_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Settings");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DashboardComponent_div_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_13_Template_input_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42);

          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r41.showFriendComponent();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DashboardComponent_div_13_span_5_Template, 2, 0, "span", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DashboardComponent_div_13_span_6_Template, 2, 0, "span", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DashboardComponent_div_13_span_7_Template, 2, 0, "span", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.isActiveFriendRequestComponent);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.isActiveAddFriendComponent);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.isActiveSettingsComponent);
      }
    }

    function DashboardComponent_div_16_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-friend-chat", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_16_div_1_Template_app_friend_chat_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46);

          var friendChat_r44 = ctx.$implicit;

          var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r45.enterFriendChat(friendChat_r44.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var friendChat_r44 = ctx.$implicit;

        var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("conversation", friendChat_r44)("isNewMessage", ctx_r43.isNewMessage)("onClickComponent", ctx_r43.clickFriendComponent);
      }
    }

    function DashboardComponent_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_div_16_div_1_Template, 2, 3, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r24.friendsChats);
      }
    }

    function DashboardComponent_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "You don't have any friends");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DashboardComponent_div_18_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-received-friend-request", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("friendsRequestReply", function DashboardComponent_div_18_div_1_Template_app_received_friend_request_friendsRequestReply_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50);

          var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r49.onReplyFriendsRequest($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var friendsRequest_r48 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("friendRequest", friendsRequest_r48);
      }
    }

    function DashboardComponent_div_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_div_18_div_1_Template, 2, 1, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r26.receivedFriendRequests);
      }
    }

    function DashboardComponent_div_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "No new requests");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "When people send you friend requests, they'll appear here.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DashboardComponent_div_20_div_7_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-new-friend-request", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("friendsRequestHasDeleted", function DashboardComponent_div_20_div_7_div_1_Template_app_new_friend_request_friendsRequestHasDeleted_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57);

          var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r56.onDeletedFriendsRequest($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var friendRequest_r55 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("friendRequest", friendRequest_r55);
      }
    }

    function DashboardComponent_div_20_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_div_20_div_7_div_1_Template, 2, 1, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r52.sentFriendRequests);
      }
    }

    function DashboardComponent_div_20_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "No sent friends request");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DashboardComponent_div_20_Template(rf, ctx) {
      if (rf & 1) {
        var _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 50, 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_20_Template_input_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59);

          var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r58.sendFriendRequest();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DashboardComponent_div_20_div_7_Template, 2, 1, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DashboardComponent_div_20_div_8_Template, 7, 0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r28.isActiveAddFriendComponent && ctx_r28.sentFriendRequests.length !== 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r28.isActiveAddFriendComponent && ctx_r28.sentFriendRequests.length === 0);
      }
    }

    function DashboardComponent_div_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Personal settings");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DashboardComponent_ng_container_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function DashboardComponent_ng_template_35_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_ng_template_35_div_1_Template_button_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66);

          var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r65.deleteFriendAlert();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Remove");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r60.currentRecipientUser.firstName + " " + ctx_r60.currentRecipientUser.lastName, " ");
      }
    }

    function DashboardComponent_ng_template_35_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Choice your friend and start chatting.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DashboardComponent_ng_template_35_div_6_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Not found any message");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DashboardComponent_ng_template_35_div_6_div_2_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-chat-message", 77, 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("afterRenderMessage", function DashboardComponent_ng_template_35_div_6_div_2_div_1_Template_app_chat_message_afterRenderMessage_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73);

          var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r72.scrollChatMessage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var message_r70 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("message", message_r70);
      }
    }

    function DashboardComponent_ng_template_35_div_6_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_ng_template_35_div_6_div_2_div_1_Template, 3, 1, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r68.messageList);
      }
    }

    function DashboardComponent_ng_template_35_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_ng_template_35_div_6_div_1_Template, 7, 0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DashboardComponent_ng_template_35_div_6_div_2_Template, 2, 1, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r63.messageList.length === 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r63.messageList.length !== 0);
      }
    }

    function DashboardComponent_ng_template_35_div_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "textarea", 81, 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function DashboardComponent_ng_template_35_div_8_Template_textarea_keyup_enter_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76);

          var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r75.sentMessage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_ng_template_35_div_8_Template_input_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76);

          var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r77.sentMessage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DashboardComponent_ng_template_35_Template(rf, ctx) {
      if (rf & 1) {
        var _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_ng_template_35_div_1_Template, 12, 1, "div", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 60, 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function DashboardComponent_ng_template_35_Template_div_scroll_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r79);

          var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r78.onScrollMessages($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DashboardComponent_ng_template_35_div_5_Template, 7, 0, "div", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DashboardComponent_ng_template_35_div_6_Template, 3, 2, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DashboardComponent_ng_template_35_div_8_Template, 7, 0, "div", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r32.currentFriendChat !== null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r32.currentFriendChat === null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r32.currentFriendChat !== null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r32.currentFriendChat !== null);
      }
    }

    function DashboardComponent_ng_template_37_Template(rf, ctx) {
      if (rf & 1) {
        var _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-settings", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSettingsOperation", function DashboardComponent_ng_template_37_Template_app_settings_onSettingsOperation_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81);

          var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r80.showNotificationMessage($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var DashboardComponent =
    /*#__PURE__*/
    function () {
      function DashboardComponent(authService, router, chatMessageService, wsMessagesService, userService, friendRequestService, chatProfileService, friendChatService) {
        _classCallCheck(this, DashboardComponent);

        this.authService = authService;
        this.router = router;
        this.chatMessageService = chatMessageService;
        this.wsMessagesService = wsMessagesService;
        this.userService = userService;
        this.friendRequestService = friendRequestService;
        this.chatProfileService = chatProfileService;
        this.friendChatService = friendChatService;
        this.isNewMessage = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.clickFriendComponent = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.currentUser = {};
        this.currentUserChatProfile = {};
        this.receivedFriendRequests = [];
        this.sentFriendRequests = [];
        this.currentRecipientUser = {};
        this.notificationMessage = '';
        this.isActiveFriendComponent = true;
        this.isActiveFriendRequestComponent = false;
        this.isActiveAddFriendComponent = false;
        this.isActiveSettingsComponent = false;
        this.showDeleteFriendPrompt = false;
        this.isNotificationVisible = false;
        this.friendsChats = [];
        this.messageList = [];
        this.currentFriendChat = null;
        this.scrollDivMessagePosition = null;
        this.shouldScrollToBottomAfterSendMessage = false;
        this.audio = new Audio();
        wsMessagesService.connect(authService.getToken(), this);
        this.initAudioNotification();
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getUserFriendsChats();
          this.getUserInformation();
          this.getUserChatProfile();
        }
      }, {
        key: "getUserFriendsChats",
        value: function getUserFriendsChats() {
          var _this = this;

          this.friendChatService.getFriendsChats().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (result) {
            _this.friendsChats = result;
          });
        }
      }, {
        key: "getPreviousMessages",
        value: function getPreviousMessages() {
          var _this2 = this;

          this.chatMessageService.getPreviousMessages(10, this.currentFriendChat.id, this.currentFriendChat.chatWith, new Date(this.messageList[0].time).toISOString()).subscribe(function (result) {
            result.forEach(function (message) {
              //unshift: add to begining
              _this2.messageList.unshift(message);
            });
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          this.authService.logout();
          this.router.navigate(['/']);
        }
      }, {
        key: "enterFriendChat",
        value: function enterFriendChat(friendChatId) {
          var _this3 = this;

          this.currentFriendChat = this.friendsChats.filter(function (value) {
            return value.id === friendChatId;
          })[0];
          this.getInitialMessages(this.currentFriendChat.id, this.currentFriendChat.chatWith);
          this.userService.getUser(this.currentFriendChat.recipient.userId).subscribe(function (recipient) {
            _this3.currentRecipientUser = recipient;
          });
          this.clickFriendComponent.next(friendChatId);
        }
      }, {
        key: "getInitialMessages",
        value: function getInitialMessages(friendChatId, friendChatWithId) {
          var _this4 = this;

          this.chatMessageService.getLastMessages(10, friendChatId, friendChatWithId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (lastChatMessages) {
            lastChatMessages.sort(function (m1, m2) {
              return m1.time.localeCompare(m2.time);
            });
            _this4.messageList = lastChatMessages;
          });
        }
      }, {
        key: "sentMessage",
        value: function sentMessage() {
          var messageContent = this.inputMessage.nativeElement.value; // delete EOL

          if (messageContent.substr(messageContent.length - 1) === '\n') {
            messageContent = messageContent.slice(0, -1);
          }

          if (messageContent !== '' || 0 !== messageContent.length) {
            var message = {
              friendChat: this.currentFriendChat.id,
              sender: this.authService.currentUserValue.id,
              recipient: this.currentFriendChat.recipient.userId,
              content: messageContent,
              status: _shared_enum_chat_messages_status__WEBPACK_IMPORTED_MODULE_3__["ChatMessagesStatus"].received,
              time: new Date().toISOString()
            };
            this.messageList.push(message);
            this.wsMessagesService.sendMessage(message);
            this.inputMessage.nativeElement.value = '';
            this.isNewMessage.next(message);
            this.shouldScrollToBottomAfterSendMessage = true;
          } else {
            this.inputMessage.nativeElement.value = '';
          }
        }
      }, {
        key: "scrollChatMessage",
        value: function scrollChatMessage() {
          // scroll to bottom after send chat-message
          if (this.shouldScrollToBottomAfterSendMessage) {
            this.messageContainer.nativeElement.scrollTop = this.messageContainer.nativeElement.scrollHeight;
            this.shouldScrollToBottomAfterSendMessage = false;
            return;
          }

          if (this.scrollDivMessagePosition !== null && this.scrollDivMessagePosition < this.messageContainer.nativeElement.scrollHeight) {
            this.messageContainer.nativeElement.scrollTop = this.messageContainer.nativeElement.scrollHeight - this.scrollDivMessagePosition;
          } else {
            this.messageContainer.nativeElement.scrollTop = this.messageContainer.nativeElement.scrollHeight;
          }
        } //websock protocol

      }, {
        key: "wsAfterConnected",
        value: function wsAfterConnected() {
          var that = this;
          this.wsMessagesService.ws.subscribe('/topic/' + this.authService.currentUserValue.id + '.messages', function (message) {
            var chatMessage;
            chatMessage = JSON.parse(message.body);

            if (that.currentFriendChat !== null && chatMessage.friendChat === that.currentFriendChat.chatWith) {
              that.chatMessageService.markMessageAsDelivered(that.currentFriendChat.chatWith).subscribe(function (result) {
                chatMessage.status = _shared_enum_chat_messages_status__WEBPACK_IMPORTED_MODULE_3__["ChatMessagesStatus"].delivered;
                that.messageList.push(chatMessage);
              });
            } else {
              that.audio.play().then(function (_) {// sound effect started
              })["catch"](function (error) {// empty
              });
            }

            that.isNewMessage.next(chatMessage);
          });
        }
      }, {
        key: "showFriendRequestComponent",
        value: function showFriendRequestComponent() {
          var _this5 = this;

          this.friendRequestService.getReceivedFriendRequests().subscribe(function (result) {
            _this5.receivedFriendRequests = result;
            _this5.isActiveFriendRequestComponent = true;
            _this5.isActiveFriendComponent = false;
            _this5.isActiveAddFriendComponent = false;
            _this5.isActiveSettingsComponent = false;
          });
        }
      }, {
        key: "showFriendComponent",
        value: function showFriendComponent() {
          this.isActiveFriendComponent = true;
          this.isActiveFriendRequestComponent = false;
          this.isActiveAddFriendComponent = false;
          this.isActiveSettingsComponent = false;
          this.getUserFriendsChats();
          this.getUserInformation();
          this.getUserChatProfile();
        }
      }, {
        key: "showAddFriendComponent",
        value: function showAddFriendComponent() {
          var _this6 = this;

          this.friendRequestService.getSentFriendRequests().subscribe(function (result) {
            _this6.sentFriendRequests = result;
            _this6.isActiveAddFriendComponent = true;
            _this6.isActiveFriendRequestComponent = false;
            _this6.isActiveFriendComponent = false;
            _this6.isActiveSettingsComponent = false;
          });
        }
      }, {
        key: "showSettingsComponent",
        value: function showSettingsComponent() {
          this.isActiveFriendComponent = false;
          this.isActiveFriendRequestComponent = false;
          this.isActiveAddFriendComponent = false;
          this.isActiveSettingsComponent = true;
          this.currentFriendChat = null;
        }
      }, {
        key: "getUserInformation",
        value: function getUserInformation() {
          var _this7 = this;

          this.userService.getUser(this.authService.currentUserValue.id).subscribe(function (user) {
            _this7.currentUser = user;
          });
        }
      }, {
        key: "getUserChatProfile",
        value: function getUserChatProfile() {
          var _this8 = this;

          this.chatProfileService.getChatProfile(this.authService.currentUserValue.id).subscribe(function (userChatProfile) {
            _this8.currentUserChatProfile = userChatProfile;
          });
        }
      }, {
        key: "sendFriendRequest",
        value: function sendFriendRequest() {
          var _this9 = this;

          var invitationCode = this.friendCode.nativeElement.value;
          invitationCode = invitationCode.replace(/\s/g, '');

          if (invitationCode.length !== 0) {
            this.friendRequestService.postCreateNewFriendRequest(invitationCode).subscribe(function (result) {
              _this9.sentFriendRequests.push(result);

              _this9.showNotificationMessage('We send a new friends request.');
            }, function (errorObject) {
              if (errorObject.status === 404 || errorObject.status === 400 || errorObject.status === 409) {
                _this9.showNotificationMessage(errorObject.error.detail);
              }
            });
            this.friendCode.nativeElement.value = '';
          }
        }
      }, {
        key: "initAudioNotification",
        value: function initAudioNotification() {
          this.audio.src = '../../../assets/audio/notification_sound.mp3';
          this.audio.load();
        }
      }, {
        key: "showNotificationMessage",
        value: function showNotificationMessage(message) {
          var _this10 = this;

          this.notificationMessage = message;
          this.isNotificationVisible = true;
          setTimeout(function () {
            _this10.isNotificationVisible = false;
          }, 2500);
        }
      }, {
        key: "onDeletedFriendsRequest",
        value: function onDeletedFriendsRequest(resultMessage) {
          this.showNotificationMessage(resultMessage);
          this.showAddFriendComponent();
        }
      }, {
        key: "onReplyFriendsRequest",
        value: function onReplyFriendsRequest(resultMessage) {
          this.showNotificationMessage(resultMessage);
          this.showFriendRequestComponent();
        }
      }, {
        key: "onScrollMessages",
        value: function onScrollMessages(event) {
          // @ts-ignore
          if (event.target.scrollTop === 0) {
            // @ts-ignore
            this.scrollDivMessagePosition = event.target.scrollHeight;
            this.getPreviousMessages();
          }
        }
      }, {
        key: "deleteFriendAlert",
        value: function deleteFriendAlert() {
          this.showDeleteFriendPrompt = true;
        }
      }, {
        key: "deleteFriend",
        value: function deleteFriend() {
          var _this11 = this;

          this.friendChatService.deleteFriend(this.currentFriendChat.id, this.currentFriendChat.chatWith).subscribe(function (result) {
            _this11.getUserFriendsChats();

            _this11.showDeleteFriendPrompt = false;
            _this11.currentFriendChat = null;

            _this11.showNotificationMessage('Friend has been removed.');
          });
        }
      }, {
        key: "cancelDeleteFriend",
        value: function cancelDeleteFriend() {
          this.showDeleteFriendPrompt = false;
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_chat_message_service__WEBPACK_IMPORTED_MODULE_6__["ChatMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_ws_messages_service__WEBPACK_IMPORTED_MODULE_7__["WsMessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_friend_request_service__WEBPACK_IMPORTED_MODULE_9__["FriendRequestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_chat_profile_service__WEBPACK_IMPORTED_MODULE_10__["ChatProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_friend_chat_service__WEBPACK_IMPORTED_MODULE_11__["FriendChatService"]));
    };

    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      viewQuery: function DashboardComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputMessage = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.friendCode = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.notification = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.messageContainer = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.appMessage = _t.first);
        }
      },
      decls: 39,
      vars: 15,
      consts: [["role", "alert", 3, "ngClass"], ["notification", ""], ["class", "row text-center shadow-lg p-3 mb-5 bg-white rounded remove-friend-alert", 4, "ngIf"], [1, "container", "fill", 3, "ngClass"], [1, "row", "fill", "shadow-lg", "p-3", "mb-5", "bg-white", "rounded"], [1, "col-sm-4", "chat-box-left"], [1, "row", "chat-box-left-header"], [1, "col-sm-12", "h-100"], [1, "row", "h-100"], [1, "col-12", "h-100"], [4, "ngIf"], ["class", "h-100", 4, "ngIf"], [1, "row", "chat-box-left-list"], [1, "col-sm-12", "friends-list-box", "h-100", 2, "overflow-y", "auto"], ["class", "text-center", "style", "margin-top: 40%;", 4, "ngIf"], [1, "row", "chat-box-buttons"], [1, "col-sm-12"], [1, "row", "h-100", "mr-0"], [1, "col-3", "text-center", "w-50", "m-auto"], ["type", "image", "src", "/assets/img/add_friend.svg", 1, "left-buttons-menu-ico", "nav-button", 3, "click"], ["type", "image", "src", "/assets/img/new_friends_request.svg", 1, "left-buttons-menu-ico", "nav-button", 3, "click"], ["type", "image", "src", "/assets/img/setting_ico.svg", 1, "left-buttons-menu-ico", "nav-button", 3, "click"], ["type", "image", "src", "/assets/img/logout.svg", 1, "left-buttons-menu-ico", "nav-button", 3, "click"], [1, "col-sm-8", "chat-box-right"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["chat", ""], ["settings", ""], [1, "row", "text-center", "shadow-lg", "p-3", "mb-5", "bg-white", "rounded", "remove-friend-alert"], [1, "col-12"], [2, "font-size", "20px"], [1, "col-12", "mt-4"], ["type", "button", 1, "btn", "btn-primary", "text-left", 3, "click"], ["type", "button", 1, "btn", "btn-danger", "text-right", 3, "click"], [2, "font-size", "12px", "color", "#eb453a"], [1, "left-header-text-user"], [1, "left-header-text-friends-code"], [1, "h-100"], [1, "col-4", "m-auto"], ["type", "image", "src", "/assets/img/back.svg", 1, "back-button", 3, "click"], [1, "col-8", "text-right", "m-auto"], ["class", "left-header-friend-request-text", 4, "ngIf"], [1, "left-header-friend-request-text"], [4, "ngFor", "ngForOf"], [3, "conversation", "isNewMessage", "onClickComponent", "click"], [1, "text-center", 2, "margin-top", "40%"], ["src", "/assets/img/friend_theme.svg", 2, "max-width", "75%"], [3, "friendRequest", "friendsRequestReply"], ["src", "/assets/img/sad_blue.svg", 2, "max-width", "75%"], [1, "row"], [1, "input-group", "mb-3", 2, "padding", "5px"], ["type", "text", "placeholder", "Friend code", "aria-label", "Friend code", "aria-describedby", "basic-addon2", 1, "form-control", "input-friend-code"], ["friendCode", ""], [1, "input-group-append"], ["type", "image", "src", "/assets/img/letter.svg", "width", "60", 1, "btn", "btn-outline-primary", "border", "send-friend-request-button", 3, "click"], [3, "friendRequest", "friendsRequestHasDeleted"], ["src", "/assets/img/empty_add_friend.svg", 2, "max-width", "75%"], ["src", "/assets/img/settings.svg", 2, "max-width", "75%"], [2, "height", "7%"], ["class", "row chat-current-person-container", 4, "ngIf"], [1, "row", 2, "height", "73%"], [1, "col-sm-12", "messages-container", 3, "scroll"], ["messageContainer", ""], ["class", "row h-100", 4, "ngIf"], [1, "row", 2, "height", "20%"], ["class", "col-sm-12 h-100", 4, "ngIf"], [1, "row", "chat-current-person-container"], [1, "col-2", "m-auto", "text-right"], ["src", "/assets/img/user_avatar.svg", "alt", ""], [1, "col-8", "m-auto", "text-left"], [1, "chat-current-person-text"], [1, "btn-group", "dropleft"], ["id", "dropdownMenuButton", "type", "image", "src", "/assets/img/more.svg", "alt", "", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "dropdown-toggle", "nav-button", 2, "max-width", "35px"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu"], [1, "dropdown-item", 3, "click"], [1, "col-12", "text-center", "m-auto", "w-50"], ["src", "/assets/img/begin_chat.svg", "alt", "", 2, "max-width", "50%"], ["src", "/assets/img/no_message.svg", "alt", "", 2, "max-width", "50%"], [3, "message", "afterRenderMessage"], ["appMessage", ""], [1, "row", "h-100", "m-0", 2, "padding", "10px"], [1, "input-group", "mb-3"], ["placeholder", "Type a message", "aria-label", "Type a message", "aria-describedby", "basic-addon2", 1, "form-control", "input-message", "h-100", "send-message-textarea", 3, "keyup.enter"], ["inputMessage", ""], ["type", "image", "src", "/assets/img/send.svg", "width", "50", 1, "btn", "btn-outline-primary", "send-button", 3, "click"], [1, "col-sm-12", "messages-container"], [3, "onSettingsOperation"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DashboardComponent_div_4_Template, 13, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DashboardComponent_div_12_Template, 5, 2, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DashboardComponent_div_13_Template, 8, 3, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DashboardComponent_div_16_Template, 2, 1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, DashboardComponent_div_17_Template, 7, 0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, DashboardComponent_div_18_Template, 2, 1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, DashboardComponent_div_19_Template, 10, 0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, DashboardComponent_div_20_Template, 9, 2, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, DashboardComponent_div_21_Template, 7, 0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_input_click_26_listener() {
            return ctx.showAddFriendComponent();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_input_click_28_listener() {
            return ctx.showFriendRequestComponent();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_input_click_30_listener() {
            return ctx.showSettingsComponent();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_input_click_32_listener() {
            return ctx.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, DashboardComponent_ng_container_34_Template, 1, 0, "ng-container", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, DashboardComponent_ng_template_35_Template, 9, 4, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, DashboardComponent_ng_template_37_Template, 4, 0, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](36);

          var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.isNotificationVisible ? "notification" : "notification-hide");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.notificationMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showDeleteFriendPrompt);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.showDeleteFriendPrompt ? "blur-container" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isActiveFriendComponent);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isActiveFriendRequestComponent || ctx.isActiveAddFriendComponent || ctx.isActiveSettingsComponent);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isActiveFriendComponent && ctx.friendsChats.length !== 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isActiveFriendComponent && ctx.friendsChats.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isActiveFriendRequestComponent && ctx.receivedFriendRequests.length !== 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isActiveFriendRequestComponent && ctx.receivedFriendRequests.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isActiveAddFriendComponent);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isActiveSettingsComponent);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isActiveSettingsComponent)("ngIfThen", _r31)("ngIfElse", _r33);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _friend_chat_friend_chat_component__WEBPACK_IMPORTED_MODULE_13__["FriendChatComponent"], _received_friend_request_received_friend_request_component__WEBPACK_IMPORTED_MODULE_14__["ReceivedFriendRequestComponent"], _new_friend_request_new_friend_request_component__WEBPACK_IMPORTED_MODULE_15__["NewFriendRequestComponent"], _chat_message_chat_message_component__WEBPACK_IMPORTED_MODULE_16__["ChatMessageComponent"], _settings_settings_component__WEBPACK_IMPORTED_MODULE_17__["SettingsComponent"]],
      styles: [".notification[_ngcontent-%COMP%], .notification-hide[_ngcontent-%COMP%] {\n  position: fixed;\n  height: 25px;\n  left: 0;\n  right: 0;\n  box-sizing: border-box;\n  color: white;\n  text-align: center;\n  background: rgba(0, 94, 6, 0.72);\n  transition: height .2s;\n}\n\n.notification-hide[_ngcontent-%COMP%] {\n  height: 0;\n}\n\n.container[_ngcontent-%COMP%] {\n  padding-top: 2%;\n  padding-bottom: 2%;\n}\n\n.blur-container[_ngcontent-%COMP%] {\n  -moz-filter: blur(5px);\n  -o-filter: blur(5px);\n  -ms-filter: blur(5px);\n  filter: blur(5px);\n  background-color: #ccc;\n}\n\n.fill[_ngcontent-%COMP%] {\n  min-height: 100%;\n  height: 100%;\n}\n\n.messages-container[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow-y: auto;\n  overflow-x: auto;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.messages-container[_ngcontent-%COMP%]::-webkit-scrollbar, .input-message[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 5px;\n}\n\n.messages-container[_ngcontent-%COMP%]::-webkit-scrollbar-track, .input-message[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n\n.messages-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, .input-message[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #B9E4FF;\n}\n\n.messages-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover, .input-message[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #0098E8;\n}\n\n.send-message-textarea[_ngcontent-%COMP%] {\n  resize: none;\n  border-color: #FBFBFB;\n}\n\n.chat-current-person-container[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  border-radius: 10px;\n  padding: 5px;\n}\n\n.chat-current-person-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 35px\n}\n\n.chat-current-person-text[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n\n.input-message[_ngcontent-%COMP%] {\n  height: 100%;\n  resize: none;\n}\n\n.input-message[_ngcontent-%COMP%]:focus, .input-friend-code[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n  border: 1px solid rgba(0, 207, 255, 0.16);\n  box-shadow: 0 0 10px rgba(0, 207, 255, 0.2);\n}\n\n.send-button[_ngcontent-%COMP%] {\n  border-color: #FBFBFB;\n  outline: none !important;\n}\n\n.send-button[_ngcontent-%COMP%]:focus, .send-friend-request-button[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n  box-shadow: none;\n}\n\n.nav-button[_ngcontent-%COMP%]:hover {\n  border: 1px solid rgba(0, 207, 255, 0.16);\n  box-shadow: 0 0 10px rgba(0, 207, 255, 0.2);\n  border-radius: 25%;\n  padding: 2px;\n}\n\n.back-button[_ngcontent-%COMP%] {\n  width: 50px;\n}\n\n.back-button[_ngcontent-%COMP%]:hover {\n  padding: 2px;\n  border-bottom: 1px solid rgba(0, 207, 255, 0.16);\n  box-shadow: 0 0 10px rgba(0, 207, 255, 0.2);\n  border-radius: 50%;\n}\n\n.nav-button[_ngcontent-%COMP%], .back-button[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n}\n\n.input-friend-code[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.chat-box-left[_ngcontent-%COMP%] {\n  height: 100%;\n  border-right: 1px solid #c4c4c4;\n  background: #ffffff;\n}\n\n.chat-box-right[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.chat-box-left-header[_ngcontent-%COMP%] {\n  height: 10%;\n  border-bottom: 1px solid #c4c4c4;\n}\n\n.chat-box-left-list[_ngcontent-%COMP%] {\n  height: 80%;\n\n}\n\n.friends-list-box[_ngcontent-%COMP%] {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n\n.friends-list-box[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n.chat-box-buttons[_ngcontent-%COMP%] {\n  height: 10%;\n}\n\n.left-header-text-user[_ngcontent-%COMP%] {\n  font-size: 25px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  display: block;\n}\n\n.left-header-text-friends-code[_ngcontent-%COMP%] {\n  font-size: 12px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  display: block;\n}\n\n.left-header-friend-request-text[_ngcontent-%COMP%] {\n  font-size: 20px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  display: block;\n}\n\n.left-buttons-menu-ico[_ngcontent-%COMP%] {\n  width: 30px;\n}\n\n.remove-friend-alert[_ngcontent-%COMP%] {\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  top: 25%;\n  position: absolute;\n  z-index: 1000;\n  height: 250px;\n  width: 300px;\n}\n\n@media (max-width: 576px) {\n  [_nghost-%COMP%]    > .container[_ngcontent-%COMP%] {\n    padding-top: 0;\n    padding-bottom: 0;\n  }\n\n  .chat-box-left[_ngcontent-%COMP%] {\n    border-right: 0;\n  }\n\n  .left-header-text-user[_ngcontent-%COMP%] {\n    font-size: 25px;\n  }\n\n}\n\n@media (max-width: 768px) {\n  .left-header-text-user[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLE9BQU87RUFDUCxRQUFRO0VBQ1Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0NBQWdDO0VBQ2hDLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFFRSxzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIseUNBQXlDO0VBQ3pDLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLDJDQUEyQztFQUMzQyxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdEQUFnRDtFQUNoRCwyQ0FBMkM7RUFDM0Msa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWiwrQkFBK0I7RUFDL0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFdBQVc7O0FBRWI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBR0E7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsT0FBTztFQUNQLFFBQVE7RUFDUixjQUFjO0VBQ2QsUUFBUTtFQUNSLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFO0lBQ0UsY0FBYztJQUNkLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztBQUVGOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub3RpZmljYXRpb24sIC5ub3RpZmljYXRpb24taGlkZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgOTQsIDYsIDAuNzIpO1xuICB0cmFuc2l0aW9uOiBoZWlnaHQgLjJzO1xufVxuXG4ubm90aWZpY2F0aW9uLWhpZGUge1xuICBoZWlnaHQ6IDA7XG59XG5cbi5jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogMiU7XG4gIHBhZGRpbmctYm90dG9tOiAyJTtcbn1cblxuLmJsdXItY29udGFpbmVyIHtcbiAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgLW1vei1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgLW8tZmlsdGVyOiBibHVyKDVweCk7XG4gIC1tcy1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgZmlsdGVyOiBibHVyKDVweCk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG59XG5cbi5maWxsIHtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubWVzc2FnZXMtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi5tZXNzYWdlcy1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLCAuaW5wdXQtbWVzc2FnZTo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNXB4O1xufVxuXG4ubWVzc2FnZXMtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10cmFjaywgLmlucHV0LW1lc3NhZ2U6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbn1cblxuLm1lc3NhZ2VzLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIsIC5pbnB1dC1tZXNzYWdlOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICNCOUU0RkY7XG59XG5cbi5tZXNzYWdlcy1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyLCAuaW5wdXQtbWVzc2FnZTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMDA5OEU4O1xufVxuXG4uc2VuZC1tZXNzYWdlLXRleHRhcmVhIHtcbiAgcmVzaXplOiBub25lO1xuICBib3JkZXItY29sb3I6ICNGQkZCRkI7XG59XG5cbi5jaGF0LWN1cnJlbnQtcGVyc29uLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmNoYXQtY3VycmVudC1wZXJzb24tY29udGFpbmVyIGltZyB7XG4gIG1heC13aWR0aDogMzVweFxufVxuXG4uY2hhdC1jdXJyZW50LXBlcnNvbi10ZXh0IHtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4uaW5wdXQtbWVzc2FnZSB7XG4gIGhlaWdodDogMTAwJTtcbiAgcmVzaXplOiBub25lO1xufVxuXG4uaW5wdXQtbWVzc2FnZTpmb2N1cywgLmlucHV0LWZyaWVuZC1jb2RlOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDIwNywgMjU1LCAwLjE2KTtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAyMDcsIDI1NSwgMC4yKTtcbn1cblxuLnNlbmQtYnV0dG9uIHtcbiAgYm9yZGVyLWNvbG9yOiAjRkJGQkZCO1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5zZW5kLWJ1dHRvbjpmb2N1cywgLnNlbmQtZnJpZW5kLXJlcXVlc3QtYnV0dG9uOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4ubmF2LWJ1dHRvbjpob3ZlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMjA3LCAyNTUsIDAuMTYpO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDIwNywgMjU1LCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiAyNSU7XG4gIHBhZGRpbmc6IDJweDtcbn1cblxuLmJhY2stYnV0dG9uIHtcbiAgd2lkdGg6IDUwcHg7XG59XG5cbi5iYWNrLWJ1dHRvbjpob3ZlciB7XG4gIHBhZGRpbmc6IDJweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMjA3LCAyNTUsIDAuMTYpO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDIwNywgMjU1LCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5uYXYtYnV0dG9uLCAuYmFjay1idXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5pbnB1dC1mcmllbmQtY29kZSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNoYXQtYm94LWxlZnQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjNGM0YzQ7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG5cbi5jaGF0LWJveC1yaWdodCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNoYXQtYm94LWxlZnQtaGVhZGVyIHtcbiAgaGVpZ2h0OiAxMCU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzRjNGM0O1xufVxuXG4uY2hhdC1ib3gtbGVmdC1saXN0IHtcbiAgaGVpZ2h0OiA4MCU7XG5cbn1cblxuLmZyaWVuZHMtbGlzdC1ib3gge1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbn1cblxuLmZyaWVuZHMtbGlzdC1ib3g6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmNoYXQtYm94LWJ1dHRvbnMge1xuICBoZWlnaHQ6IDEwJTtcbn1cblxuLmxlZnQtaGVhZGVyLXRleHQtdXNlciB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5cbi5sZWZ0LWhlYWRlci10ZXh0LWZyaWVuZHMtY29kZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubGVmdC1oZWFkZXItZnJpZW5kLXJlcXVlc3QtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubGVmdC1idXR0b25zLW1lbnUtaWNvIHtcbiAgd2lkdGg6IDMwcHg7XG59XG5cbi5yZW1vdmUtZnJpZW5kLWFsZXJ0IHtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0b3A6IDI1JTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMDAwO1xuICBoZWlnaHQ6IDI1MHB4O1xuICB3aWR0aDogMzAwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICA6aG9zdCA+IC5jb250YWluZXIge1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICB9XG5cbiAgLmNoYXQtYm94LWxlZnQge1xuICAgIGJvcmRlci1yaWdodDogMDtcbiAgfVxuXG4gIC5sZWZ0LWhlYWRlci10ZXh0LXVzZXIge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgfVxuXG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubGVmdC1oZWFkZXItdGV4dC11c2VyIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbn1cblxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dashboard',
          templateUrl: './dashboard.component.html',
          styleUrls: ['./dashboard.component.css']
        }]
      }], function () {
        return [{
          type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _shared_services_chat_message_service__WEBPACK_IMPORTED_MODULE_6__["ChatMessageService"]
        }, {
          type: _shared_services_ws_messages_service__WEBPACK_IMPORTED_MODULE_7__["WsMessagesService"]
        }, {
          type: _shared_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]
        }, {
          type: _shared_services_friend_request_service__WEBPACK_IMPORTED_MODULE_9__["FriendRequestService"]
        }, {
          type: _shared_services_chat_profile_service__WEBPACK_IMPORTED_MODULE_10__["ChatProfileService"]
        }, {
          type: _shared_services_friend_chat_service__WEBPACK_IMPORTED_MODULE_11__["FriendChatService"]
        }];
      }, {
        inputMessage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['inputMessage']
        }],
        friendCode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['friendCode']
        }],
        notification: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['notification']
        }],
        messageContainer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['messageContainer']
        }],
        appMessage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['appMessage']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/modules/dashboard/dashboard.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/modules/dashboard/dashboard.module.ts ***!
    \*******************************************************/

  /*! exports provided: DashboardModule */

  /***/
  function srcAppModulesDashboardDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
      return DashboardModule;
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


    var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./dashboard.component */
    "./src/app/modules/dashboard/dashboard.component.ts");
    /* harmony import */


    var _chat_message_chat_message_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./chat-message/chat-message.component */
    "./src/app/modules/dashboard/chat-message/chat-message.component.ts");
    /* harmony import */


    var _friend_chat_friend_chat_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./friend-chat/friend-chat.component */
    "./src/app/modules/dashboard/friend-chat/friend-chat.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _received_friend_request_received_friend_request_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./received-friend-request/received-friend-request.component */
    "./src/app/modules/dashboard/received-friend-request/received-friend-request.component.ts");
    /* harmony import */


    var _settings_settings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./settings/settings.component */
    "./src/app/modules/dashboard/settings/settings.component.ts");
    /* harmony import */


    var _settings_account_account_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./settings/account/account.component */
    "./src/app/modules/dashboard/settings/account/account.component.ts");
    /* harmony import */


    var _settings_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./settings/change-password/change-password.component */
    "./src/app/modules/dashboard/settings/change-password/change-password.component.ts");
    /* harmony import */


    var _new_friend_request_new_friend_request_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./new-friend-request/new-friend-request.component */
    "./src/app/modules/dashboard/new-friend-request/new-friend-request.component.ts");

    var DashboardModule = function DashboardModule() {
      _classCallCheck(this, DashboardModule);
    };

    DashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DashboardModule
    });
    DashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DashboardModule_Factory(t) {
        return new (t || DashboardModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardModule, {
        declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"], _chat_message_chat_message_component__WEBPACK_IMPORTED_MODULE_3__["ChatMessageComponent"], _friend_chat_friend_chat_component__WEBPACK_IMPORTED_MODULE_4__["FriendChatComponent"], _received_friend_request_received_friend_request_component__WEBPACK_IMPORTED_MODULE_7__["ReceivedFriendRequestComponent"], _new_friend_request_new_friend_request_component__WEBPACK_IMPORTED_MODULE_11__["NewFriendRequestComponent"], _settings_settings_component__WEBPACK_IMPORTED_MODULE_8__["SettingsComponent"], _settings_account_account_component__WEBPACK_IMPORTED_MODULE_9__["AccountComponent"], _settings_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_10__["ChangePasswordComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"], _chat_message_chat_message_component__WEBPACK_IMPORTED_MODULE_3__["ChatMessageComponent"], _friend_chat_friend_chat_component__WEBPACK_IMPORTED_MODULE_4__["FriendChatComponent"], _received_friend_request_received_friend_request_component__WEBPACK_IMPORTED_MODULE_7__["ReceivedFriendRequestComponent"], _new_friend_request_new_friend_request_component__WEBPACK_IMPORTED_MODULE_11__["NewFriendRequestComponent"], _settings_settings_component__WEBPACK_IMPORTED_MODULE_8__["SettingsComponent"], _settings_account_account_component__WEBPACK_IMPORTED_MODULE_9__["AccountComponent"], _settings_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_10__["ChangePasswordComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/dashboard/friend-chat/friend-chat.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/modules/dashboard/friend-chat/friend-chat.component.ts ***!
    \************************************************************************/

  /*! exports provided: FriendChatComponent */

  /***/
  function srcAppModulesDashboardFriendChatFriendChatComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FriendChatComponent", function () {
      return FriendChatComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _shared_enum_chat_messages_status__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../shared/enum/chat-messages-status */
    "./src/app/shared/enum/chat-messages-status.ts");
    /* harmony import */


    var _shared_services_chat_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../shared/services/chat-message.service */
    "./src/app/shared/services/chat-message.service.ts");
    /* harmony import */


    var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../shared/services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../shared/services/user.service */
    "./src/app/shared/services/user.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function FriendChatComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 11);
      }
    }

    function FriendChatComponent_span_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r89.lastMessage.content, " ");
      }
    }

    function FriendChatComponent_ng_template_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No messages.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0, a1) {
      return {
        "active-chat": a0,
        "inactive-chat": a1
      };
    };

    var FriendChatComponent =
    /*#__PURE__*/
    function () {
      function FriendChatComponent(messageService, authService, userService) {
        _classCallCheck(this, FriendChatComponent);

        this.messageService = messageService;
        this.authService = authService;
        this.userService = userService;
        this.lastMessage = {};
        this.recipientUser = {};
      }

      _createClass(FriendChatComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.getLastMessage();
          this.isNewMessage.subscribe(function (newMessage) {
            if (_this12.friendChat.id === newMessage.friendChat || _this12.friendChat.chatWith === newMessage.friendChat) {
              _this12.lastMessage = newMessage;
            }
          });
          this.onClickComponent.subscribe(function (friendChatId) {
            _this12.currentFriendChat = friendChatId;

            _this12.markMessageAsDelivered();
          });
          this.getRecipientUserInformation();
        }
      }, {
        key: "getRecipientUserInformation",
        value: function getRecipientUserInformation() {
          var _this13 = this;

          this.userService.getUser(this.friendChat.recipient.userId).subscribe(function (recipient) {
            _this13.recipientUser = recipient;
          });
        }
      }, {
        key: "showNotification",
        value: function showNotification() {
          if (this.currentFriendChat === this.friendChat.id) {
            return false;
          } else {
            return this.lastMessage.status === _shared_enum_chat_messages_status__WEBPACK_IMPORTED_MODULE_2__["ChatMessagesStatus"].received && this.lastMessage.recipient === this.authService.currentUserValue.id;
          }
        }
      }, {
        key: "getLastMessage",
        value: function getLastMessage() {
          var _this14 = this;

          this.messageService.getLastMessages(1, this.friendChat.id, this.friendChat.chatWith).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (result) {
            if (result.length !== 0) {
              _this14.lastMessage = result[0];
            }
          });
        }
      }, {
        key: "markMessageAsDelivered",
        value: function markMessageAsDelivered() {
          var _this15 = this;

          if (this.friendChat.id === this.currentFriendChat) {
            this.messageService.markMessageAsDelivered(this.friendChat.chatWith).subscribe(function (response) {
              _this15.getLastMessage();
            });
          }
        }
      }]);

      return FriendChatComponent;
    }();

    FriendChatComponent.ɵfac = function FriendChatComponent_Factory(t) {
      return new (t || FriendChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_chat_message_service__WEBPACK_IMPORTED_MODULE_3__["ChatMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]));
    };

    FriendChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FriendChatComponent,
      selectors: [["app-friend-chat"]],
      inputs: {
        isNewMessage: "isNewMessage",
        onClickComponent: "onClickComponent",
        friendChat: ["conversation", "friendChat"]
      },
      decls: 15,
      vars: 12,
      consts: [[1, "row", "chat", 3, "ngClass"], ["class", "chat-notification", 4, "ngIf"], [1, "col-2", "text-center", 2, "position", "relative", "left", "5px"], ["src", "/assets/img/user_avatar.svg", "alt", "", 1, "friend-ico"], [1, "col-7"], [1, "row"], [1, "col-12", 2, "font-size", "22px"], [1, "col-12"], ["class", "last-message", 4, "ngIf", "ngIfElse"], ["noMessage", ""], [1, "col-lg-3", "text-right", 2, "font-size", "13px"], [1, "chat-notification"], [1, "last-message"]],
      template: function FriendChatComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FriendChatComponent_div_1_Template, 1, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FriendChatComponent_span_9_Template, 2, 1, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FriendChatComponent_ng_template_10_Template, 3, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c0, ctx.friendChat.id === ctx.currentFriendChat, ctx.friendChat.id !== ctx.currentFriendChat));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showNotification());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.recipientUser.firstName + " " + ctx.recipientUser.lastName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lastMessage.content)("ngIfElse", _r90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 6, ctx.lastMessage.time, "mediumDate"), " ");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]],
      styles: [".chat[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #c4c4c4;\n  padding: 5px;\n  position: relative;\n  cursor: pointer;\n}\n\n.chat[_ngcontent-%COMP%]:hover {\n  border-left: 1px solid rgba(0, 207, 255, 0.16);\n  box-shadow: 5px 0 1px -5px rgba(0, 207, 255, 0.2);\n}\n\n.inactive-chat[_ngcontent-%COMP%] {\n  background: #ffffff;\n}\n\n.active-chat[_ngcontent-%COMP%] {\n  background: #ebebeb;\n}\n\n.chat-notification[_ngcontent-%COMP%] {\n  background-color: #0DEBFF;\n  width: 5px;\n  height: 100%;\n  position: absolute;\n  margin-top: -5px;\n  margin-left: -5px;\n}\n\n.friend-ico[_ngcontent-%COMP%] {\n  max-width: 35px;\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin: auto;\n  top: 0;\n  bottom: 0;\n}\n\n.last-message[_ngcontent-%COMP%] {\n  font-size: 13px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvZnJpZW5kLWNoYXQvZnJpZW5kLWNoYXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFnQztFQUNoQyxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw4Q0FBOEM7RUFDOUMsaURBQWlEO0FBQ25EOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxRQUFRO0VBQ1IsWUFBWTtFQUNaLE1BQU07RUFDTixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGFzaGJvYXJkL2ZyaWVuZC1jaGF0L2ZyaWVuZC1jaGF0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhdCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzRjNGM0O1xuICBwYWRkaW5nOiA1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2hhdDpob3ZlciB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgwLCAyMDcsIDI1NSwgMC4xNik7XG4gIGJveC1zaGFkb3c6IDVweCAwIDFweCAtNXB4IHJnYmEoMCwgMjA3LCAyNTUsIDAuMik7XG59XG5cbi5pbmFjdGl2ZS1jaGF0IHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbn1cblxuLmFjdGl2ZS1jaGF0IHtcbiAgYmFja2dyb3VuZDogI2ViZWJlYjtcbn1cblxuLmNoYXQtbm90aWZpY2F0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBERUJGRjtcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IC01cHg7XG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xufVxuXG4uZnJpZW5kLWljbyB7XG4gIG1heC13aWR0aDogMzVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiBhdXRvO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbn1cblxuLmxhc3QtbWVzc2FnZSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FriendChatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-friend-chat',
          templateUrl: './friend-chat.component.html',
          styleUrls: ['./friend-chat.component.css']
        }]
      }], function () {
        return [{
          type: _shared_services_chat_message_service__WEBPACK_IMPORTED_MODULE_3__["ChatMessageService"]
        }, {
          type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: _shared_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
        }];
      }, {
        isNewMessage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['isNewMessage']
        }],
        onClickComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['onClickComponent']
        }],
        friendChat: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['conversation']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/modules/dashboard/new-friend-request/new-friend-request.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/modules/dashboard/new-friend-request/new-friend-request.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: NewFriendRequestComponent */

  /***/
  function srcAppModulesDashboardNewFriendRequestNewFriendRequestComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewFriendRequestComponent", function () {
      return NewFriendRequestComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_services_friend_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../shared/services/friend-request.service */
    "./src/app/shared/services/friend-request.service.ts");
    /* harmony import */


    var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../shared/services/user.service */
    "./src/app/shared/services/user.service.ts");

    var NewFriendRequestComponent =
    /*#__PURE__*/
    function () {
      function NewFriendRequestComponent(friendRequestService, userService) {
        _classCallCheck(this, NewFriendRequestComponent);

        this.friendRequestService = friendRequestService;
        this.userService = userService;
        this.recipientUser = {};
        this.friendRequest = null;
        this.friendsRequestHasDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(NewFriendRequestComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this16 = this;

          this.userService.getUser(this.friendRequest.recipient.userId).subscribe(function (recipient) {
            _this16.recipientUser = recipient;
          });
        }
      }, {
        key: "cancelFriendRequest",
        value: function cancelFriendRequest() {
          var _this17 = this;

          this.friendRequestService.cancelSentFriendRequest(this.friendRequest.id).subscribe(function (result) {
            _this17.friendsRequestHasDeleted.emit('Friend request deleted.');
          });
        }
      }]);

      return NewFriendRequestComponent;
    }();

    NewFriendRequestComponent.ɵfac = function NewFriendRequestComponent_Factory(t) {
      return new (t || NewFriendRequestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_friend_request_service__WEBPACK_IMPORTED_MODULE_1__["FriendRequestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]));
    };

    NewFriendRequestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NewFriendRequestComponent,
      selectors: [["app-new-friend-request"]],
      inputs: {
        friendRequest: "friendRequest"
      },
      outputs: {
        friendsRequestHasDeleted: "friendsRequestHasDeleted"
      },
      decls: 10,
      vars: 1,
      consts: [[1, "row", "text-left", "row-container"], [1, "col-8"], [1, "col-4", "text-left"], ["type", "image", "src", "/assets/img/reject.svg", 1, "reject-ico", 3, "click"]],
      template: function NewFriendRequestComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "You sent friends request to");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewFriendRequestComponent_Template_input_click_9_listener() {
            return ctx.cancelFriendRequest();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.recipientUser.firstName + " " + ctx.recipientUser.lastName);
        }
      },
      styles: [".row-container[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #c4c4c4;\n}\n\n.reject-ico[_ngcontent-%COMP%] {\n  width: 40px;\n}\n\n.reject-ico[_ngcontent-%COMP%]:hover {\n  border-bottom: 1px solid rgba(0, 207, 255, 0.16);\n  box-shadow: 0 0 10px rgba(0, 207, 255, 0.2);\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvbmV3LWZyaWVuZC1yZXF1ZXN0L25ldy1mcmllbmQtcmVxdWVzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0RBQWdEO0VBQ2hELDJDQUEyQztFQUMzQyxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2Rhc2hib2FyZC9uZXctZnJpZW5kLXJlcXVlc3QvbmV3LWZyaWVuZC1yZXF1ZXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93LWNvbnRhaW5lciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzRjNGM0O1xufVxuXG4ucmVqZWN0LWljbyB7XG4gIHdpZHRoOiA0MHB4O1xufVxuXG4ucmVqZWN0LWljbzpob3ZlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDIwNywgMjU1LCAwLjE2KTtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAyMDcsIDI1NSwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewFriendRequestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-new-friend-request',
          templateUrl: './new-friend-request.component.html',
          styleUrls: ['./new-friend-request.component.css']
        }]
      }], function () {
        return [{
          type: _shared_services_friend_request_service__WEBPACK_IMPORTED_MODULE_1__["FriendRequestService"]
        }, {
          type: _shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }];
      }, {
        friendRequest: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['friendRequest']
        }],
        friendsRequestHasDeleted: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/modules/dashboard/received-friend-request/received-friend-request.component.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/modules/dashboard/received-friend-request/received-friend-request.component.ts ***!
    \************************************************************************************************/

  /*! exports provided: ReceivedFriendRequestComponent */

  /***/
  function srcAppModulesDashboardReceivedFriendRequestReceivedFriendRequestComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReceivedFriendRequestComponent", function () {
      return ReceivedFriendRequestComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_services_friend_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../shared/services/friend-request.service */
    "./src/app/shared/services/friend-request.service.ts");
    /* harmony import */


    var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../shared/services/user.service */
    "./src/app/shared/services/user.service.ts");

    var ReceivedFriendRequestComponent =
    /*#__PURE__*/
    function () {
      function ReceivedFriendRequestComponent(friendService, userService) {
        _classCallCheck(this, ReceivedFriendRequestComponent);

        this.friendService = friendService;
        this.userService = userService;
        this.senderUser = {};
        this.friendsRequestReply = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(ReceivedFriendRequestComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this18 = this;

          this.userService.getUser(this.friendRequest.sender.userId).subscribe(function (sender) {
            _this18.senderUser = sender;
          });
        }
      }, {
        key: "acceptFriendsRequest",
        value: function acceptFriendsRequest() {
          var _this19 = this;

          this.friendService.replyToFriendsRequest(this.friendRequest.id, true).subscribe(function (result) {
            _this19.friendsRequestReply.emit('Friends request has been accepted');
          });
        }
      }, {
        key: "rejectFriendsRequest",
        value: function rejectFriendsRequest() {
          var _this20 = this;

          this.friendService.replyToFriendsRequest(this.friendRequest.id, false).subscribe(function (result) {
            _this20.friendsRequestReply.emit('Friends request has been rejected');
          });
        }
      }]);

      return ReceivedFriendRequestComponent;
    }();

    ReceivedFriendRequestComponent.ɵfac = function ReceivedFriendRequestComponent_Factory(t) {
      return new (t || ReceivedFriendRequestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_friend_request_service__WEBPACK_IMPORTED_MODULE_1__["FriendRequestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]));
    };

    ReceivedFriendRequestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ReceivedFriendRequestComponent,
      selectors: [["app-received-friend-request"]],
      inputs: {
        friendRequest: "friendRequest"
      },
      outputs: {
        friendsRequestReply: "friendsRequestReply"
      },
      decls: 17,
      vars: 1,
      consts: [[1, "row"], [1, "col-sm-12", 2, "border-bottom", "1px solid #c4c4c4"], [1, "row", 2, "padding", "5px"], [1, "col-2", "m-auto", "pl-2"], ["src", "/assets/img/user_avatar.svg", "alt", "", 2, "max-width", "35px"], [1, "col-10"], [1, "col-12", 2, "font-size", "15px"], [1, "col-12", "pt-2", 2, "font-size", "13px"], [1, "col-6", "text-center"], ["type", "image", "src", "/assets/img/accept.svg", 1, "action-ico", 3, "click"], [1, "row-6", "text-center"], ["type", "image", "src", "/assets/img/reject.svg", 1, "action-ico", 3, "click"]],
      template: function ReceivedFriendRequestComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " sent you a friend request. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReceivedFriendRequestComponent_Template_input_click_14_listener() {
            return ctx.acceptFriendsRequest();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReceivedFriendRequestComponent_Template_input_click_16_listener() {
            return ctx.rejectFriendsRequest();
          });

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
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.senderUser.firstName + " " + ctx.senderUser.lastName);
        }
      },
      styles: [".action-ico[_ngcontent-%COMP%] {\n  width: 40px;\n}\n\n.action-ico[_ngcontent-%COMP%]:hover{\n  border-bottom: 1px solid rgba(0, 207, 255, 0.16);\n  box-shadow: 0 0 10px rgba(0, 207, 255, 0.2);\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvcmVjZWl2ZWQtZnJpZW5kLXJlcXVlc3QvcmVjZWl2ZWQtZnJpZW5kLXJlcXVlc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdEQUFnRDtFQUNoRCwyQ0FBMkM7RUFDM0Msa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvcmVjZWl2ZWQtZnJpZW5kLXJlcXVlc3QvcmVjZWl2ZWQtZnJpZW5kLXJlcXVlc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3Rpb24taWNvIHtcbiAgd2lkdGg6IDQwcHg7XG59XG5cbi5hY3Rpb24taWNvOmhvdmVye1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAyMDcsIDI1NSwgMC4xNik7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMjA3LCAyNTUsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReceivedFriendRequestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-received-friend-request',
          templateUrl: './received-friend-request.component.html',
          styleUrls: ['./received-friend-request.component.css']
        }]
      }], function () {
        return [{
          type: _shared_services_friend_request_service__WEBPACK_IMPORTED_MODULE_1__["FriendRequestService"]
        }, {
          type: _shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }];
      }, {
        friendRequest: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['friendRequest']
        }],
        friendsRequestReply: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/modules/dashboard/settings/account/account.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/modules/dashboard/settings/account/account.component.ts ***!
    \*************************************************************************/

  /*! exports provided: AccountComponent */

  /***/
  function srcAppModulesDashboardSettingsAccountAccountComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountComponent", function () {
      return AccountComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../shared/services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../shared/services/user.service */
    "./src/app/shared/services/user.service.ts");
    /* harmony import */


    var _shared_services_chat_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../shared/services/chat-profile.service */
    "./src/app/shared/services/chat-profile.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["firstName"];
    var _c1 = ["lastName"];

    function AccountComponent_small_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r99.firstNameValidationError, " ");
      }
    }

    function AccountComponent_small_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r101.lastNameValidationError, " ");
      }
    }

    var AccountComponent =
    /*#__PURE__*/
    function () {
      function AccountComponent(authService, accountService, chatProfileService) {
        _classCallCheck(this, AccountComponent);

        this.authService = authService;
        this.accountService = accountService;
        this.chatProfileService = chatProfileService;
        this.firstNameValidationError = null;
        this.lastNameValidationError = null;
        this.user = {};
        this.chatProfile = {};
        this.onChangeAccountInformationRequest = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(AccountComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this21 = this;

          this.accountService.getUser(this.authService.currentUserValue.id).subscribe(function (result) {
            _this21.user = result;
          });
          this.chatProfileService.getChatProfile(this.authService.currentUserValue.id).subscribe(function (result) {
            _this21.chatProfile = result;
          });
        }
      }, {
        key: "generateNewFriendsCode",
        value: function generateNewFriendsCode() {
          var _this22 = this;

          this.chatProfileService.generateNewFriendsCode(this.authService.currentUserValue.id).subscribe(function (result) {
            _this22.chatProfile = result;
          });
        }
      }, {
        key: "saveAccountsChanges",
        value: function saveAccountsChanges() {
          var _this23 = this;

          this.accountService.modifyUserInformation(this.authService.currentUserValue.id, {
            firstName: this.firstName.nativeElement.value,
            lastName: this.lastName.nativeElement.value
          }).subscribe(function (result) {
            _this23.firstName.nativeElement.value = result.firstName;
            _this23.lastName.nativeElement.value = result.lastName;
            _this23.firstNameValidationError = null;
            _this23.lastNameValidationError = null;

            _this23.onChangeAccountInformationRequest.emit('Information successfully updated');
          }, function (errorObject) {
            if (errorObject.status === 400) {
              var violationsErrors = errorObject.error.violations;

              if (violationsErrors) {
                violationsErrors.forEach(function (error) {
                  if (error.field === 'firstName') {
                    _this23.firstNameValidationError = error.message;
                  }

                  if (error.field === 'lastName') {
                    _this23.lastNameValidationError = error.message;
                  }
                });
              }
            }
          });
        }
      }]);

      return AccountComponent;
    }();

    AccountComponent.ɵfac = function AccountComponent_Factory(t) {
      return new (t || AccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_chat_profile_service__WEBPACK_IMPORTED_MODULE_3__["ChatProfileService"]));
    };

    AccountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AccountComponent,
      selectors: [["app-account"]],
      viewQuery: function AccountComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.firstName = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.lastName = _t.first);
        }
      },
      outputs: {
        onChangeAccountInformationRequest: "onChangeAccountInformationRequest"
      },
      decls: 29,
      vars: 6,
      consts: [["id", "accountSettings", "role", "tabpanel", "aria-labelledby", "account-tab", 1, "tab-pane", "fade", "show", "active"], [1, "form-group", "row"], ["for", "staticLogin", 1, "col-sm-3", "col-form-label"], [1, "col-sm-9"], ["type", "text", "readonly", "", "id", "staticLogin", 1, "form-control-plaintext", "no-input-border", 3, "value"], ["for", "staticEmail", 1, "col-sm-3", "col-form-label"], ["type", "text", "readonly", "", "id", "staticEmail", 1, "form-control-plaintext", "no-input-border", 3, "value"], ["for", "firstName", 1, "col-sm-3", "col-form-label"], ["type", "text", "id", "firstName", "placeholder", "First name", 1, "form-control", "account-info-input", 3, "value"], ["firstName", ""], ["class", "form-text text-danger", 4, "ngIf"], ["for", "lastName", 1, "col-sm-3", "col-form-label"], ["type", "text", "id", "lastName", "placeholder", "Last name", 1, "form-control", "account-info-input", 3, "value"], ["lastName", ""], [1, "lead", "text-center"], [1, "btn", "btn-primary", 3, "click"], [1, "form-text", "text-danger"]],
      template: function AccountComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "First name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AccountComponent_small_18_Template, 2, 1, "small", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Last name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 12, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AccountComponent_small_25_Template, 2, 1, "small", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountComponent_Template_a_click_27_listener() {
            return ctx.saveAccountsChanges();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Save changes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.user.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.user.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.user.firstName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.firstNameValidationError);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.user.lastName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lastNameValidationError);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      styles: [".no-input-border[_ngcontent-%COMP%] {\n  outline: none;\n}\n\n.account-info-input[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n  border: 1px solid rgba(0, 207, 255, 0.82);\n  box-shadow: 0 0 10px rgba(0, 207, 255, 0.31);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvc2V0dGluZ3MvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIseUNBQXlDO0VBQ3pDLDRDQUE0QztBQUM5QyIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGFzaGJvYXJkL3NldHRpbmdzL2FjY291bnQvYWNjb3VudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vLWlucHV0LWJvcmRlciB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5hY2NvdW50LWluZm8taW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMjA3LCAyNTUsIDAuODIpO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDIwNywgMjU1LCAwLjMxKTtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-account',
          templateUrl: './account.component.html',
          styleUrls: ['./account.component.css']
        }]
      }], function () {
        return [{
          type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }, {
          type: _shared_services_chat_profile_service__WEBPACK_IMPORTED_MODULE_3__["ChatProfileService"]
        }];
      }, {
        firstName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['firstName']
        }],
        lastName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['lastName']
        }],
        onChangeAccountInformationRequest: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/modules/dashboard/settings/change-password/change-password.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/modules/dashboard/settings/change-password/change-password.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: ChangePasswordComponent */

  /***/
  function srcAppModulesDashboardSettingsChangePasswordChangePasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function () {
      return ChangePasswordComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../shared/services/user.service */
    "./src/app/shared/services/user.service.ts");
    /* harmony import */


    var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../shared/services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ChangePasswordComponent_div_6_small_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Pass your current password. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ChangePasswordComponent_div_6_small_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Current password can not be empty. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ChangePasswordComponent_div_6_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "small", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r107.currentPassword.getError("violations"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function ChangePasswordComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChangePasswordComponent_div_6_small_1_Template, 2, 0, "small", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChangePasswordComponent_div_6_small_2_Template, 2, 0, "small", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChangePasswordComponent_div_6_div_3_Template, 2, 1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r102.currentPassword.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r102.currentPassword.errors.minlength);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r102.currentPassword.getError("violations"));
      }
    }

    function ChangePasswordComponent_div_11_small_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Pass your new password. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ChangePasswordComponent_div_11_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "small", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r109.newPassword.getError("violations"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function ChangePasswordComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChangePasswordComponent_div_11_small_1_Template, 2, 0, "small", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChangePasswordComponent_div_11_div_2_Template, 2, 1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r103.newPassword.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r103.newPassword.getError("violations"));
      }
    }

    function ChangePasswordComponent_div_16_small_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Confirm new password. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ChangePasswordComponent_div_16_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "small", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r111.confirmNewPassword.getError("violations"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function ChangePasswordComponent_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChangePasswordComponent_div_16_small_1_Template, 2, 0, "small", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChangePasswordComponent_div_16_div_2_Template, 2, 1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r104.confirmNewPassword.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r104.confirmNewPassword.getError("violations"));
      }
    }

    var ChangePasswordComponent =
    /*#__PURE__*/
    function () {
      function ChangePasswordComponent(accountService, authService) {
        _classCallCheck(this, ChangePasswordComponent);

        this.accountService = accountService;
        this.authService = authService;
        this.onChangePasswordRequest = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(ChangePasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initLoginForm();
        }
      }, {
        key: "saveNewPassword",
        value: function saveNewPassword() {
          var _this24 = this;

          if (this.changePasswordForm.valid) {
            if (this.newPassword.value !== this.confirmNewPassword.value) {
              this.newPassword.reset();
              this.confirmNewPassword.setErrors({
                violations: 'Password not match'
              });
              return;
            }

            this.accountService.changePassword(this.authService.currentUserValue.id, {
              currentPassword: this.currentPassword.value,
              newPassword: this.newPassword.value
            }).subscribe(function (result) {
              _this24.onChangePasswordRequest.emit('Password changed');

              _this24.currentPassword.reset();

              _this24.confirmNewPassword.reset();

              _this24.newPassword.reset();
            }, function (errorObject) {
              if (errorObject.status === 400) {
                var violationsErrors = errorObject.error.violations;

                if (violationsErrors) {
                  violationsErrors.forEach(function (error) {
                    if (error.field === 'newPassword') {
                      _this24.newPassword.setValue('');

                      _this24.confirmNewPassword.reset();

                      _this24.newPassword.setErrors({
                        violations: error.message
                      });
                    }
                  });
                }

                var messageDetailsError = errorObject.error.detail;

                if (messageDetailsError) {
                  _this24.currentPassword.setValue('');

                  _this24.currentPassword.setErrors({
                    violations: messageDetailsError
                  });

                  _this24.newPassword.reset();

                  _this24.confirmNewPassword.reset();
                }
              }
            });
          }
        }
      }, {
        key: "initLoginForm",
        value: function initLoginForm() {
          this.changePasswordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            currentPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            confirmNewPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
          });
        }
      }, {
        key: "currentPassword",
        get: function get() {
          return this.changePasswordForm.get('currentPassword');
        }
      }, {
        key: "newPassword",
        get: function get() {
          return this.changePasswordForm.get('newPassword');
        }
      }, {
        key: "confirmNewPassword",
        get: function get() {
          return this.changePasswordForm.get('confirmNewPassword');
        }
      }]);

      return ChangePasswordComponent;
    }();

    ChangePasswordComponent.ɵfac = function ChangePasswordComponent_Factory(t) {
      return new (t || ChangePasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]));
    };

    ChangePasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChangePasswordComponent,
      selectors: [["app-change-password"]],
      outputs: {
        onChangePasswordRequest: "onChangePasswordRequest"
      },
      decls: 19,
      vars: 4,
      consts: [["id", "passwordSettings", "role", "tabpanel", "aria-labelledby", "change-password-tab", 1, "tab-pane", "fade"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "currentPassword"], ["type", "password", "id", "currentPassword", "formControlName", "currentPassword", "placeholder", "Current password", 1, "form-control", "password-input"], [4, "ngIf"], ["for", "newPassword"], ["type", "password", "id", "newPassword", "formControlName", "newPassword", "placeholder", "New password", 1, "form-control", "password-input"], ["for", "confirmNewPassword"], ["type", "password", "id", "confirmNewPassword", "formControlName", "confirmNewPassword", "placeholder", "Confirm new password", 1, "form-control", "password-input"], [1, "lead", "text-center"], ["type", "submit", "value", "Save new password", 1, "btn", "btn-primary"], ["id", "info-current-password", "class", "form-text text-danger password-input", 4, "ngIf"], ["class", "form-text text-danger", 4, "ngIf"], ["id", "info-current-password", 1, "form-text", "text-danger", "password-input"], [1, "form-text", "text-danger"], [1, "form-text", "text-danger", 3, "innerHTML"], ["id", "info-new-password", "class", "form-text text-danger", 4, "ngIf"], ["id", "info-new-password", 1, "form-text", "text-danger"], ["id", "info-confirm-password", "class", "form-text text-danger", 4, "ngIf"], ["id", "info-confirm-password", 1, "form-text", "text-danger"]],
      template: function ChangePasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ChangePasswordComponent_Template_form_ngSubmit_1_listener() {
            return ctx.saveNewPassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Current password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ChangePasswordComponent_div_6_Template, 4, 3, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "New password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ChangePasswordComponent_div_11_Template, 3, 2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Confirm new password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ChangePasswordComponent_div_16_Template, 3, 2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.changePasswordForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentPassword.invalid && (ctx.currentPassword.dirty || ctx.currentPassword.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newPassword.invalid && (ctx.newPassword.dirty || ctx.newPassword.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.confirmNewPassword.invalid && (ctx.confirmNewPassword.dirty || ctx.confirmNewPassword.touched));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      styles: [".password-input[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n  border: 1px solid rgba(0, 207, 255, 0.82);\n  box-shadow: 0 0 10px rgba(0, 207, 255, 0.31);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvc2V0dGluZ3MvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQXdCO0VBQ3hCLHlDQUF5QztFQUN6Qyw0Q0FBNEM7QUFDOUMiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2Rhc2hib2FyZC9zZXR0aW5ncy9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFzc3dvcmQtaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMjA3LCAyNTUsIDAuODIpO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDIwNywgMjU1LCAwLjMxKTtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangePasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-change-password',
          templateUrl: './change-password.component.html',
          styleUrls: ['./change-password.component.css']
        }]
      }], function () {
        return [{
          type: _shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }, {
          type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }];
      }, {
        onChangePasswordRequest: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/modules/dashboard/settings/settings.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/modules/dashboard/settings/settings.component.ts ***!
    \******************************************************************/

  /*! exports provided: SettingsComponent */

  /***/
  function srcAppModulesDashboardSettingsSettingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsComponent", function () {
      return SettingsComponent;
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


    var _account_account_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./account/account.component */
    "./src/app/modules/dashboard/settings/account/account.component.ts");
    /* harmony import */


    var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./change-password/change-password.component */
    "./src/app/modules/dashboard/settings/change-password/change-password.component.ts");

    function SettingsComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-account", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChangeAccountInformationRequest", function SettingsComponent_div_8_Template_app_account_onChangeAccountInformationRequest_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r95);

          var ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r94.onChangePasswordRequest($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SettingsComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-change-password", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChangePasswordRequest", function SettingsComponent_div_9_Template_app_change_password_onChangePasswordRequest_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r97);

          var ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r96.onChangePasswordRequest($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var SettingsComponent =
    /*#__PURE__*/
    function () {
      function SettingsComponent() {
        _classCallCheck(this, SettingsComponent);

        this.displayAccountSettings = true;
        this.displayPasswordSettings = false;
        this.onSettingsOperation = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(SettingsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "accountSettings",
        value: function accountSettings() {
          this.displayAccountSettings = true;
          this.displayPasswordSettings = false;
        }
      }, {
        key: "passwordSettings",
        value: function passwordSettings() {
          this.displayAccountSettings = false;
          this.displayPasswordSettings = true;
        }
      }, {
        key: "onChangePasswordRequest",
        value: function onChangePasswordRequest($event) {
          this.onSettingsOperation.emit($event);
        }
      }]);

      return SettingsComponent;
    }();

    SettingsComponent.ɵfac = function SettingsComponent_Factory(t) {
      return new (t || SettingsComponent)();
    };

    SettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SettingsComponent,
      selectors: [["app-settings"]],
      outputs: {
        onSettingsOperation: "onSettingsOperation"
      },
      decls: 10,
      vars: 2,
      consts: [[1, "home-container", "text-center"], [1, "cover-container", "d-flex", "h-100", "flex-column"], ["role", "main", 1, "inner", "cover"], ["role", "tablist", 1, "nav", "justify-content-center", 2, "background-color", "#ffffff"], [1, "nav-item"], ["href", "#accountSettings", "data-toggle", "tab", "role", "tab", 1, "nav-link", "active", 3, "click"], ["id", "myTabContent", 1, "tab-content", "text-left", 2, "margin-top", "15%"], [4, "ngIf"], [3, "onChangeAccountInformationRequest"], [3, "onChangePasswordRequest"]],
      template: function SettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_a_click_5_listener() {
            return ctx.accountSettings();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Account information");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SettingsComponent_div_8_Template, 2, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SettingsComponent_div_9_Template, 2, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayAccountSettings);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayPasswordSettings);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _account_account_component__WEBPACK_IMPORTED_MODULE_2__["AccountComponent"], _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_3__["ChangePasswordComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGFzaGJvYXJkL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-settings',
          templateUrl: './settings.component.html',
          styleUrls: ['./settings.component.css']
        }]
      }], function () {
        return [];
      }, {
        onSettingsOperation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/modules/home/home.component.ts":
  /*!************************************************!*\
    !*** ./src/app/modules/home/home.component.ts ***!
    \************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppModulesHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shared/services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(authService, router) {
        _classCallCheck(this, HomeComponent);

        this.authService = authService;
        this.router = router;

        if (this.authService.currentUserValue) {
          this.router.navigate(['/dashboard']);
        }
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 15,
      vars: 0,
      consts: [[1, "home-container", "text-center"], [1, "cover-container", "d-flex", "h-100", "p-3", "mx-auto", "flex-column"], [1, "masthead", "mb-auto"], [1, "inner"], [1, "nav", "nav-masthead", "justify-content-center"], ["role", "main", 1, "inner", "cover"], [1, "cover-heading"], [1, "lead", "secondary-headlight", "mt-4"], [1, "lead"], ["href", "#", "routerLink", "/login", 1, "btn", "btn-lg", "btn-secondary", "mt-5", "pl-5", "pr-5"], [1, "mastfoot", "mt-auto"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "header", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "nav", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "main", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Scorpio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Be close with your");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Sign in and start chatting!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "footer", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: ["a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:focus, a[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n\n.btn-secondary[_ngcontent-%COMP%], .btn-secondary[_ngcontent-%COMP%]:hover, .btn-secondary[_ngcontent-%COMP%]:focus {\n  color: #333;\n  text-shadow: none; \n  background-color: #fff;\n  border: .05rem solid #fff;\n}\n\n[_nghost-%COMP%] {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  color: #fff;\n  text-shadow: 0 .05rem .1rem rgba(0, 0, 0, .5);\n  box-shadow: inset 0 0 5rem rgba(0, 0, 0, .5);\n}\n.home-container[_ngcontent-%COMP%] {\n  background-image: url('home_cover.jpg');\n  width: 100%;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.cover-container[_ngcontent-%COMP%] {\n  max-width: 42em;\n}\n\n.masthead[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.masthead-brand[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.nav-masthead[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  padding: .25rem 0;\n  font-weight: 700;\n  color: rgba(255, 255, 255, .5);\n  background-color: transparent;\n  border-bottom: .25rem solid transparent;\n}\n.nav-masthead[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover, .nav-masthead[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:focus {\n  border-bottom-color: rgba(255, 255, 255, .25);\n}\n.nav-masthead[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]    + .nav-link[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n}\n.nav-masthead[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: #fff;\n  border-bottom-color: #fff;\n}\n@media (min-width: 48em) {\n  .masthead-brand[_ngcontent-%COMP%] {\n    float: left;\n  }\n\n  .nav-masthead[_ngcontent-%COMP%] {\n    float: right;\n  }\n}\n\n.cover[_ngcontent-%COMP%] {\n  padding: 0 1.5rem;\n}\n.cover[_ngcontent-%COMP%]   .btn-lg[_ngcontent-%COMP%] {\n  padding: .75rem 1.25rem;\n  font-weight: 700;\n}\n\n.mastfoot[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, .5);\n}\n.secondary-headlight[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n.secondary-headlight[_ngcontent-%COMP%]::after{\n  content: \" family.\";\n  -webkit-animation: textanim 10s linear infinite;\n          animation: textanim 10s linear infinite;\n}\n@-webkit-keyframes textanim  {\n    50%{\n      content: \" friends.\"\n    }\n}\n@keyframes textanim  {\n    50%{\n      content: \" friends.\"\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxVQUFVO0FBQ1Y7OztFQUdFLFdBQVc7QUFDYjtBQUVBLDBCQUEwQjtBQUMxQjs7O0VBR0UsV0FBVztFQUNYLGlCQUFpQixFQUFFLG9DQUFvQztFQUN2RCxzQkFBc0I7RUFDdEIseUJBQXlCO0FBQzNCO0FBR0E7O0VBRUU7QUFDRjtFQUNFLFlBQVk7RUFHWixhQUFhO0VBR2IsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCw2Q0FBNkM7RUFDN0MsNENBQTRDO0FBQzlDO0FBRUE7RUFDRSx1Q0FBc0Q7RUFDdEQsV0FBVztFQUNYLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsNEJBQTRCO0FBQzlCO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7O0VBRUU7QUFDRjtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLDhCQUE4QjtFQUM5Qiw2QkFBNkI7RUFDN0IsdUNBQXVDO0FBQ3pDO0FBRUE7O0VBRUUsNkNBQTZDO0FBQy9DO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7QUFHQTs7RUFFRTtBQUNGO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCO0FBR0E7O0VBRUU7QUFDRjtFQUNFLDhCQUE4QjtBQUNoQztBQUdBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLCtDQUF1QztVQUF2Qyx1Q0FBdUM7QUFDekM7QUFFQTtJQUNJO01BQ0U7SUFDRjtBQUNKO0FBSkE7SUFDSTtNQUNFO0lBQ0Y7QUFDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBMaW5rcyAqL1xuYSxcbmE6Zm9jdXMsXG5hOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi8qIEN1c3RvbSBkZWZhdWx0IGJ1dHRvbiAqL1xuLmJ0bi1zZWNvbmRhcnksXG4uYnRuLXNlY29uZGFyeTpob3Zlcixcbi5idG4tc2Vjb25kYXJ5OmZvY3VzIHtcbiAgY29sb3I6ICMzMzM7XG4gIHRleHQtc2hhZG93OiBub25lOyAvKiBQcmV2ZW50IGluaGVyaXRhbmNlIGZyb20gYGJvZHlgICovXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogLjA1cmVtIHNvbGlkICNmZmY7XG59XG5cblxuLypcbiAqIEJhc2Ugc3RydWN0dXJlXG4gKi9cbjpob3N0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtc2hhZG93OiAwIC4wNXJlbSAuMXJlbSByZ2JhKDAsIDAsIDAsIC41KTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVyZW0gcmdiYSgwLCAwLCAwLCAuNSk7XG59XG5cbi5ob21lLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvaW1nL2hvbWVfY292ZXIuanBnXCIpO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4uY292ZXItY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA0MmVtO1xufVxuXG4vKlxuICogSGVhZGVyXG4gKi9cbi5tYXN0aGVhZCB7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi5tYXN0aGVhZC1icmFuZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5uYXYtbWFzdGhlYWQgLm5hdi1saW5rIHtcbiAgcGFkZGluZzogLjI1cmVtIDA7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC41KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IC4yNXJlbSBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuLm5hdi1tYXN0aGVhZCAubmF2LWxpbms6aG92ZXIsXG4ubmF2LW1hc3RoZWFkIC5uYXYtbGluazpmb2N1cyB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjI1KTtcbn1cblxuLm5hdi1tYXN0aGVhZCAubmF2LWxpbmsgKyAubmF2LWxpbmsge1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuLm5hdi1tYXN0aGVhZCAuYWN0aXZlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNmZmY7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA0OGVtKSB7XG4gIC5tYXN0aGVhZC1icmFuZCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cblxuICAubmF2LW1hc3RoZWFkIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gIH1cbn1cblxuXG4vKlxuICogQ292ZXJcbiAqL1xuLmNvdmVyIHtcbiAgcGFkZGluZzogMCAxLjVyZW07XG59XG5cbi5jb3ZlciAuYnRuLWxnIHtcbiAgcGFkZGluZzogLjc1cmVtIDEuMjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cblxuLypcbiAqIEZvb3RlclxuICovXG4ubWFzdGZvb3Qge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNSk7XG59XG5cblxuLnNlY29uZGFyeS1oZWFkbGlnaHQge1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbi5zZWNvbmRhcnktaGVhZGxpZ2h0OjphZnRlcntcbiAgY29udGVudDogXCIgZmFtaWx5LlwiO1xuICBhbmltYXRpb246IHRleHRhbmltIDEwcyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgdGV4dGFuaW0gIHtcbiAgICA1MCV7XG4gICAgICBjb250ZW50OiBcIiBmcmllbmRzLlwiXG4gICAgfVxufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [{
          type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/home/home.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/modules/home/home.module.ts ***!
    \*********************************************/

  /*! exports provided: HomeModule */

  /***/
  function srcAppModulesHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
      return HomeModule;
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


    var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home.component */
    "./src/app/modules/home/home.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var HomeModule = function HomeModule() {
      _classCallCheck(this, HomeModule);
    };

    HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: HomeModule
    });
    HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function HomeModule_Factory(t) {
        return new (t || HomeModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, {
        declarations: [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
        exports: [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]],
          exports: [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/not-found/not-found.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/shared/components/not-found/not-found.component.ts ***!
    \********************************************************************/

  /*! exports provided: NotFoundComponent */

  /***/
  function srcAppSharedComponentsNotFoundNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
      return NotFoundComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var NotFoundComponent =
    /*#__PURE__*/
    function () {
      function NotFoundComponent() {
        _classCallCheck(this, NotFoundComponent);
      }

      _createClass(NotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NotFoundComponent;
    }();

    NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) {
      return new (t || NotFoundComponent)();
    };

    NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NotFoundComponent,
      selectors: [["app-not-found"]],
      decls: 9,
      vars: 0,
      consts: [[1, "d-flex", "align-items-center", "justify-content-center", "flex-column", "page-container"], [1, "page-column"], ["src", "/assets/img/404.svg", "alt", "", 1, "page-img"], [1, "page-text"], [1, "page-column", "mt-5"], ["type", "button", "routerLink", "/home", 1, "btn", "btn-primary", "btn-lg"]],
      template: function NotFoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Page not found");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Back to home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
      styles: ["[_nghost-%COMP%], .page-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.page-text[_ngcontent-%COMP%] {\n  font-size: 35px;\n}\n\n.page-column[_ngcontent-%COMP%] {\n  text-align: center\n}\n\n.page-img[_ngcontent-%COMP%] {\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSxVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCwgLnBhZ2UtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucGFnZS10ZXh0IHtcbiAgZm9udC1zaXplOiAzNXB4O1xufVxuXG4ucGFnZS1jb2x1bW4ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXJcbn1cblxuLnBhZ2UtaW1nIHtcbiAgd2lkdGg6IDUwJTtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-not-found',
          templateUrl: './not-found.component.html',
          styleUrls: ['./not-found.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/sign-in/sign-in.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/shared/components/sign-in/sign-in.component.ts ***!
    \****************************************************************/

  /*! exports provided: SignInComponent */

  /***/
  function srcAppSharedComponentsSignInSignInComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignInComponent", function () {
      return SignInComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/user.service */
    "./src/app/shared/services/user.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SignInComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r82.notificationMessage);
      }
    }

    function SignInComponent_small_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Login is required. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignInComponent_small_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is required. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignInComponent_span_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 20);
      }
    }

    var SignInComponent =
    /*#__PURE__*/
    function () {
      function SignInComponent(authService, router, accountService, activatedRoute) {
        _classCallCheck(this, SignInComponent);

        this.authService = authService;
        this.router = router;
        this.accountService = accountService;
        this.activatedRoute = activatedRoute;
        this.notificationMessage = '';
        this.showLoginSpinner = false;

        if (this.authService.currentUserValue) {
          this.router.navigate(['/dashboard']);
        }
      }

      _createClass(SignInComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this25 = this;

          this.initLoginForm();
          this.activatedRoute.queryParams.subscribe(function (param) {
            if (param.data) {
              _this25.activateAccount(param.data);
            }

            if (param.registration) {
              _this25.notificationMessage = 'Please check our mail box and confirm your email address.';
            }

            if (param.activation) {
              _this25.notificationMessage = 'Email confirmed. You can log in.';
            }
          });
        }
      }, {
        key: "loginProcess",
        value: function loginProcess() {
          var _this26 = this;

          if (this.loginForm.valid) {
            this.showLoginSpinner = true;
            this.authService.login(this.login.value, this.password.value).subscribe(function (result) {
              _this26.showLoginSpinner = false;

              _this26.router.navigate(['/dashboard']);
            }, function (errorResponse) {
              _this26.showLoginSpinner = false;

              _this26.login.reset();

              _this26.password.reset();

              _this26.notificationMessage = JSON.parse(JSON.stringify(errorResponse)).error.details;
            });
          }
        }
      }, {
        key: "initLoginForm",
        value: function initLoginForm() {
          this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            login: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
          });
        }
      }, {
        key: "activateAccount",
        value: function activateAccount(activationKey) {
          var _this27 = this;

          this.accountService.activateUser(activationKey).subscribe(function (result) {
            _this27.router.navigate(['/login'], {
              queryParams: {
                activation: 'success'
              }
            });
          });
        }
      }, {
        key: "login",
        get: function get() {
          return this.loginForm.get('login');
        }
      }, {
        key: "password",
        get: function get() {
          return this.loginForm.get('password');
        }
      }]);

      return SignInComponent;
    }();

    SignInComponent.ɵfac = function SignInComponent_Factory(t) {
      return new (t || SignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
    };

    SignInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignInComponent,
      selectors: [["app-sign-in"]],
      decls: 23,
      vars: 6,
      consts: [[1, "d-flex", "flex-column", "page-container"], [1, "page-column"], ["src", "/assets/img/login_theme.svg", "alt", "", 1, "login-pic"], [1, "page-column", "mt-5"], [1, "login-main-text"], ["class", "page-column mt-3", 4, "ngIf"], [1, "page-column", "mt-3"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "text", "id", "login", "placeholder", "Login or email", "formControlName", "login", 1, "form-control", "credential-input", "has-warning"], ["class", "form-text text-danger validation-text", 4, "ngIf"], ["type", "password", "id", "password", "placeholder", "Password", "formControlName", "password", 1, "form-control", "credential-input"], [2, "text-align", "right"], [1, "sign-up-text"], ["routerLink", "/register"], ["type", "submit", 1, "btn", "btn-primary", "pl-5", "pr-5", "mt-4", 3, "disabled"], ["class", "spinner-border spinner-border-sm", "role", "status", "aria-hidden", "true", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-primary", "pl-5", "pr-5"], [1, "notification-text"], [1, "form-text", "text-danger", "validation-text"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"]],
      template: function SignInComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Sign in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SignInComponent_div_6_Template, 4, 1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignInComponent_Template_form_ngSubmit_8_listener() {
            return ctx.loginProcess();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SignInComponent_small_11_Template, 2, 0, "small", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SignInComponent_small_14_Template, 2, 0, "small", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "No account yet? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Sign up!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, SignInComponent_span_21_Template, 1, 0, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Login ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notificationMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.login.invalid && (ctx.login.dirty || ctx.login.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.password.invalid && (ctx.password.dirty || ctx.password.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loginForm.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showLoginSpinner);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      styles: ["[_nghost-%COMP%], .page-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.page-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.page-column[_ngcontent-%COMP%] {\n  text-align: center\n}\n\n.login-pic[_ngcontent-%COMP%] {\n  width: 30%;\n  min-width: 200px;\n}\n\n.login-main-text[_ngcontent-%COMP%] {\n  font-size: 35px;\n}\n\n.sign-up-text[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-size: 0.9rem;\n  transition: .3s;\n}\n\n.validation-text[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:link {\n  text-decoration: none;\n  color: #999;\n  font-size: 0.9rem;\n  transition: .3s;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: #00B0FF;\n}\n\n.notification-text[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n\n.credential-input[_ngcontent-%COMP%] {\n  width: 250px;\n}\n\n.credential-input[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n  border: 1px solid rgba(0, 207, 255, 0.82);\n  box-shadow: 0 0 10px rgba(0, 207, 255, 0.31);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUdBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4Qix5Q0FBeUM7RUFDekMsNENBQTRDO0FBQzlDIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCwgLnBhZ2UtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucGFnZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnBhZ2UtY29sdW1uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyXG59XG5cbi5sb2dpbi1waWMge1xuICB3aWR0aDogMzAlO1xuICBtaW4td2lkdGg6IDIwMHB4O1xufVxuXG4ubG9naW4tbWFpbi10ZXh0IHtcbiAgZm9udC1zaXplOiAzNXB4O1xufVxuXG4uc2lnbi11cC10ZXh0IHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgdHJhbnNpdGlvbjogLjNzO1xufVxuXG4udmFsaWRhdGlvbi10ZXh0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuYSwgYTp2aXNpdGVkLCBhOmFjdGl2ZSwgYTpsaW5rIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzk5OTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIHRyYW5zaXRpb246IC4zcztcbn1cblxuYTpob3ZlciB7XG4gIGNvbG9yOiAjMDBCMEZGO1xufVxuXG5cbi5ub3RpZmljYXRpb24tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLmNyZWRlbnRpYWwtaW5wdXQge1xuICB3aWR0aDogMjUwcHg7XG59XG5cbi5jcmVkZW50aWFsLWlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDIwNywgMjU1LCAwLjgyKTtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAyMDcsIDI1NSwgMC4zMSk7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignInComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sign-in',
          templateUrl: './sign-in.component.html',
          styleUrls: ['./sign-in.component.css']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/sign-up/sign-up.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/shared/components/sign-up/sign-up.component.ts ***!
    \****************************************************************/

  /*! exports provided: SignUpComponent */

  /***/
  function srcAppSharedComponentsSignUpSignUpComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpComponent", function () {
      return SignUpComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SignUpComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.notificationMessage);
      }
    }

    function SignUpComponent_div_14_small_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " First name is required. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignUpComponent_div_14_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "small", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r9.firstName.getError("violations"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function SignUpComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignUpComponent_div_14_small_1_Template, 2, 0, "small", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignUpComponent_div_14_div_2_Template, 2, 1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.firstName.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.firstName.getError("violations"));
      }
    }

    function SignUpComponent_div_19_small_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Last name is required. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignUpComponent_div_19_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "small", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r11.lastName.getError("violations"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function SignUpComponent_div_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignUpComponent_div_19_small_1_Template, 2, 0, "small", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignUpComponent_div_19_div_2_Template, 2, 1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.lastName.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.lastName.getError("violations"));
      }
    }

    function SignUpComponent_div_24_small_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Username is required. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignUpComponent_div_24_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "small", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r13.username.getError("violations"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function SignUpComponent_div_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignUpComponent_div_24_small_1_Template, 2, 0, "small", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignUpComponent_div_24_div_2_Template, 2, 1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.username.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.username.getError("violations"));
      }
    }

    function SignUpComponent_div_29_small_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is required. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignUpComponent_div_29_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "small", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r15.email.getError("violations"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function SignUpComponent_div_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignUpComponent_div_29_small_1_Template, 2, 0, "small", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignUpComponent_div_29_div_2_Template, 2, 1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.email.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.email.getError("violations"));
      }
    }

    function SignUpComponent_div_35_small_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is required. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignUpComponent_div_35_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "small", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r17.password.getError("violations"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function SignUpComponent_div_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignUpComponent_div_35_small_1_Template, 2, 0, "small", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignUpComponent_div_35_div_2_Template, 2, 1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.password.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.password.getError("violations"));
      }
    }

    function SignUpComponent_div_40_small_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please confirm password. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignUpComponent_div_40_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "small", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r19.confirmPassword.getError("violations"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function SignUpComponent_div_40_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignUpComponent_div_40_small_1_Template, 2, 0, "small", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignUpComponent_div_40_div_2_Template, 2, 1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.confirmPassword.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.confirmPassword.getError("violations"));
      }
    }

    function SignUpComponent_span_47_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 34);
      }
    }

    var SignUpComponent =
    /*#__PURE__*/
    function () {
      function SignUpComponent(authService, router) {
        _classCallCheck(this, SignUpComponent);

        this.authService = authService;
        this.router = router;
        this.showLoadingSpinner = false;
        this.notificationMessage = '';

        if (this.authService.currentUserValue) {
          this.router.navigate(['/dashboard']);
        }
      }

      _createClass(SignUpComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initRegistrationForm();
        }
      }, {
        key: "initRegistrationForm",
        value: function initRegistrationForm() {
          this.registrationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
          });
        }
      }, {
        key: "processRegistration",
        value: function processRegistration() {
          var _this28 = this;

          // this.authService.register({
          //   username: this.username.value,
          //   password: this.password.value,
          //   firstName: this.firstName.value,
          //   lastName: this.lastName.value,
          //   email: this.email.value
          // }).subscribe();
          // console.log("hanh");
          this.resetNotificationError();

          if (!this.isConfirmPasswordAreTheSameAsPassword()) {
            this.setViolationsError(this.confirmPassword, 'Passwords not match');
            return;
          }

          if (this.registrationForm.valid) {
            this.showLoadingSpinner = true;
            this.authService.register({
              username: this.username.value,
              password: this.password.value,
              firstName: this.firstName.value,
              lastName: this.lastName.value,
              email: this.email.value
            }).subscribe(function (result) {
              _this28.showLoadingSpinner = false;

              _this28.router.navigate(['/login'], {
                queryParams: {
                  registration: 'success'
                }
              });
            }, function (errorObject) {
              _this28.showLoadingSpinner = false;

              if (errorObject.status === 400) {
                var violationsErrors = errorObject.error.violations;
                violationsErrors.forEach(function (error) {
                  if (error.field === 'password') {
                    _this28.password.setValue('');

                    _this28.confirmPassword.reset();

                    _this28.setViolationsError(_this28.password, error.message);
                  }

                  if (error.field === 'email') {
                    _this28.setViolationsError(_this28.email, error.message);
                  }

                  if (error.field === 'username') {
                    _this28.setViolationsError(_this28.username, error.message);
                  }

                  if (error.field === 'firstName') {
                    _this28.setViolationsError(_this28.firstName, error.message);
                  }

                  if (error.field === 'lastName') {
                    _this28.setViolationsError(_this28.lastName, error.message);
                  }
                });
              }

              if (errorObject.status === 409) {
                _this28.notificationMessage = errorObject.error.detail;
              }
            });
          }
        }
      }, {
        key: "setViolationsError",
        value: function setViolationsError(control, error) {
          if (control.getError('violations')) {
            control.setErrors({
              violations: control.getError('violations') + '<br>' + error
            });
          } else {
            control.setErrors({
              violations: error
            });
          }
        }
      }, {
        key: "resetNotificationError",
        value: function resetNotificationError() {
          this.notificationMessage = '';
        }
      }, {
        key: "isConfirmPasswordAreTheSameAsPassword",
        value: function isConfirmPasswordAreTheSameAsPassword() {
          return this.password.value === this.confirmPassword.value;
        }
      }, {
        key: "username",
        get: function get() {
          return this.registrationForm.get('username');
        }
      }, {
        key: "email",
        get: function get() {
          return this.registrationForm.get('email');
        }
      }, {
        key: "firstName",
        get: function get() {
          return this.registrationForm.get('firstName');
        }
      }, {
        key: "lastName",
        get: function get() {
          return this.registrationForm.get('lastName');
        }
      }, {
        key: "password",
        get: function get() {
          return this.registrationForm.get('password');
        }
      }, {
        key: "confirmPassword",
        get: function get() {
          return this.registrationForm.get('confirmPassword');
        }
      }]);

      return SignUpComponent;
    }();

    SignUpComponent.ɵfac = function SignUpComponent_Factory(t) {
      return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    SignUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignUpComponent,
      selectors: [["app-sign-up"]],
      decls: 49,
      vars: 10,
      consts: [[1, "d-flex", "flex-column", "page-container"], [1, "page-column"], ["src", "/assets/img/registration_theme.svg", "alt", "", 1, "registration-pic"], [1, "registration-main-text"], ["class", "page-column mt-2 align-items-center", 4, "ngIf"], [1, "page-column", "mt-2", "pb-5"], [3, "formGroup", "ngSubmit"], [1, "form-row"], [1, "form-group", "col-md-6", 2, "text-align", "left"], ["for", "firstName"], ["type", "text", "id", "firstName", "placeholder", "First name", "formControlName", "firstName", 1, "form-control", "registration-input"], [4, "ngIf"], ["for", "lastName"], ["type", "text", "id", "lastName", "placeholder", "Last name", "formControlName", "lastName", 1, "form-control", "registration-input"], [1, "form-group", 2, "text-align", "left"], ["for", "username"], ["type", "text", "id", "username", "placeholder", "Username", "formControlName", "username", 1, "form-control", "registration-input"], ["for", "address-email"], ["type", "email", "id", "address-email", "placeholder", "Email", "formControlName", "email", 1, "form-control", "registration-input"], ["for", "password"], ["type", "password", "id", "password", "placeholder", "Password", "formControlName", "password", 1, "form-control", "registration-input"], ["for", "confirm-password"], ["type", "password", "id", "confirm-password", "placeholder", "Confirm password", "formControlName", "confirmPassword", 1, "form-control", "registration-input"], [2, "text-align", "right"], [1, "sign-in-text"], ["routerLink", "/login"], ["type", "submit", 1, "btn", "btn-primary", "pl-5", "pr-5", "mt-4", 3, "disabled"], ["class", "spinner-border spinner-border-sm", "role", "status", "aria-hidden", "true", 4, "ngIf"], [1, "page-column", "mt-2", "align-items-center"], ["role", "alert", 1, "alert", "alert-primary", "pl-5", "pr-5"], [1, "notification-text"], ["class", "form-text text-danger", 4, "ngIf"], [1, "form-text", "text-danger"], [1, "form-text", "text-danger", 3, "innerHTML"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"]],
      template: function SignUpComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Sign up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SignUpComponent_div_6_Template, 4, 1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignUpComponent_Template_form_ngSubmit_8_listener() {
            return ctx.processRegistration();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "First name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SignUpComponent_div_14_Template, 3, 2, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Last name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SignUpComponent_div_19_Template, 3, 2, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, SignUpComponent_div_24_Template, 3, 2, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, SignUpComponent_div_29_Template, 3, 2, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, SignUpComponent_div_35_Template, 3, 2, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Confirm password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, SignUpComponent_div_40_Template, 3, 2, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Already have an account? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Sign in!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, SignUpComponent_span_47_Template, 1, 0, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Register now ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notificationMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registrationForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.firstName.invalid && (ctx.firstName.dirty || ctx.firstName.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lastName.invalid && (ctx.lastName.dirty || ctx.lastName.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.username.invalid && (ctx.username.dirty || ctx.username.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.email.invalid && (ctx.email.dirty || ctx.email.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.password.invalid && (ctx.password.dirty || ctx.password.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.confirmPassword.invalid && (ctx.confirmPassword.dirty || ctx.confirmPassword.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.registrationForm.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showLoadingSpinner);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      styles: ["[_nghost-%COMP%], .page-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.page-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.page-column[_ngcontent-%COMP%] {\n  text-align: center\n}\n\n.registration-main-text[_ngcontent-%COMP%] {\n  font-size: 35px;\n}\n\n.registration-pic[_ngcontent-%COMP%] {\n  width: 20%;\n  min-width: 150px;\n}\n\n.notification-text[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n\n.sign-in-text[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-size: 0.9rem;\n  transition: .3s;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #999;\n  font-size: 0.9rem;\n  transition: .3s;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: #00B0FF;\n}\n\n.registration-input[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n  border: 1px solid rgba(0, 207, 255, 0.82);\n  box-shadow: 0 0 10px rgba(0, 207, 255, 0.31);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUdBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4Qix5Q0FBeUM7RUFDekMsNENBQTRDO0FBQzlDIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCwgLnBhZ2UtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucGFnZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnBhZ2UtY29sdW1uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyXG59XG5cbi5yZWdpc3RyYXRpb24tbWFpbi10ZXh0IHtcbiAgZm9udC1zaXplOiAzNXB4O1xufVxuXG5cbi5yZWdpc3RyYXRpb24tcGljIHtcbiAgd2lkdGg6IDIwJTtcbiAgbWluLXdpZHRoOiAxNTBweDtcbn1cblxuLm5vdGlmaWNhdGlvbi10ZXh0IHtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uc2lnbi1pbi10ZXh0IHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgdHJhbnNpdGlvbjogLjNzO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzk5OTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIHRyYW5zaXRpb246IC4zcztcbn1cblxuYTpob3ZlciB7XG4gIGNvbG9yOiAjMDBCMEZGO1xufVxuXG4ucmVnaXN0cmF0aW9uLWlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDIwNywgMjU1LCAwLjgyKTtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAyMDcsIDI1NSwgMC4zMSk7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignUpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sign-up',
          templateUrl: './sign-up.component.html',
          styleUrls: ['./sign-up.component.css']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/enum/chat-messages-status.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/enum/chat-messages-status.ts ***!
    \*****************************************************/

  /*! exports provided: ChatMessagesStatus */

  /***/
  function srcAppSharedEnumChatMessagesStatusTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatMessagesStatus", function () {
      return ChatMessagesStatus;
    });

    var ChatMessagesStatus;

    (function (ChatMessagesStatus) {
      ChatMessagesStatus["received"] = "RECEIVED";
      ChatMessagesStatus["delivered"] = "DELIVERED";
    })(ChatMessagesStatus || (ChatMessagesStatus = {}));
    /***/

  },

  /***/
  "./src/app/shared/helpers/auth.guard.ts":
  /*!**********************************************!*\
    !*** ./src/app/shared/helpers/auth.guard.ts ***!
    \**********************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppSharedHelpersAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
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


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/shared/services/auth.service.ts");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(router, authenticationService) {
        _classCallCheck(this, AuthGuard);

        this.router = router;
        this.authenticationService = authenticationService;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          var currentUser = this.authenticationService.currentUserValue;

          if (currentUser) {
            // logged in so return true
            return true;
          } // not logged in so redirect to login page with the return url


          this.router.navigate(['/login'], {
            queryParams: {
              returnUrl: state.url
            }
          });
          return false;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/helpers/token.interceptor.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/helpers/token.interceptor.ts ***!
    \*****************************************************/

  /*! exports provided: TokenInterceptor */

  /***/
  function srcAppSharedHelpersTokenInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function () {
      return TokenInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/shared/services/auth.service.ts");

    var TokenInterceptor =
    /*#__PURE__*/
    function () {
      function TokenInterceptor(authenticationService) {
        _classCallCheck(this, TokenInterceptor);

        this.authenticationService = authenticationService;
      }

      _createClass(TokenInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          // add authorization header with jwt token if available
          var currentUser = this.authenticationService.currentUserValue;
          var token = this.authenticationService.getToken();

          if (currentUser && token != null) {
            request = request.clone({
              setHeaders: {
                Authorization: "Bearer ".concat(token)
              }
            });
          }

          return next.handle(request);
        }
      }]);

      return TokenInterceptor;
    }();

    TokenInterceptor.ɵfac = function TokenInterceptor_Factory(t) {
      return new (t || TokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
    };

    TokenInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TokenInterceptor,
      factory: TokenInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/auth.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/services/auth.service.ts ***!
    \*************************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppSharedServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
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


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ws_messages_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./ws-messages.service */
    "./src/app/shared/services/ws-messages.service.ts");

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(http, wsMessagesService) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.wsMessagesService = wsMessagesService;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](JSON.parse(localStorage.getItem('user')));
        this.currentUser = this.currentUserSubject.asObservable();
      }

      _createClass(AuthService, [{
        key: "getToken",
        value: function getToken() {
          return localStorage.getItem('access_token');
        }
      }, {
        key: "login",
        value: function login(credentialLogin, credentialPassword) {
          var _this29 = this;

          var helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseApiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].authServiceResource + "/users/authenticate", {
            username: credentialLogin,
            password: credentialPassword
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            var accessToken = JSON.parse(JSON.stringify(result)).access_token;
            var decodedToken = helper.decodeToken(accessToken);
            var user = {
              id: decodedToken.sub
            };
            localStorage.setItem('access_token', accessToken);
            localStorage.setItem('user', JSON.stringify(user));

            _this29.currentUserSubject.next(user);

            return result;
          }));
        }
      }, {
        key: "register",
        value: function register(data) {
          console.log(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseApiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].authServiceResource + "/users/user");
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseApiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].authServiceResource + "/users/user", data);
        }
      }, {
        key: "logout",
        value: function logout() {
          localStorage.removeItem('access_token');
          localStorage.removeItem('user');
          this.wsMessagesService.disconnect();
          this.currentUserSubject.next(null);
        }
      }, {
        key: "currentUserValue",
        get: function get() {
          return this.currentUserSubject.value;
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ws_messages_service__WEBPACK_IMPORTED_MODULE_6__["WsMessagesService"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }, {
          type: _ws_messages_service__WEBPACK_IMPORTED_MODULE_6__["WsMessagesService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/chat-message.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/shared/services/chat-message.service.ts ***!
    \*********************************************************/

  /*! exports provided: ChatMessageService */

  /***/
  function srcAppSharedServicesChatMessageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatMessageService", function () {
      return ChatMessageService;
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


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");

    var ChatMessageService =
    /*#__PURE__*/
    function () {
      function ChatMessageService(http) {
        _classCallCheck(this, ChatMessageService);

        this.http = http;
        this.chatMessageResource = '/chat-messages';
      }

      _createClass(ChatMessageService, [{
        key: "getLastMessages",
        value: function getLastMessages(size, friendChatId, friendChatWithId) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('friend_chat_id1', friendChatId).set('friend_chat_id2', friendChatWithId).set('size', size);
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseApiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].chatMessagesServiceResource + this.chatMessageResource + '?' + params.toString());
        }
      }, {
        key: "getPreviousMessages",
        value: function getPreviousMessages(size, friendChatId, friendChatWithId, from) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('friend_chat_id1', friendChatId).set('friend_chat_id2', friendChatWithId).set('size', size).set('from', from);
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseApiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].chatMessagesServiceResource + this.chatMessageResource + '?' + params.toString());
        }
      }, {
        key: "markMessageAsDelivered",
        value: function markMessageAsDelivered(friendChatId) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('friend_chat_id', friendChatId);
          return this.http.patch(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseApiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].chatMessagesServiceResource + this.chatMessageResource + '?' + params.toString(), {});
        }
      }]);

      return ChatMessageService;
    }();

    ChatMessageService.ɵfac = function ChatMessageService_Factory(t) {
      return new (t || ChatMessageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ChatMessageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ChatMessageService,
      factory: ChatMessageService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatMessageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/chat-profile.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/shared/services/chat-profile.service.ts ***!
    \*********************************************************/

  /*! exports provided: ChatProfileService */

  /***/
  function srcAppSharedServicesChatProfileServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatProfileService", function () {
      return ChatProfileService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ChatProfileService =
    /*#__PURE__*/
    function () {
      function ChatProfileService(http) {
        _classCallCheck(this, ChatProfileService);

        this.http = http;
        this.chatProfileResource = '/chat-profiles';
      }

      _createClass(ChatProfileService, [{
        key: "getChatProfile",
        value: function getChatProfile(userId) {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseApiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].chatServiceResource + this.chatProfileResource + '/' + userId);
        }
      }, {
        key: "generateNewFriendsCode",
        value: function generateNewFriendsCode(userId) {
          return this.http.patch(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseApiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].chatServiceResource + this.chatProfileResource + '/' + userId + '/new-friends-request-code', {});
        }
      }]);

      return ChatProfileService;
    }();

    ChatProfileService.ɵfac = function ChatProfileService_Factory(t) {
      return new (t || ChatProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    ChatProfileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ChatProfileService,
      factory: ChatProfileService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatProfileService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/friend-chat.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/shared/services/friend-chat.service.ts ***!
    \********************************************************/

  /*! exports provided: FriendChatService */

  /***/
  function srcAppSharedServicesFriendChatServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FriendChatService", function () {
      return FriendChatService;
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


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");

    var FriendChatService =
    /*#__PURE__*/
    function () {
      function FriendChatService(http) {
        _classCallCheck(this, FriendChatService);

        this.http = http;
        this.friendChatResource = '/friends-chats';
      }

      _createClass(FriendChatService, [{
        key: "getFriendsChats",
        value: function getFriendsChats() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseApiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].chatServiceResource + this.friendChatResource);
        }
      }, {
        key: "deleteFriend",
        value: function deleteFriend(chatFriendId, chatFriendWithId) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('friend_chat', chatFriendId).set('friend_chat_with', chatFriendWithId);
          return this.http["delete"](_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseApiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].chatServiceResource + this.friendChatResource + '?' + params.toString());
        }
      }]);

      return FriendChatService;
    }();

    FriendChatService.ɵfac = function FriendChatService_Factory(t) {
      return new (t || FriendChatService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    FriendChatService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FriendChatService,
      factory: FriendChatService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FriendChatService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/friend-request.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/shared/services/friend-request.service.ts ***!
    \***********************************************************/

  /*! exports provided: FriendRequestService */

  /***/
  function srcAppSharedServicesFriendRequestServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FriendRequestService", function () {
      return FriendRequestService;
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


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");

    var FriendRequestService =
    /*#__PURE__*/
    function () {
      function FriendRequestService(http) {
        _classCallCheck(this, FriendRequestService);

        this.http = http;
        this.friendRequestResource = '/friend-requests';
      }

      _createClass(FriendRequestService, [{
        key: "getReceivedFriendRequests",
        value: function getReceivedFriendRequests() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseApiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].chatServiceResource + this.friendRequestResource + '/received');
        }
      }, {
        key: "getSentFriendRequests",
        value: function getSentFriendRequests() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseApiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].chatServiceResource + this.friendRequestResource + '/sent');
        }
      }, {
        key: "postCreateNewFriendRequest",
        value: function postCreateNewFriendRequest(invitationCode) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('invite_code', invitationCode);
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseApiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].chatServiceResource + this.friendRequestResource + '?' + params.toString(), {});
        }
      }, {
        key: "replyToFriendsRequest",
        value: function replyToFriendsRequest(id, accept) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('accept', accept);
          return this.http.patch(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseApiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].chatServiceResource + this.friendRequestResource + '/' + id + '?' + params.toString(), {});
        }
      }, {
        key: "cancelSentFriendRequest",
        value: function cancelSentFriendRequest(id) {
          return this.http["delete"](_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseApiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].chatServiceResource + this.friendRequestResource + '/' + id);
        }
      }]);

      return FriendRequestService;
    }();

    FriendRequestService.ɵfac = function FriendRequestService_Factory(t) {
      return new (t || FriendRequestService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    FriendRequestService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FriendRequestService,
      factory: FriendRequestService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FriendRequestService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/user.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/services/user.service.ts ***!
    \*************************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppSharedServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
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


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");

    var UserService =
    /*#__PURE__*/
    function () {
      function UserService(http) {
        _classCallCheck(this, UserService);

        this.http = http;
        this.userResource = '/users';
      }

      _createClass(UserService, [{
        key: "activateUser",
        value: function activateUser(activationKey) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('data', activationKey);
          return this.http.patch(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseApiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].authServiceResource + this.userResource + '/activate?' + params.toString(), {});
        }
      }, {
        key: "getUser",
        value: function getUser(userId) {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseApiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].authServiceResource + this.userResource + '/' + userId);
        }
      }, {
        key: "changePassword",
        value: function changePassword(userId, newPassword) {
          return this.http.patch(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseApiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].authServiceResource + this.userResource + '/' + userId + '/change-password', newPassword);
        }
      }, {
        key: "modifyUserInformation",
        value: function modifyUserInformation(id, user) {
          return this.http.patch(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseApiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].authServiceResource + this.userResource + '/' + id, user);
        }
      }]);

      return UserService;
    }();

    UserService.ɵfac = function UserService_Factory(t) {
      return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UserService,
      factory: UserService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/ws-messages.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/shared/services/ws-messages.service.ts ***!
    \********************************************************/

  /*! exports provided: WsMessagesService */

  /***/
  function srcAppSharedServicesWsMessagesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WsMessagesService", function () {
      return WsMessagesService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var stompjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! stompjs */
    "./node_modules/stompjs/index.js");
    /* harmony import */


    var stompjs__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(stompjs__WEBPACK_IMPORTED_MODULE_2__);

    var WsMessagesService =
    /*#__PURE__*/
    function () {
      function WsMessagesService() {
        _classCallCheck(this, WsMessagesService);

        this.messagingWebsocketServiceResource = '/messages-websocket-service/ws';
      }

      _createClass(WsMessagesService, [{
        key: "connect",
        value: function connect(token, afterWebSocketConnected) {
          this.ws = stompjs__WEBPACK_IMPORTED_MODULE_2__["client"](_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].websocketBaseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].websocketMessageServiceResource + '/ws');
          this.ws.connect({
            Authorization: 'Bearer ' + token // tslint:disable-next-line:only-arrow-functions

          }, function (frame) {
            afterWebSocketConnected.wsAfterConnected();
          });
        }
      }, {
        key: "sendMessage",
        value: function sendMessage(message) {
          return this.ws.send('/app/chat', {}, JSON.stringify(message));
        }
      }, {
        key: "disconnect",
        value: function disconnect() {
          if (this.ws != null) {
            this.ws.ws.close();
          }
        }
      }]);

      return WsMessagesService;
    }();

    WsMessagesService.ɵfac = function WsMessagesService_Factory(t) {
      return new (t || WsMessagesService)();
    };

    WsMessagesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: WsMessagesService,
      factory: WsMessagesService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WsMessagesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
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


    var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/not-found/not-found.component */
    "./src/app/shared/components/not-found/not-found.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/sign-up/sign-up.component */
    "./src/app/shared/components/sign-up/sign-up.component.ts");
    /* harmony import */


    var _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/sign-in/sign-in.component */
    "./src/app/shared/components/sign-in/sign-in.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
        declarations: [_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"], _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"], _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_5__["SignInComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]],
        exports: [_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"], _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"], _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_5__["SignInComponent"]],
          exports: [_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment, baseUrl, wsBaseUrl */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "baseUrl", function () {
      return baseUrl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "wsBaseUrl", function () {
      return wsBaseUrl;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      baseApiUrl: 'http://34.125.87.47:8080',
      websocketBaseUrl: 'ws://34.125.87.47:8080',
      authServiceResource: '/auth-service',
      chatServiceResource: '/chat-service',
      chatMessagesServiceResource: '/chat-messages-service',
      websocketMessageServiceResource: '/messages-websocket-service'
    };
    var baseUrl = 'http://34.125.87.47:8080';
    var wsBaseUrl = 'ws://34.125.87.47:8080';
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
    /*! /home/hazy/IdeaProjects/scorpio-hosting/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map