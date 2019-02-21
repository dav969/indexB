(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./system/system.module": [
		"./src/app/system/system.module.ts",
		"system-system-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/components/not-found/not-found.component */ "./src/app/shared/components/not-found/not-found.component.ts");




var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'system', loadChildren: './system/system.module#SystemModule' },
    { path: 'not-found', component: _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                    scrollPositionRestoration: 'enabled'
                })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('myAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 })], { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }))], { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 }))], { optional: true })
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _shared_services_users_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/services/users.service */ "./src/app/shared/services/users.service.ts");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _shared_services_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/services/auth.guard */ "./src/app/shared/services/auth.guard.ts");
/* harmony import */ var _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/components/not-found/not-found.component */ "./src/app/shared/components/not-found/not-found.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__["NotFoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _auth_auth_module__WEBPACK_IMPORTED_MODULE_5__["AuthModule"]
            ],
            providers: [
                _shared_services_users_service__WEBPACK_IMPORTED_MODULE_7__["UsersService"],
                _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
                _shared_services_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/about/about.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/about/about.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section.about-header {\r\n    min-height: 533px;\r\n    background-image: url('aboutBg.jpg');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    position: relative;\r\n    display: flex;\r\n    align-items: center;\r\n    z-index: 1;\r\n}\r\n.aboutPage__layer {\r\n    height: 100%;\r\n    width: 100%;\r\n    background-color: rgba(0, 0, 0, .5);\r\n    display: block;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: -1;\r\n}\r\n.about-header__content {\r\n    max-width: 710px;\r\n    color: #fff;\r\n    text-align: center;\r\n    margin: 0 auto;\r\n}\r\n.about__title {\r\n    font-size: 38px;\r\n    font-weight: 900;\r\n    line-height: 48px;\r\n    text-transform: uppercase;\r\n}\r\n.about__descr {\r\n    font-size: 18px;\r\n    font-weight: 300;\r\n    line-height: 24px;\r\n    margin: 0 0 40px;\r\n}\r\n.about__info {\r\n    padding: 50px 0;\r\n}\r\n.info__item {\r\n    text-align: center;\r\n    border: 1px solid #c0c0c0;\r\n    border-bottom: 3px solid #1565c0;\r\n    box-shadow: 3px 3px 5px #999;\r\n    padding: 15px 10px;\r\n    height: 100%;\r\n}\r\n.info__item .info__item--title {\r\n    font-size: 20px;\r\n    line-height: 26px;\r\n    font-weight: 700;\r\n}\r\n.info__item .info__item--border {\r\n    display: block;\r\n    width: 60px;\r\n    height: 2px;\r\n    background: #336FA3;\r\n    margin: 10px auto;\r\n}\r\n.info__item--descr {\r\n    color: #000;\r\n    font-size: 14px;\r\n    font-weight: 300;\r\n    line-height: 20px;\r\n    margin-bottom: 10px;\r\n}\r\n@media (max-width: 991px) {\r\n    .info__item .info__item--title {\r\n        font-size: 16px;\r\n    }\r\n    .panel {\r\n        margin: 20px 0;\r\n    }\r\n}\r\n@media (max-width: 767px) {\r\n    .panel {\r\n        max-width: 75%;\r\n        margin: 20px auto;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFDQUFtRTtJQUNuRSw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLG9CQUFvQjtJQUNwQixXQUFXO0NBQ2Q7QUFDRDtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsT0FBTztJQUNQLFFBQVE7SUFDUixZQUFZO0NBQ2Y7QUFDRDtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLDBCQUEwQjtDQUM3QjtBQUNEO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0NBQ3BCO0FBQ0Q7SUFDSSxnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsaUNBQWlDO0lBQ2pDLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsYUFBYTtDQUNoQjtBQUNEO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7Q0FDcEI7QUFDRDtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixrQkFBa0I7Q0FDckI7QUFDRDtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixvQkFBb0I7Q0FDdkI7QUFFRDtJQUNJO1FBQ0ksZ0JBQWdCO0tBQ25CO0lBQ0Q7UUFDSSxlQUFlO0tBQ2xCO0NBQ0o7QUFFRDtJQUNJO1FBQ0ksZUFBZTtRQUNmLGtCQUFrQjtLQUNyQjtDQUNKIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbi5hYm91dC1oZWFkZXIge1xyXG4gICAgbWluLWhlaWdodDogNTMzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvYXV0aEltZy9hYm91dC9hYm91dEJnLmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcbi5hYm91dFBhZ2VfX2xheWVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNSk7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiAtMTtcclxufVxyXG4uYWJvdXQtaGVhZGVyX19jb250ZW50IHtcclxuICAgIG1heC13aWR0aDogNzEwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbi5hYm91dF9fdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAzOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0OHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4uYWJvdXRfX2Rlc2NyIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIG1hcmdpbjogMCAwIDQwcHg7XHJcbn1cclxuLmFib3V0X19pbmZvIHtcclxuICAgIHBhZGRpbmc6IDUwcHggMDtcclxufVxyXG4uaW5mb19faXRlbSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzBjMGMwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMxNTY1YzA7XHJcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDVweCAjOTk5O1xyXG4gICAgcGFkZGluZzogMTVweCAxMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5pbmZvX19pdGVtIC5pbmZvX19pdGVtLS10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuLmluZm9fX2l0ZW0gLmluZm9fX2l0ZW0tLWJvcmRlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzM2RkEzO1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbn1cclxuLmluZm9fX2l0ZW0tLWRlc2NyIHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAuaW5mb19faXRlbSAuaW5mb19faXRlbS0tdGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuICAgIC5wYW5lbCB7XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgLnBhbmVsIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDc1JTtcclxuICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/auth/about/about.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/about/about.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"about-header\">\n  <span class=\"aboutPage__layer\"></span>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"about-header__content\">\n        <h1 class=\"about__title\">about us</h1>\n        <div class=\"about__descr\">\n          We are team of professionals with deep expertise in client-facing professional services, technology, data\n          science and business development.\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"about__info\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6 col-lg-3 panel\">\n        <div class=\"info__item\">\n          <h2 class=\"info__item--title\">Available tools</h2>\n          <span class=\"info__item--border\"></span>\n          <p class=\"info__item--descr\">are designed for sales and marketing functions, NOT for practitioners</p>\n        </div>\n      </div>\n      <div class=\"col-md-6 col-lg-3 panel\">\n        <div class=\"info__item\">\n          <h2 class=\"info__item--title\">Information</h2>\n          <span class=\"info__item--border\"></span>\n          <p class=\"info__item--descr\">from generic sources is incomplete, outdated and inaccurate</p>\n        </div>\n      </div>\n      <div class=\"col-md-6 col-lg-3 panel\">\n        <div class=\"info__item\">\n          <h2 class=\"info__item--title\">No easy way to engage</h2>\n          <span class=\"info__item--border\"></span>\n          <p class=\"info__item--descr\">and leverage the entire team’s resources, network and Insight</p>\n        </div>\n      </div>\n      <div class=\"col-md-6 col-lg-3 panel\">\n        <div class=\"info__item\">\n          <h2 class=\"info__item--title\">Valuable insights</h2>\n          <span class=\"info__item--border\"></span>\n          <p class=\"info__item--descr\">are lost in expensive, underutilized and siloed applications</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/auth/about/about.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/about/about.component.ts ***!
  \***********************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent.prototype.scrollHandler = function (event) {
        console.log(event);
        console.log('now you are scrolling');
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/auth/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/auth/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/auth/home/home.component.ts");
/* harmony import */ var _how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./how-it-works/how-it-works.component */ "./src/app/auth/how-it-works/how-it-works.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/about.component */ "./src/app/auth/about/about.component.ts");
/* harmony import */ var _careers_careers_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./careers/careers.component */ "./src/app/auth/careers/careers.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/auth/registration/registration.component.ts");










var routes = [
    {
        path: '', component: _auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"], children: [
            { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
            { path: 'howItWork', component: _how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_5__["HowItWorksComponent"] },
            { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"] },
            { path: 'careers', component: _careers_careers_component__WEBPACK_IMPORTED_MODULE_7__["CareersComponent"] },
            { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
            { path: 'registration', component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_9__["RegistrationComponent"] },
            { path: '**', redirectTo: '/not-found' }
        ]
    }
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.component.css":
/*!*****************************************!*\
  !*** ./src/app/auth/auth.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "main {\r\n    padding-top: 64px;\r\n}\r\nul {\r\n    list-style: none;\r\n}\r\na {\r\n    color: #fff;\r\n    text-transform: uppercase;\r\n}\r\na:hover {\r\n    color: #fff;\r\n    text-decoration: none;\r\n}\r\n.example-spacer {\r\n    flex: 1 1 auto;\r\n}\r\n.active {\r\nbackground: #ecd2d228;\r\n}\r\n.brand-logo {\r\n    max-width: 200px;\r\n}\r\n.toolbar-lg {\r\n    height: 64px;\r\n    position: fixed;\r\n    z-index: 100;\r\n    width: 100%  !important;\r\n}\r\n.toolbar-lg .mat-toolbar-row {\r\n    height: 64px !important;\r\n}\r\n.toolbar-sm {\r\n    display: block;\r\n    position: fixed;\r\n    z-index: 10;\r\n}\r\n.toolbar-sm .mat-toolbar-row {\r\n    min-height: 0;\r\n    height: 0;\r\n    padding: 0;\r\n}\r\n/* Footer */\r\nfooter {\r\n    background-color: #3D3D3D;\r\n    padding: 30px 0 10px;\r\n}\r\n.footer-logo {\r\n    width: 60px;\r\n    height: 60px;\r\n}\r\n.widget-title {\r\n    color: #fff;\r\n    font-size: 24px;\r\n    font-weight: 500;\r\n    line-height: 29px;\r\n}\r\n.footerSeparator {\r\n    height: 2px;\r\n    width: 84px;\r\n    background-color: #fff;\r\n    border: none;\r\n    outline: none;\r\n    margin: 0;\r\n    margin-bottom: 15px;\r\n}\r\n.widget-menu {\r\n    display: flex;\r\n    color: #fff;\r\n}\r\n.widget__column:first-child {\r\n    margin-right: 40px;\r\n}\r\n.widget__column a {\r\n    color: #fff;\r\n    font-size: 14px;\r\n    font-weight: 300;\r\n    line-height: 22px;\r\n}\r\n.footerBtn--block {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-items: flex-end;\r\n}\r\n.copyright {\r\n    font-size: 14px;\r\n    font-weight: 300;\r\n    line-height: 17px;\r\n    margin-top: 15px;\r\n    color: #fff;\r\n}\r\n.mobileToggle {\r\n    display: none;\r\n    outline: none;\r\n}\r\n.nav-mobile {\r\n    display: none;\r\n    position: absolute;\r\n    top: 64px;\r\n    background: silver;\r\n    width: 100%;\r\n}\r\n.nav-mobile a{\r\n    display: block;\r\n}\r\n@media (max-width: 575.98px) { \r\n    footer {\r\n        text-align: center;\r\n    }\r\n    .footerSeparator {\r\n        margin: 10px auto;\r\n    }\r\n    .widget-menu {\r\n        justify-content: center;\r\n    }\r\n    .footerBtn--block {\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n    .copyright {\r\n        line-height: 25px;\r\n    }\r\n}\r\n@media (max-width: 767px) { \r\n    .nav-lg {\r\n        display: none;\r\n    }\r\n    .mobileToggle {\r\n        display: block;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9hdXRoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7Q0FDckI7QUFDRDtJQUNJLGlCQUFpQjtDQUNwQjtBQUNEO0lBQ0ksWUFBWTtJQUNaLDBCQUEwQjtDQUM3QjtBQUNEO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtDQUN6QjtBQUNEO0lBQ0ksZUFBZTtDQUNsQjtBQUNEO0FBQ0Esc0JBQXNCO0NBQ3JCO0FBQ0Q7SUFDSSxpQkFBaUI7Q0FDcEI7QUFDRDtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHdCQUF3QjtDQUMzQjtBQUNEO0lBQ0ksd0JBQXdCO0NBQzNCO0FBQ0Q7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksY0FBYztJQUNkLFVBQVU7SUFDVixXQUFXO0NBQ2Q7QUFDRCxZQUFZO0FBRVo7SUFDSSwwQkFBMEI7SUFDMUIscUJBQXFCO0NBQ3hCO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osYUFBYTtDQUNoQjtBQUVEO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0NBQ3JCO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsY0FBYztJQUNkLFVBQVU7SUFDVixvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLGNBQWM7SUFDZCxZQUFZO0NBQ2Y7QUFDRDtJQUNJLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0NBQ3JCO0FBQ0Q7SUFDSSxjQUFjO0lBQ2QsMEJBQTBCO0lBQzFCLHNCQUFzQjtDQUN6QjtBQUNEO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksY0FBYztJQUNkLGNBQWM7Q0FDakI7QUFDRDtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixZQUFZO0NBQ2Y7QUFDRDtJQUNJLGVBQWU7Q0FDbEI7QUFFRDtJQUNJO1FBQ0ksbUJBQW1CO0tBQ3RCO0lBQ0Q7UUFDSSxrQkFBa0I7S0FDckI7SUFDRDtRQUNJLHdCQUF3QjtLQUMzQjtJQUNEO1FBQ0ksb0JBQW9CO1FBQ3BCLHdCQUF3QjtLQUMzQjtJQUNEO1FBQ0ksa0JBQWtCO0tBQ3JCO0NBQ0o7QUFDRDtJQUNJO1FBQ0ksY0FBYztLQUNqQjtJQUNEO1FBQ0ksZUFBZTtLQUNsQjtDQUNKIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9hdXRoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYWluIHtcclxuICAgIHBhZGRpbmctdG9wOiA2NHB4O1xyXG59XHJcbnVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuYSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuYTpob3ZlciB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4uZXhhbXBsZS1zcGFjZXIge1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuLmFjdGl2ZSB7XHJcbmJhY2tncm91bmQ6ICNlY2QyZDIyODtcclxufVxyXG4uYnJhbmQtbG9nbyB7XHJcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG59XHJcbi50b29sYmFyLWxnIHtcclxuICAgIGhlaWdodDogNjRweDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIHdpZHRoOiAxMDAlICAhaW1wb3J0YW50O1xyXG59XHJcbi50b29sYmFyLWxnIC5tYXQtdG9vbGJhci1yb3cge1xyXG4gICAgaGVpZ2h0OiA2NHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnRvb2xiYXItc20ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAxMDtcclxufVxyXG4udG9vbGJhci1zbSAubWF0LXRvb2xiYXItcm93IHtcclxuICAgIG1pbi1oZWlnaHQ6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcbi8qIEZvb3RlciAqL1xyXG5cclxuZm9vdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzRDNEM0Q7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDAgMTBweDtcclxufVxyXG4uZm9vdGVyLWxvZ28ge1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbn1cclxuXHJcbi53aWRnZXQtdGl0bGUge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI5cHg7XHJcbn1cclxuLmZvb3RlclNlcGFyYXRvciB7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIHdpZHRoOiA4NHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcbi53aWRnZXQtbWVudSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuLndpZGdldF9fY29sdW1uOmZpcnN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1yaWdodDogNDBweDtcclxufVxyXG4ud2lkZ2V0X19jb2x1bW4gYSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxufVxyXG4uZm9vdGVyQnRuLS1ibG9jayB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxufVxyXG4uY29weXJpZ2h0IHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBsaW5lLWhlaWdodDogMTdweDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4ubW9iaWxlVG9nZ2xlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5uYXYtbW9iaWxlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDY0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBzaWx2ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4ubmF2LW1vYmlsZSBhe1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzUuOThweCkgeyBcclxuICAgIGZvb3RlciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmZvb3RlclNlcGFyYXRvciB7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICB9XHJcbiAgICAud2lkZ2V0LW1lbnUge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmZvb3RlckJ0bi0tYmxvY2sge1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuY29weXJpZ2h0IHtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHsgXHJcbiAgICAubmF2LWxnIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLm1vYmlsZVRvZ2dsZSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/auth/auth.component.html":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"toolbar-lg\">\r\n  <mat-toolbar-row>\r\n    <a (click)=\"navClose()\" mat-button routerLink=\"/home\"><img src=\"../../assets/logo.png\" alt=\"Logo\" class=\"brand-logo\"></a>\r\n    <span class=\"example-spacer\"></span>\r\n    <nav class=\"nav-lg\">\r\n      <a\r\n        mat-button \r\n        (click)=\"navClose()\"\r\n        *ngFor=\"let navitem of NavBarModel\"\r\n        [routerLink]=\"navitem.routerLink\"\r\n        [routerLinkActive]=\"navitem.routerLinkActive\"\r\n      >\r\n        {{ navitem.name }}\r\n      </a>\r\n    </nav>\r\n    <button type=\"button\" mat-icon-button class=\"mobileToggle\" (click)=\"toggleNavMobile()\">\r\n      <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\r\n    </button>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n<mat-toolbar class=\"toolbar-sm\">\r\n  <mat-toolbar-row>\r\n    <nav class=\"nav-mobile\" id=\"mobToggle\" style=\"z-index: 10\">\r\n      <a\r\n        mat-button \r\n        (click)=\"navClose()\"\r\n        *ngFor=\"let navitem of NavBarModel\"\r\n        [routerLink]=\"navitem.routerLink\"\r\n        [routerLinkActive]=\"navitem.routerLinkActive\"\r\n      >\r\n        {{ navitem.name }}\r\n      </a>\r\n    </nav>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n<main (click)=\"navClose()\">\r\n  <router-outlet></router-outlet>\r\n</main>\r\n<footer>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-6\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-2\">\r\n            <img src=\"../../assets/authImg/logo-mini.png\" alt=\"Logo\" class=\"footer-logo\">\r\n          </div>\r\n          <div class=\"col-md-9 offset-md-1 p-h-sm\">\r\n            <div class=\"widget custom-menu-widget\">\r\n              <h4 class=\"widget-title\">Company</h4>\r\n              <hr class=\"footerSeparator\">\r\n              <div class=\"widget-menu\">\r\n                <div class=\"widget__column\">\r\n                  <p><a (click)=\"navClose()\">Privacy Policy</a></p>\r\n                  <p><a (click)=\"navClose()\" routerLink=\"/howItWork\">How It Works </a></p>\r\n                  <p><a (click)=\"navClose()\" routerLink=\"/home\">Home</a></p>\r\n                </div>\r\n                <div class=\"widget__column\">\r\n                  <p><a mat-button (click)=\"navClose()\" routerLink=\"/login\">Login</a></p>\r\n                  <p><a mat-button (click)=\"navClose()\" routerLink=\"/about\">About</a></p>\r\n                  <p><a mat-button (click)=\"navClose()\" routerLink=\"/careers\">Careers</a></p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-6 footerBtn--block\">\r\n        <a mat-flat-button color=\"accent\" class=\"btn-lg\">Contact Us</a>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 text-center\">\r\n        <p class=\"copyright\">©2018, IndexBoard • 1650 Zanker Rd., Suite 136 San Jose, CA 95112 • info@indexboard.com •\r\n          (415) 678 6140</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>"

/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_animations_fade_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/animations/fade.animation */ "./src/app/shared/animations/fade.animation.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_models_nav_bar_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/models/nav-bar.model */ "./src/app/shared/models/nav-bar.model.ts");






var AuthComponent = /** @class */ (function () {
    function AuthComponent(router) {
        this.router = router;
        this.a = true;
    }
    AuthComponent.prototype.ngOnInit = function () {
        this.NavBarModel = _shared_models_nav_bar_model__WEBPACK_IMPORTED_MODULE_5__["navBar"];
    };
    AuthComponent.prototype.toggleNavMobile = function () {
        jquery__WEBPACK_IMPORTED_MODULE_4__('#mobToggle').slideToggle(300);
    };
    AuthComponent.prototype.navClose = function () {
        jquery__WEBPACK_IMPORTED_MODULE_4__('#mobToggle').slideUp(300);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('@fade'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AuthComponent.prototype, "a", void 0);
    AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'wfm-auth',
            template: __webpack_require__(/*! ./auth.component.html */ "./src/app/auth/auth.component.html"),
            animations: [_shared_animations_fade_animation__WEBPACK_IMPORTED_MODULE_3__["fadeStateTrigger"]],
            styles: [__webpack_require__(/*! ./auth.component.css */ "./src/app/auth/auth.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/auth/registration/registration.component.ts");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/auth/home/home.component.ts");
/* harmony import */ var _how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./how-it-works/how-it-works.component */ "./src/app/auth/how-it-works/how-it-works.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./about/about.component */ "./src/app/auth/about/about.component.ts");
/* harmony import */ var _careers_careers_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./careers/careers.component */ "./src/app/auth/careers/careers.component.ts");













var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                _registration_registration_component__WEBPACK_IMPORTED_MODULE_5__["RegistrationComponent"],
                _auth_component__WEBPACK_IMPORTED_MODULE_6__["AuthComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_10__["HowItWorksComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"],
                _careers_careers_component__WEBPACK_IMPORTED_MODULE_12__["CareersComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _auth_routing_module__WEBPACK_IMPORTED_MODULE_7__["AuthRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"]
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/careers/careers.component.css":
/*!****************************************************!*\
  !*** ./src/app/auth/careers/careers.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\r\n    text-decoration: none;\r\n}\r\n.careers__wrapper {\r\n    padding: 50px 0;\r\n    min-height: 433px;\r\n    background-color: #efefef;\r\n}\r\n.careers__heading {\r\n    font-size: 24px;\r\n    line-height: 33px;\r\n    letter-spacing: 1px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    margin-top: 8px;\r\n    font-weight: 300;\r\n}\r\n.careers__list {\r\n    margin: 30px auto;\r\n}\r\n.careers__item {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 240px;\r\n    height: 240px;\r\n    background-color: #fff;\r\n    border: 1px solid #b3b4b7;\r\n    border-radius: 7px;\r\n    box-shadow: 0px 0px 15px -2px #b3b4b7;\r\n    padding: 10px;\r\n    margin: 20px;\r\n    transition: all 280ms cubic-bezier(.4,0,.2,1);\r\n    -webkit-transition: all 280ms cubic-bezier(.4,0,.2,1);\r\n    -moz-transition: all 280ms cubic-bezier(.4,0,.2,1);\r\n    -ms-transition: all 280ms cubic-bezier(.4,0,.2,1);\r\n    -o-transition: all 280ms cubic-bezier(.4,0,.2,1);\r\n}\r\n.careers__item:hover{\r\n    box-shadow: 0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12);\r\n}\r\n.careers__item img {\r\n    height: 40px;\r\n    width: 40px;\r\n}\r\n.careers__item a {\r\n    text-align: center;\r\n    margin: 10px 0;\r\n}\r\n.careers__item p {\r\n    margin: 10px 0;\r\n    text-align: center;\r\n}\r\n@media (max-width: 767px) {\r\n    .careers__heading {\r\n        font-size: 18px;\r\n        line-height: 20px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9jYXJlZXJzL2NhcmVlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtDQUN6QjtBQUNEO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQiwwQkFBMEI7Q0FDN0I7QUFDRDtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtDQUNwQjtBQUNEO0lBQ0ksa0JBQWtCO0NBQ3JCO0FBQ0Q7SUFDSSxjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQixzQ0FBc0M7SUFDdEMsY0FBYztJQUNkLGFBQWE7SUFDYiw4Q0FBOEM7SUFDOUMsc0RBQXNEO0lBQ3RELG1EQUFtRDtJQUNuRCxrREFBa0Q7SUFDbEQsaURBQWlEO0NBQ3BEO0FBQ0Q7SUFDSSwwR0FBMEc7Q0FDN0c7QUFDRDtJQUNJLGFBQWE7SUFDYixZQUFZO0NBQ2Y7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0NBQ2xCO0FBQ0Q7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0NBQ3RCO0FBRUQ7SUFDSTtRQUNJLGdCQUFnQjtRQUNoQixrQkFBa0I7S0FDckI7Q0FDSiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvY2FyZWVycy9jYXJlZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4uY2FyZWVyc19fd3JhcHBlciB7XHJcbiAgICBwYWRkaW5nOiA1MHB4IDA7XHJcbiAgICBtaW4taGVpZ2h0OiA0MzNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XHJcbn1cclxuLmNhcmVlcnNfX2hlYWRpbmcge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMzcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuLmNhcmVlcnNfX2xpc3Qge1xyXG4gICAgbWFyZ2luOiAzMHB4IGF1dG87XHJcbn1cclxuLmNhcmVlcnNfX2l0ZW0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMjQwcHg7XHJcbiAgICBoZWlnaHQ6IDI0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiM2I0Yjc7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggLTJweCAjYjNiNGI3O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAyODBtcyBjdWJpYy1iZXppZXIoLjQsMCwuMiwxKTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDI4MG1zIGN1YmljLWJlemllciguNCwwLC4yLDEpO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMjgwbXMgY3ViaWMtYmV6aWVyKC40LDAsLjIsMSk7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDI4MG1zIGN1YmljLWJlemllciguNCwwLC4yLDEpO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDI4MG1zIGN1YmljLWJlemllciguNCwwLC4yLDEpO1xyXG59XHJcbi5jYXJlZXJzX19pdGVtOmhvdmVye1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLDAsMCwuMiksIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwwLDAsLjE0KSwgMCAzcHggMTRweCAycHggcmdiYSgwLDAsMCwuMTIpO1xyXG59XHJcbi5jYXJlZXJzX19pdGVtIGltZyB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxufVxyXG4uY2FyZWVyc19faXRlbSBhIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG59XHJcbi5jYXJlZXJzX19pdGVtIHAge1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgLmNhcmVlcnNfX2hlYWRpbmcge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/auth/careers/careers.component.html":
/*!*****************************************************!*\
  !*** ./src/app/auth/careers/careers.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"careers__wrapper\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <h1 class=\"careers__heading\"> We are always looking to add exceptional talent. If you like what we’re up to,\n        contact us at <a href=\"mailto:info@indexboard.com?Subject=Hello\" target=\"_top\">info@indexboard.com</a></h1>\n    </div>\n    <div class=\"d-flex flex-wrap justify-content-center careers__list\">\n      <div class=\"careers__item\" *ngFor=\"let work of careers\">\n          <img src=\"../../../assets/authImg/homeIcon/works-icon.png\" alt=\"Icon\">\n          <a href=\"#\">{{ work.role }}</a>\n          <p class=\"careers__location\">{{ work.address }}</p>\n        </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/auth/careers/careers.component.ts":
/*!***************************************************!*\
  !*** ./src/app/auth/careers/careers.component.ts ***!
  \***************************************************/
/*! exports provided: CareersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareersComponent", function() { return CareersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_models_careers_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/models/careers.model */ "./src/app/shared/models/careers.model.ts");



var CareersComponent = /** @class */ (function () {
    function CareersComponent() {
        this.careers = [
            new src_app_shared_models_careers_model__WEBPACK_IMPORTED_MODULE_2__["Careers"]('Head of business development', 'San Francisco Bay Area'),
            new src_app_shared_models_careers_model__WEBPACK_IMPORTED_MODULE_2__["Careers"]('.NET developer', 'Yerevan')
        ];
    }
    CareersComponent.prototype.ngOnInit = function () {
    };
    CareersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-careers',
            template: __webpack_require__(/*! ./careers.component.html */ "./src/app/auth/careers/careers.component.html"),
            styles: [__webpack_require__(/*! ./careers.component.css */ "./src/app/auth/careers/careers.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CareersComponent);
    return CareersComponent;
}());



/***/ }),

/***/ "./src/app/auth/home/home.component.css":
/*!**********************************************!*\
  !*** ./src/app/auth/home/home.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\r\n    text-decoration: none !important;\r\n    text-transform: uppercase !important;\r\n}\r\n\r\nsection.homePage__descriptionContainer {\r\n    min-height: 533px;\r\n    background-image: url('home-bg.jpg');\r\n    background-position: bottom;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    position: relative;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.homePage__layer {\r\n    height: 100%;\r\n    width: 100%;\r\n    background-color: rgba(0, 0, 0, .5);\r\n    display: block;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n}\r\n\r\n.homeDescr {\r\n    max-width: 90%;\r\n}\r\n\r\n.homeHeading {\r\n    font-size: 38px;\r\n    font-weight: 900;\r\n    line-height: 52px;\r\n}\r\n\r\n.homePage__descriptionText {\r\n    color: #fff;\r\n}\r\n\r\n.btnDescr--list {\r\n    display: flex;\r\n}\r\n\r\nsection.freeDemo {  \r\n    background-color: #f0f4f7;\r\n    padding: 30px 0;\r\n}\r\n\r\n.freeDemo__title {\r\n    font-size: 36px;\r\n    line-height: 44px;\r\n    color: #000;\r\n    font-weight: 800;\r\n    max-width: 80%;\r\n    margin: 0 auto;\r\n}\r\n\r\n.freeDemo__desc {\r\n    max-width: 820px;\r\n    color: #000;\r\n    margin: 0 auto  ;\r\n}\r\n\r\n.freeDemo__desc p {\r\n    font-size: 18px;\r\n    font-weight: 300;\r\n    line-height: 24px;\r\n    margin: 30px 0;\r\n}\r\n\r\n.fw700 {\r\n    font-weight: 700;\r\n}\r\n\r\n.homePage__functionsContainer {\r\n    background-color: #fff;\r\n    padding: 50px 0;\r\n}\r\n\r\n.ibFunctions__image {\r\n    height: 168px;\r\n    width: 168px;\r\n    max-width: 100%;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.ibFunctions__title {\r\n    color: #000;\r\n    font-size: 22px;\r\n    line-height: 28px;\r\n    font-weight: 700;\r\n    max-width: 360px;\r\n    margin: 10px auto 15px;\r\n}\r\n\r\n.ibFunctions__line {\r\n    display: block;\r\n    height: 2px;\r\n    max-width: 82px;\r\n    width: 100%;\r\n    border: none;\r\n    border-radius: 5px;\r\n    margin: 0 auto 10px;\r\n    background: #1565c0;\r\n}\r\n\r\n.ibFunctions__text {\r\n    font-size: 16px;\r\n    font-weight: 300;\r\n    line-height: 22px;\r\n    max-width: 360px;\r\n    margin: 0 auto;\r\n}\r\n\r\nsection.ibOffers {\r\n    padding: 40px 0;\r\n    font-size: 20px;\r\n    background-image: linear-gradient(0deg, #fff, #e6e6e6);\r\n    position: relative;\r\n}\r\n\r\n.ibOffers__title  {\r\n    font-size: 36px;\r\n    line-height: 44px;  \r\n    font-weight: 800;\r\n    margin-bottom: 40px;\r\n}\r\n\r\n.ibOffers__right--bgImage {\r\n    height: auto;\r\n    max-width: 100%;\r\n    width: 100%;\r\n    display: block;\r\n}\r\n\r\n@media (max-width: 991px) {\r\n    .ibOffers__list {\r\n        font-size: 18px;\r\n    }\r\n    .ibOffers__title  {\r\n        font-size: 24px;\r\n    }\r\n}\r\n\r\n@media (max-width: 767px) { \r\n    .homeHeading {\r\n        font-size: 24px;\r\n        line-height: 35px;\r\n        margin-bottom: 10px;\r\n    }\r\n    .homePage__descriptionText {\r\n        text-align: center;\r\n        margin-bottom: 20px;\r\n    }\r\n    .ibFunctions__title {\r\n        font-size: 18px;\r\n    }\r\n    .btnDescr--list {\r\n        justify-content: center;\r\n    }\r\n    .ibOffers__list {\r\n        margin-bottom: 30px;\r\n        font-size: 16px;\r\n    }\r\n    .ibOffers__right--bgImage {\r\n        max-width: 80%;\r\n        margin: 0 auto;\r\n    }\r\n    .homeDescr {\r\n        max-width: 100%;\r\n    } \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlDQUFpQztJQUNqQyxxQ0FBcUM7Q0FDeEM7O0FBRUQ7SUFDSSxrQkFBa0I7SUFDbEIscUNBQTZEO0lBQzdELDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2Qsb0JBQW9CO0NBQ3ZCOztBQUNEO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixPQUFPO0lBQ1AsUUFBUTtDQUNYOztBQUNEO0lBQ0ksZUFBZTtDQUNsQjs7QUFDRDtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0NBQ3JCOztBQUNEO0lBQ0ksWUFBWTtDQUNmOztBQUNEO0lBQ0ksY0FBYztDQUNqQjs7QUFFRDtJQUNJLDBCQUEwQjtJQUMxQixnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGVBQWU7Q0FDbEI7O0FBQ0Q7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGlCQUFpQjtDQUNwQjs7QUFDRDtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7Q0FDbEI7O0FBQ0Q7SUFDSSxpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSx1QkFBdUI7SUFDdkIsZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsbUJBQW1CO0NBQ3RCOztBQUNEO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQix1QkFBdUI7Q0FDMUI7O0FBQ0Q7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsb0JBQW9CO0NBQ3ZCOztBQUNEO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLHVEQUF1RDtJQUN2RCxtQkFBbUI7Q0FDdEI7O0FBQ0Q7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixlQUFlO0NBQ2xCOztBQUtEO0lBQ0k7UUFDSSxnQkFBZ0I7S0FDbkI7SUFDRDtRQUNJLGdCQUFnQjtLQUNuQjtDQUNKOztBQUVEO0lBQ0k7UUFDSSxnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLG9CQUFvQjtLQUN2QjtJQUNEO1FBQ0ksbUJBQW1CO1FBQ25CLG9CQUFvQjtLQUN2QjtJQUNEO1FBQ0ksZ0JBQWdCO0tBQ25CO0lBQ0Q7UUFDSSx3QkFBd0I7S0FDM0I7SUFDRDtRQUNJLG9CQUFvQjtRQUNwQixnQkFBZ0I7S0FDbkI7SUFDRDtRQUNJLGVBQWU7UUFDZixlQUFlO0tBQ2xCO0lBQ0Q7UUFDSSxnQkFBZ0I7S0FDbkI7Q0FDSiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5zZWN0aW9uLmhvbWVQYWdlX19kZXNjcmlwdGlvbkNvbnRhaW5lciB7XHJcbiAgICBtaW4taGVpZ2h0OiA1MzNweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9hdXRoSW1nL2hvbWUtYmcuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uaG9tZVBhZ2VfX2xheWVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNSk7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbn1cclxuLmhvbWVEZXNjciB7XHJcbiAgICBtYXgtd2lkdGg6IDkwJTtcclxufVxyXG4uaG9tZUhlYWRpbmcge1xyXG4gICAgZm9udC1zaXplOiAzOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MnB4O1xyXG59IFxyXG4uaG9tZVBhZ2VfX2Rlc2NyaXB0aW9uVGV4dCB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4uYnRuRGVzY3ItLWxpc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuc2VjdGlvbi5mcmVlRGVtbyB7ICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGY0Zjc7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDA7XHJcbn1cclxuXHJcbi5mcmVlRGVtb19fdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQ0cHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBtYXgtd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbi5mcmVlRGVtb19fZGVzYyB7XHJcbiAgICBtYXgtd2lkdGg6IDgyMHB4O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBtYXJnaW46IDAgYXV0byAgO1xyXG59XHJcbi5mcmVlRGVtb19fZGVzYyBwIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIG1hcmdpbjogMzBweCAwO1xyXG59XHJcbi5mdzcwMCB7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uaG9tZVBhZ2VfX2Z1bmN0aW9uc0NvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogNTBweCAwO1xyXG59XHJcblxyXG4uaWJGdW5jdGlvbnNfX2ltYWdlIHtcclxuICAgIGhlaWdodDogMTY4cHg7XHJcbiAgICB3aWR0aDogMTY4cHg7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuLmliRnVuY3Rpb25zX190aXRsZSB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIG1heC13aWR0aDogMzYwcHg7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0byAxNXB4O1xyXG59XHJcbi5pYkZ1bmN0aW9uc19fbGluZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgbWF4LXdpZHRoOiA4MnB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW46IDAgYXV0byAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzE1NjVjMDtcclxufVxyXG4uaWJGdW5jdGlvbnNfX3RleHQge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgbWF4LXdpZHRoOiAzNjBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG5zZWN0aW9uLmliT2ZmZXJzIHtcclxuICAgIHBhZGRpbmc6IDQwcHggMDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjZmZmLCAjZTZlNmU2KTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uaWJPZmZlcnNfX3RpdGxlICB7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDRweDsgIFxyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbn1cclxuXHJcbi5pYk9mZmVyc19fcmlnaHQtLWJnSW1hZ2Uge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuXHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAuaWJPZmZlcnNfX2xpc3Qge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuICAgIC5pYk9mZmVyc19fdGl0bGUgIHtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkgeyBcclxuICAgIC5ob21lSGVhZGluZyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuaG9tZVBhZ2VfX2Rlc2NyaXB0aW9uVGV4dCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcbiAgICAuaWJGdW5jdGlvbnNfX3RpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcbiAgICAuYnRuRGVzY3ItLWxpc3Qge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmliT2ZmZXJzX19saXN0IHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuICAgIC5pYk9mZmVyc19fcmlnaHQtLWJnSW1hZ2Uge1xyXG4gICAgICAgIG1heC13aWR0aDogODAlO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgfVxyXG4gICAgLmhvbWVEZXNjciB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgfSBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/auth/home/home.component.html":
/*!***********************************************!*\
  !*** ./src/app/auth/home/home.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"homePage__descriptionContainer\">\r\n    <span class=\"homePage__layer\"></span>\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6\"></div>\r\n            <div class=\"col-lg-6\">\r\n                <div class=\"homeDescr\">\r\n                    <h1 class=\"homeHeading homePage__descriptionText\">The Only End-To-End Business Development Platform For\r\n                        Professional\r\n                        Services Firms</h1>\r\n                    <div class=\"btnDescr--list\">\r\n                        <a mat-flat-button color=\"primary\" class=\"btn-lg m-r\" routerLink=\"/registration\">Get Free Trial</a>\r\n                        <a mat-flat-button color=\"accent\" class=\"btn-lg\">Contact Us</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<section class=\"freeDemo\">\r\n    <div class=\"container\">\r\n        <div class=\"freeDemo__wrapper\">\r\n            <h1 class=\"homeHeading text-center\">Our next generation business development solution</h1>\r\n            <div class=\"freeDemo__desc text-center\">\r\n                <p>addresses decades-long pain points experienced by professional service practitioners, and\r\n                    incorporates\r\n                    business development in their natural daily activities.</p>\r\n                <p class=\"emptyLine__homePage\"></p>\r\n                <p class=\"fw700\">Designed and built for professional service practitioners by practitioners.</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<section class=\"homePage__functionsContainer\">\r\n    <div class=\"container\">\r\n        <h1 class=\"text-center m-b-md homeHeading\">What IndexBoard Enables You to Do?</h1>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-4 text-center m-b-md\">\r\n                <img src=\"../../../assets/authImg/homeIcon/1.svg\" alt=\"icon1\" class=\"ibFunctions__image\">\r\n                <h5 class=\"ibFunctions__title\">REAL-TIME DATA</h5>\r\n                <span class=\"ibFunctions__line\"></span>\r\n                <p class=\"ibFunctions__text text-center\">Capture relevant market opportunities consistently and\r\n                    real-time</p>\r\n            </div>\r\n            <div class=\"col-md-4 text-center m-b-md\">\r\n                <img src=\"../../../assets/authImg/homeIcon/2.svg\" alt=\"icon1\" class=\"ibFunctions__image\">\r\n                <h5 class=\"ibFunctions__title\">LEVERAGE TEAM</h5>\r\n                <span class=\"ibFunctions__line\"></span>\r\n                <p class=\"ibFunctions__text text-center\">\r\n                    Engage every professional in business development and leverage their network, resources and insight\r\n                </p>\r\n            </div>\r\n            <div class=\"col-md-4 text-center m-b-md\">\r\n                <img src=\"../../../assets/authImg/homeIcon/3.svg\" alt=\"icon1\" class=\"ibFunctions__image\">\r\n                <h5 class=\"ibFunctions__title\">BUSINESS CONTINUITY</h5>\r\n                <span class=\"ibFunctions__line\"></span>\r\n                <p class=\"ibFunctions__text text-center\">\r\n                    Preserve and transfer institutional knowledge\r\n                </p>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6 text-center m-b-md\">\r\n                <img src=\"../../../assets/authImg/homeIcon/4.svg\" alt=\"icon1\" class=\"ibFunctions__image\">\r\n                <h5 class=\"ibFunctions__title\">WORKFLOW AND RELATIONSHIP MANAGEMENT</h5>\r\n                <span class=\"ibFunctions__line\"></span>\r\n                <p class=\"ibFunctions__text text-center\">\r\n                    Manage business development from the initial contact to proposal within a single application\r\n                </p>\r\n            </div>\r\n            <div class=\"col-md-6 text-center m-b-md\">\r\n                <img src=\"../../../assets/authImg/homeIcon/5.svg\" alt=\"icon1\" class=\"ibFunctions__image\">\r\n                <h5 class=\"ibFunctions__title\">CONNECT DISPARATE DATA SETS</h5>\r\n                <span class=\"ibFunctions__line\"></span>\r\n                <p class=\"ibFunctions__text text-center\">\r\n                    Surface unique insights and key relationships by converging meaningful deep data and proprietary\r\n                    information\r\n                </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<section class=\"ibOffers\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <h1 class=\"homeHeading text-center\">IndexBoard Offers</h1>\r\n                <ul class=\"ibOffers__list\">\r\n                    <li>No more spreadsheets, emails and overwhelming manual work</li>\r\n                    <li>Clean and intuitive interface</li>\r\n                    <li>Real-time deep data from direct and authoritative sources</li>\r\n                    <li>The best from the synergy of Business Intelligence, Deep Data, CRM and Workflow Management</li>\r\n                    <li>Unique business development capabilities at an unbeatable value</li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"col-md-6 d-flex align-items-center\">\r\n                <img src=\"../../../assets/authImg/home-lab.png\" alt=\"Labirynth Image\" class=\"ibOffers__right--bgImage\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/auth/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/users.service */ "./src/app/shared/services/users.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(usersService) {
        this.usersService = usersService;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.myClick = function () {
        this.usersService.myLogin();
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/auth/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/auth/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/auth/how-it-works/how-it-works.component.css":
/*!**************************************************************!*\
  !*** ./src/app/auth/how-it-works/how-it-works.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\r\n    text-decoration: none !important;\r\n    text-transform: uppercase !important;\r\n}\r\n\r\nsection.hiwPage__descriptionContainer {\r\n    min-height: 533px;\r\n    background-image: url('works-Bg.jpg');\r\n    background-position: center -100px;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    position: relative;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.hiwPage__layer {\r\n    height: 100%;\r\n    width: 100%;\r\n    background-color: rgba(255, 255, 255, .6);\r\n    display: block;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n}\r\n\r\n.hiwPage--notebook {\r\n    height: 100%;\r\n    max-width: 100%;\r\n    width: 100%;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n}\r\n\r\n.descriptionContainer__text {\r\n    font-size: 38px;\r\n    line-height: 48px;\r\n    color: #000;\r\n    font-weight: 800;\r\n    margin: 0 0 12px;\r\n}\r\n\r\n.descriptionContainer__subtext {\r\n    font-size: 18px;\r\n    line-height: 22px;\r\n    margin-bottom: 22px;\r\n    padding-bottom: 10px;\r\n    font-weight: 400;\r\n}\r\n\r\n.infoSection {\r\n    margin-top: 40px;\r\n    margin-bottom: 40px;\r\n    padding-top: 25px;\r\n    padding-bottom: 25px;\r\n}\r\n\r\n.infoSection__wrapper {\r\n    border-bottom: 1px solid #dadada;\r\n    padding: 30px 0;\r\n}\r\n\r\n.infoSection__wrapper:last-child {\r\n    border-bottom: none;\r\n}\r\n\r\n.infoSection__image {\r\n    max-width: 100%;\r\n    width: 100%;\r\n    height: auto;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n}\r\n\r\n.infoSection__title {\r\n    max-width: 655px;\r\n    color: #000;\r\n    font-weight: 700;\r\n    font-size: 28px;\r\n    line-height: 34px;\r\n    position: relative;\r\n    margin-top: 50px;\r\n    margin-bottom: 0;\r\n}\r\n\r\n.infoSection__title img {\r\n    max-width: 100%;\r\n    height: 130px;\r\n    position: absolute;\r\n    left: 0;\r\n    bottom: -15px;\r\n    z-index: -1;\r\n}\r\n\r\n.infoSection__titleUnderline {\r\n    height: 2px;\r\n    width: 140px;\r\n    background-color: #366ca2;\r\n    margin: 10px 0 16px;\r\n}\r\n\r\n.infoSection__strongText {\r\n    font-size: 18px;\r\n    font-weight: 800;\r\n    margin: 5px 0;\r\n}\r\n\r\n.infoSection__ul {\r\n    list-style-type: disc;\r\n    margin-left: -23px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n@media (max-width: 767px) { \r\n    .descriptionContainer__text {\r\n        text-align: center;\r\n        margin-top: 30px;\r\n    }\r\n    .descriptionContainer__subtext {\r\n        text-align: center;\r\n    }\r\n    .ibButtons {\r\n        text-align: center;\r\n    }\r\n    section.hiwPage__descriptionContainer {\r\n        background-position: center;\r\n    }\r\n    .m-t100 {\r\n        margin-top: 100px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9ob3ctaXQtd29ya3MvaG93LWl0LXdvcmtzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQ0FBaUM7SUFDakMscUNBQXFDO0NBQ3hDOztBQUVEO0lBQ0ksa0JBQWtCO0lBQ2xCLHNDQUE4RDtJQUM5RCxtQ0FBbUM7SUFDbkMsNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLG9CQUFvQjtDQUN2Qjs7QUFDRDtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osMENBQTBDO0lBQzFDLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsT0FBTztJQUNQLFFBQVE7Q0FDWDs7QUFFRDtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLHFCQUFrQjtPQUFsQixrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUJBQWlCO0NBQ3BCOztBQUNEO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLGlCQUFpQjtDQUNwQjs7QUFDRDtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtDQUN4Qjs7QUFDRDtJQUNJLGlDQUFpQztJQUNqQyxnQkFBZ0I7Q0FDbkI7O0FBQ0Q7SUFDSSxvQkFBb0I7Q0FDdkI7O0FBQ0Q7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGFBQWE7SUFDYixxQkFBa0I7T0FBbEIsa0JBQWtCO0NBQ3JCOztBQUNEO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtDQUNwQjs7QUFDRDtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLFFBQVE7SUFDUixjQUFjO0lBQ2QsWUFBWTtDQUNmOztBQUNEO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsb0JBQW9CO0NBQ3ZCOztBQUNEO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixjQUFjO0NBQ2pCOztBQUNEO0lBQ0ksc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSTtRQUNJLG1CQUFtQjtRQUNuQixpQkFBaUI7S0FDcEI7SUFDRDtRQUNJLG1CQUFtQjtLQUN0QjtJQUNEO1FBQ0ksbUJBQW1CO0tBQ3RCO0lBQ0Q7UUFDSSw0QkFBNEI7S0FDL0I7SUFDRDtRQUNJLGtCQUFrQjtLQUNyQjtDQUNKIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9ob3ctaXQtd29ya3MvaG93LWl0LXdvcmtzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5zZWN0aW9uLmhpd1BhZ2VfX2Rlc2NyaXB0aW9uQ29udGFpbmVyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDUzM3B4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2F1dGhJbWcvd29ya3MtQmcuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIC0xMDBweDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmhpd1BhZ2VfX2xheWVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNik7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbn1cclxuXHJcbi5oaXdQYWdlLS1ub3RlYm9vayB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb25Db250YWluZXJfX3RleHQge1xyXG4gICAgZm9udC1zaXplOiAzOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQ4cHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBtYXJnaW46IDAgMCAxMnB4O1xyXG59XHJcbi5kZXNjcmlwdGlvbkNvbnRhaW5lcl9fc3VidGV4dCB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIycHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuLmluZm9TZWN0aW9uIHtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDI1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcclxufSBcclxuLmluZm9TZWN0aW9uX193cmFwcGVyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGFkYWRhO1xyXG4gICAgcGFkZGluZzogMzBweCAwO1xyXG59XHJcbi5pbmZvU2VjdGlvbl9fd3JhcHBlcjpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbn1cclxuLmluZm9TZWN0aW9uX19pbWFnZSB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcbi5pbmZvU2VjdGlvbl9fdGl0bGUge1xyXG4gICAgbWF4LXdpZHRoOiA2NTVweDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzNHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuLmluZm9TZWN0aW9uX190aXRsZSBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMzBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IC0xNXB4O1xyXG4gICAgei1pbmRleDogLTE7XHJcbn1cclxuLmluZm9TZWN0aW9uX190aXRsZVVuZGVybGluZSB7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIHdpZHRoOiAxNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNjZjYTI7XHJcbiAgICBtYXJnaW46IDEwcHggMCAxNnB4O1xyXG59XHJcbi5pbmZvU2VjdGlvbl9fc3Ryb25nVGV4dCB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgbWFyZ2luOiA1cHggMDtcclxufVxyXG4uaW5mb1NlY3Rpb25fX3VsIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogZGlzYztcclxuICAgIG1hcmdpbi1sZWZ0OiAtMjNweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkgeyBcclxuICAgIC5kZXNjcmlwdGlvbkNvbnRhaW5lcl9fdGV4dCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICB9XHJcbiAgICAuZGVzY3JpcHRpb25Db250YWluZXJfX3N1YnRleHQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5pYkJ1dHRvbnMge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIHNlY3Rpb24uaGl3UGFnZV9fZGVzY3JpcHRpb25Db250YWluZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5tLXQxMDAge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/auth/how-it-works/how-it-works.component.html":
/*!***************************************************************!*\
  !*** ./src/app/auth/how-it-works/how-it-works.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"hiwPage__descriptionContainer\">\n  <span class=\"hiwPage__layer\"></span>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-5 d-flex align-items-center\">\n        <div>\n          <p class=\"descriptionContainer__text\">How it Works</p>\n          <p class=\"descriptionContainer__subtext\">Learn how to make business development more productive with less\n            time.</p>\n          <div class=\"ibButtons\">\n            <a mat-flat-button color=\"primary\" class=\"btn-lg m-r\">Get Free Trial</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-7\">\n        <img src=\"../../../assets/authImg/works-noot.png\" alt=\"Notebook Image\" class=\"hiwPage--notebook\">\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"infoSection\">\n  <div class=\"container\">\n    <div class=\"row infoSection__wrapper d-flex align-items-center\">\n      <div class=\"col-md-7\">\n        <img src=\"../../../assets/authImg/works/Asset 9.png\" class=\"infoSection__image\">\n      </div>\n      <div class=\"col-md-5\">\n        <h2 class=\"infoSection__title m-t100\">Centralize your network\n          <img src=\"../../../assets/authImg/works/numbers/1.jpg\">\n        </h2>\n        <div class=\"infoSection__desc\">\n          <hr class=\"infoSection__titleUnderline\">\n          <p class=\"infoSection__text\">Relationships are critical for your business. Consolidate your network from\n            LinkedIn, CRM, Outlook, Gmail or a spreadsheet in one place.</p>\n          <p class=\"infoSection__strongText\">We Do The Rest For You</p>\n          <ul class=\"infoSection__ul\">\n            <li>Track and Update key relationships in real time</li>\n            <li>Match your network with opportunities</li>\n            <li>Connect the dots between previously disparate sets of data</li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"row infoSection__wrapper d-flex align-items-center\">\n      <div class=\"col-md-5\">\n        <h2 class=\"infoSection__title\">Capture relevant market opportunities consistently and in real-time\n          <img src=\"../../../assets/authImg/works/numbers/2.jpg\">\n        </h2>\n        <div class=\"infoSection__desc\">\n          <hr class=\"infoSection__titleUnderline\">\n          <p class=\"infoSection__text\">Get personalized hyper-targeted feeds for companies, key people and events based\n            on your strategic interests and preferences:</p>\n          <p class=\"infoSection__strongText\">We Do The Rest For You</p>\n          <ul class=\"infoSection__ul\">\n            <li>Any moment</li>\n            <li>Effortlessly</li>\n            <li>Consistently</li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-md-7\">\n        <img src=\"../../../assets/authImg/works/Asset 10.png\" class=\"infoSection__image\">\n      </div>\n    </div>\n    <div class=\"row infoSection__wrapper d-flex align-items-center\">\n      <div class=\"col-md-7\">\n        <img src=\"../../../assets/authImg/works/Asset 11.png\" class=\"infoSection__image\">\n      </div>\n      <div class=\"col-md-5\">\n        <h2 class=\"infoSection__title m-t100\">Centralize your network\n          <img src=\"../../../assets/authImg/works/numbers/3.jpg\">\n        </h2>\n        <div class=\"infoSection__desc\">\n          <hr class=\"infoSection__titleUnderline\">\n          <p class=\"infoSection__text\">Research opportunities with a click</p>\n          <p class=\"infoSection__strongText\">Surface unique insight and relationships thanks to our unique solution</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"row infoSection__wrapper d-flex align-items-center\">\n      <div class=\"col-md-5\">\n        <h2 class=\"infoSection__title\">Capture relevant market opportunities consistently and in real-time\n          <img src=\"../../../assets/authImg/works/numbers/4.jpg\">\n        </h2>\n        <div class=\"infoSection__desc\">\n          <hr class=\"infoSection__titleUnderline\">\n          <p class=\"infoSection__text\">Get personalized hyper-targeted feeds for companies, key people and events based\n            on your strategic interests and preferences:</p>\n          <p class=\"infoSection__strongText\">We Do The Rest For You</p>\n          <ul class=\"infoSection__ul\">\n            <li>Any moment</li>\n            <li>Effortlessly</li>\n            <li>Consistently</li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-md-7\">\n        <img src=\"../../../assets/authImg/works/Asset 12.png\" class=\"infoSection__image\">\n      </div>\n    </div>\n    <div class=\"row infoSection__wrapper d-flex align-items-center\">\n        <div class=\"col-md-7\">\n          <img src=\"../../../assets/authImg/works/Asset 13.png\" class=\"infoSection__image\">\n        </div>\n        <div class=\"col-md-5\">\n          <h2 class=\"infoSection__title m-t100\">Centralize your network\n            <img src=\"../../../assets/authImg/works/numbers/5.jpg\">\n          </h2>\n          <div class=\"infoSection__desc\">\n            <hr class=\"infoSection__titleUnderline\">\n            <p class=\"infoSection__text\">Research opportunities with a click</p>\n            <p class=\"infoSection__strongText\">Surface unique insight and relationships thanks to our unique solution</p>\n          </div>\n        </div>\n      </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/auth/how-it-works/how-it-works.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/auth/how-it-works/how-it-works.component.ts ***!
  \*************************************************************/
/*! exports provided: HowItWorksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowItWorksComponent", function() { return HowItWorksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HowItWorksComponent = /** @class */ (function () {
    function HowItWorksComponent() {
    }
    HowItWorksComponent.prototype.ngOnInit = function () {
    };
    HowItWorksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-how-it-works',
            template: __webpack_require__(/*! ./how-it-works.component.html */ "./src/app/auth/how-it-works/how-it-works.component.html"),
            styles: [__webpack_require__(/*! ./how-it-works.component.css */ "./src/app/auth/how-it-works/how-it-works.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HowItWorksComponent);
    return HowItWorksComponent;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loginBox {\r\n    max-width: 450px;\r\n    width: 100%;\r\n    margin: 30px auto;\r\n}\r\n.loginForm {\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n  }\r\n.example-full-width {\r\n    width: 100%;\r\n  }\r\n.form--btn {\r\n      display: flex;\r\n      justify-content: space-between;\r\n      align-items: center;\r\n  }\r\n.form--btn button, a {\r\n      width: 45%;\r\n      text-decoration: none;\r\n      outline: none;\r\n      text-transform: uppercase;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixrQkFBa0I7Q0FDckI7QUFDRDtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsWUFBWTtHQUNiO0FBRUQ7SUFDRSxZQUFZO0dBQ2I7QUFFRDtNQUNJLGNBQWM7TUFDZCwrQkFBK0I7TUFDL0Isb0JBQW9CO0dBQ3ZCO0FBRUQ7TUFDSSxXQUFXO01BQ1gsc0JBQXNCO01BQ3RCLGNBQWM7TUFDZCwwQkFBMEI7R0FDN0IiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW5Cb3gge1xyXG4gICAgbWF4LXdpZHRoOiA0NTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAzMHB4IGF1dG87XHJcbn1cclxuLmxvZ2luRm9ybSB7XHJcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmZvcm0tLWJ0biB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5mb3JtLS1idG4gYnV0dG9uLCBhIHtcclxuICAgICAgd2lkdGg6IDQ1JTtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loginBox\">\n  <div class=\"form-group\">\n    <div class=\"loginBox__header\">\n      <h2 class=\"text-center loginh2 loginBox__title\">Log In</h2>\n    </div>\n  </div>\n  <form \n    class=\"loginForm\" \n    novalidate=\"novalidate\" \n    #loginForm=\"ngForm\" \n    [formGroup]=\"logForm\"\n    (ngSubmit)=\"onSubmit(loginForm)\"\n  >\n    <div class=\"loginForm__fields\">\n      <div class=\"form-group\">\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\">\n          <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n            Please enter a valid email address\n          </mat-error>\n          <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n            Email is <strong>required</strong>\n          </mat-error>\n        </mat-form-field>\n      </div>\n      <div class=\"form-group\">\n        <mat-form-field class=\"example-full-width\">\n          <input type=\"password\" matInput placeholder=\"Password\" [formControl]=\"passwordFormControl\">\n          <mat-error *ngIf=\"passwordFormControl.hasError('password') && !passwordFormControl.hasError('required')\">\n            Please enter a valid email address\n          </mat-error>\n          <mat-error *ngIf=\"passwordFormControl.hasError('required')\">\n            Password is <strong>required</strong>\n          </mat-error>\n        </mat-form-field>\n      </div>\n    </div>\n    <div class=\"form-group form--btn\">\n      <button \n        type=\"submit\" \n        [disabled]=\"!loginForm.valid\" \n        mat-flat-button \n        color=\"accent\"\n      >\n      Login</button>\n      <button mat-button class=\"btn--greenTransparent\" color=\"accent\" routerLink=\"/registration\">Get Free\n        Account</button>\n    </div>\n    <div class=\"\">\n      <div class=\"form-group text-center\">\n        <a mat-button color=\"primary\">Forgot your password?</a>\n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_animations_fade_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/animations/fade.animation */ "./src/app/shared/animations/fade.animation.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]);
        this.passwordFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.logForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            "email": this.emailFormControl,
            "password": this.passwordFormControl
        });
    };
    LoginComponent.prototype.onSubmit = function (loginForm) {
        if (loginForm.value.email == 'asd@mail.ru' && loginForm.value.password == 'qwerty') {
            this.router.navigate(['/system']);
        }
        else {
            console.log('sxala mi ban');
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'wfm-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            animations: [_shared_animations_fade_animation__WEBPACK_IMPORTED_MODULE_4__["fadeStateTrigger"]],
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/registration/registration.component.css":
/*!**************************************************************!*\
  !*** ./src/app/auth/registration/registration.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loginBox {\r\n    max-width: 450px;\r\n    width: 100%;\r\n    margin: 30px auto;\r\n}\r\n.loginForm {\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n  }\r\n.example-full-width {\r\n    width: 100%;\r\n  }\r\n.form--btn {\r\n      display: flex;\r\n      justify-content: space-between;\r\n      flex-direction: column;\r\n      align-items: center;\r\n  }\r\n.form--btn button, a {\r\n      width: 100%;\r\n      text-decoration: none;\r\n      text-transform: uppercase;\r\n      margin: 10px auto;\r\n      outline: none;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGtCQUFrQjtDQUNyQjtBQUNEO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixZQUFZO0dBQ2I7QUFFRDtJQUNFLFlBQVk7R0FDYjtBQUVEO01BQ0ksY0FBYztNQUNkLCtCQUErQjtNQUMvQix1QkFBdUI7TUFDdkIsb0JBQW9CO0dBQ3ZCO0FBRUQ7TUFDSSxZQUFZO01BQ1osc0JBQXNCO01BQ3RCLDBCQUEwQjtNQUMxQixrQkFBa0I7TUFDbEIsY0FBYztHQUNqQiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luQm94IHtcclxuICAgIG1heC13aWR0aDogNDUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMzBweCBhdXRvO1xyXG59XHJcbi5sb2dpbkZvcm0ge1xyXG4gICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5mb3JtLS1idG4ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuZm9ybS0tYnRuIGJ1dHRvbiwgYSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/auth/registration/registration.component.html":
/*!***************************************************************!*\
  !*** ./src/app/auth/registration/registration.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loginBox\">\n  <div class=\"form-group\">\n    <div class=\"loginBox__header\">\n      <h2 class=\"text-center loginh2 loginBox__title\">Get Free Account</h2>\n    </div>\n  </div>\n  <form class=\"loginForm\" novalidate=\"novalidate\" #regForm=\"ngForm\" [formGroup]=\"registrationForm\"\n    (ngSubmit)=\"onSubmit(regForm)\">\n    <div class=\"loginForm__fields\">\n      <div class=\"form-group\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <mat-form-field class=\"example-full-width\">\n              <input matInput placeholder=\"First Name *\" [formControl]=\"firstNameFormControl\">\n              <mat-error *ngIf=\"firstNameFormControl.hasError('required')\">\n                First name is <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-6\">\n            <mat-form-field class=\"example-full-width\">\n              <input matInput placeholder=\"Last Name *\" [formControl]=\"lastNameFormControl\">\n              <mat-error *ngIf=\"lastNameFormControl.hasError('required')\">\n                Last name is <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <mat-form-field class=\"example-full-width\">\n              <input matInput placeholder=\"Company Name *\" [formControl]=\"companyNameFormControl\">\n              <mat-error *ngIf=\"companyNameFormControl.hasError('required')\">\n                Company name is <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-6\">\n            <mat-form-field class=\"example-full-width\">\n              <input type=\"number\" matInput placeholder=\"Phone Number *\" [formControl]=\"phoneNumberFormControl\">\n              <mat-error *ngIf=\"phoneNumberFormControl.hasError('required')\">\n                Phone number is <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Work Email Address *\" [formControl]=\"workEmailFormControl\">\n          <mat-error *ngIf=\"workEmailFormControl.hasError('email') && !workEmailFormControl.hasError('required')\">\n            Please enter a valid email address\n          </mat-error>\n          <mat-error *ngIf=\"workEmailFormControl.hasError('required')\">\n            Email is <strong>required</strong>\n          </mat-error>\n        </mat-form-field>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <mat-form-field class=\"example-full-width\">\n              <input type=\"password\" matInput placeholder=\"Password *\" [formControl]=\"passwordFormControl\">\n              <mat-error *ngIf=\"passwordFormControl.hasError('required')\">\n                Password is <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-6\">\n            <mat-form-field class=\"example-full-width\">\n              <input type=\"password\" matInput placeholder=\"Confirm Password *\" [formControl]=\"passwordConfirmFormControl\">\n              <!-- <mat-error *ngIf=\"passwordConfirmFormControl.hasError('required')\">\n                  Password is <strong>required</strong>\n              </mat-error> -->\n              <mat-error *ngIf=\"passwordConfirmFormControl.hasError('mismatch')\">\n                Password does not match the confirm password\n              </mat-error>\n              <mat-error *ngIf=\"passwordConfirmFormControl.hasError('required')\">\n                  Confirm Password is <strong>required</strong>\n                </mat-error>\n            </mat-form-field>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group form--btn\">\n      <button type=\"submit\" mat-flat-button color=\"accent\" [disabled]=\"!regForm.valid\" >Create Account</button>\n      <a mat-button color=\"accent\" routerLink=\"/login\">Login</a>\n    </div>\n    <div class=\"\">\n      <div class=\"form-group text-center\">\n        <a mat-button color=\"primary\">Forgot your password?</a>\n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/auth/registration/registration.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/auth/registration/registration.component.ts ***!
  \*************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent() {
        this.firstNameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.lastNameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.companyNameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.phoneNumberFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.workEmailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]);
        this.passwordFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.passwordConfirmFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.registrationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            "firstName": this.firstNameFormControl,
            "lastName": this.passwordFormControl,
            "companyName": this.companyNameFormControl,
            "phoneNumber": this.phoneNumberFormControl,
            "workEmail": this.workEmailFormControl,
            "password": this.passwordFormControl,
            "confirmPassword": this.passwordConfirmFormControl
        });
        this.registrationForm.valueChanges.subscribe(function (field) {
            if (field.password !== field.confirmPassword) {
                _this.passwordConfirmFormControl.setErrors({ mismatch: true });
            }
            else {
                _this.passwordConfirmFormControl.setErrors(null);
            }
        });
    };
    // onSubmit() {
    //   const {email, password, name} = this.form.value;
    //   const user = new User(email, password, name);
    //   this.usersService.createNewUser(user)
    //     .subscribe(() => {
    //       this.router.navigate(['/login'], {
    //         queryParams: {
    //           nowCanLogin: true
    //         }
    //       });
    //     });
    // }
    // forbiddenEmails(control: FormControl) {
    //   return new Promise((resolve, reject) => {
    //     this.usersService.getUserByEmail(control.value)
    //       .subscribe((user: User) => {
    //         if (user) {
    //           resolve({forbiddenEmail: true});
    //         } else {
    //           resolve(null);
    //         }
    //       });
    //   });
    // }
    RegistrationComponent.prototype.onSubmit = function (regForm) {
        console.log(regForm.value);
    };
    RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'wfm-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/auth/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.css */ "./src/app/auth/registration/registration.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/shared/animations/fade.animation.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/animations/fade.animation.ts ***!
  \*****************************************************/
/*! exports provided: fadeStateTrigger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeStateTrigger", function() { return fadeStateTrigger; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var fadeStateTrigger = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fade', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(500)
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1
    })))
]);


/***/ }),

/***/ "./src/app/shared/components/loader/loader.component.css":
/*!***************************************************************!*\
  !*** ./src/app/shared/components/loader/loader.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes pace-spinner {\r\n  from{\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n  to{\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@keyframes pace-spinner {\r\n  from{\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n  to{\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n.loader-animator{\r\n  display: block;\r\n  -webkit-animation: pace-spinner 400ms linear infinite;\r\n          animation: pace-spinner 400ms linear infinite;\r\n  border-color: rgba(0, 0, 0, 0.4) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0.4);\r\n  -o-border-image: none;\r\n     border-image: none;\r\n  border-radius: 50%;\r\n  border-right: 2px solid rgba(0, 0, 0, 0) !important;\r\n  border-style: solid;\r\n  border-width: 2px;\r\n  height: 16px;\r\n  width: 16px;\r\n  margin: auto;\r\n  z-index: 2000;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSxnQ0FBd0I7WUFBeEIsd0JBQXdCO0dBQ3pCO0VBQ0Q7SUFDRSxrQ0FBMEI7WUFBMUIsMEJBQTBCO0dBQzNCO0NBQ0Y7O0FBUEQ7RUFDRTtJQUNFLGdDQUF3QjtZQUF4Qix3QkFBd0I7R0FDekI7RUFDRDtJQUNFLGtDQUEwQjtZQUExQiwwQkFBMEI7R0FDM0I7Q0FDRjs7QUFFRDtFQUNFLGVBQWU7RUFDZixzREFBOEM7VUFBOUMsOENBQThDO0VBQzlDLHNGQUFzRjtFQUN0RixzQkFBbUI7S0FBbkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixvREFBb0Q7RUFDcEQsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixjQUFjO0NBQ2YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAa2V5ZnJhbWVzIHBhY2Utc3Bpbm5lciB7XHJcbiAgZnJvbXtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICB0b3tcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG4ubG9hZGVyLWFuaW1hdG9ye1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGFuaW1hdGlvbjogcGFjZS1zcGlubmVyIDQwMG1zIGxpbmVhciBpbmZpbml0ZTtcclxuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KSByZ2JhKDAsIDAsIDAsIDApIHJnYmEoMCwgMCwgMCwgMCkgcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gIGJvcmRlci1pbWFnZTogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwKSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgaGVpZ2h0OiAxNnB4O1xyXG4gIHdpZHRoOiAxNnB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB6LWluZGV4OiAyMDAwO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/components/loader/loader.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/loader/loader.component.ts ***!
  \**************************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
    }
    LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'wfm-loader',
            template: "<div class=\"loader-animator\"></div>",
            styles: [__webpack_require__(/*! ./loader.component.css */ "./src/app/shared/components/loader/loader.component.css")]
        })
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/not-found/not-found.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/shared/components/not-found/not-found.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".not-found {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100vw;\r\n  height: 100vh;\r\n\r\n\r\n}\r\n.not-found  h1 {\r\n  color: red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLHdCQUF3QjtFQUN4QixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLGNBQWM7OztDQUdmO0FBQ0Q7RUFDRSxXQUFXO0NBQ1oiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm90LWZvdW5kIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcblxyXG5cclxufVxyXG4ubm90LWZvdW5kICBoMSB7XHJcbiAgY29sb3I6IHJlZDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/shared/components/not-found/not-found.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/not-found/not-found.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"not-found\">\n  <div class=\"text-center\">\n    <h1>Страница не найдена</h1>\n    <a [routerLink]=\"['/login']\">Перейти на логин</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/not-found/not-found.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/not-found/not-found.component.ts ***!
  \********************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'wfm-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/shared/components/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/shared/components/not-found/not-found.component.css")]
        })
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/shared/core/base-api.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/core/base-api.ts ***!
  \*****************************************/
/*! exports provided: BaseApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseApi", function() { return BaseApi; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var BaseApi = /** @class */ (function () {
    function BaseApi(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:53833/';
    }
    BaseApi.prototype.getUrl = function (url) {
        if (url === void 0) { url = ''; }
        return this.baseUrl + url;
    };
    BaseApi.prototype.get = function (url) {
        if (url === void 0) { url = ''; }
        return this.http.get(this.getUrl(url))
            .subscribe(function (response) { return response.json(); });
    };
    BaseApi.prototype.post = function (url, data) {
        if (url === void 0) { url = ''; }
        if (data === void 0) { data = {}; }
        return this.http.post(this.getUrl(url), data)
            .subscribe(function (response) { return response.json(); });
    };
    BaseApi.prototype.put = function (url, data) {
        if (url === void 0) { url = ''; }
        if (data === void 0) { data = {}; }
        return this.http.put(this.getUrl(url), data)
            .subscribe(function (response) { return response.json(); });
    };
    BaseApi = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BaseApi);
    return BaseApi;
}());



/***/ }),

/***/ "./src/app/shared/models/careers.model.ts":
/*!************************************************!*\
  !*** ./src/app/shared/models/careers.model.ts ***!
  \************************************************/
/*! exports provided: Careers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Careers", function() { return Careers; });
var Careers = /** @class */ (function () {
    function Careers(role, address) {
        this.role = role;
        this.address = address;
    }
    return Careers;
}());



/***/ }),

/***/ "./src/app/shared/models/nav-bar.model.ts":
/*!************************************************!*\
  !*** ./src/app/shared/models/nav-bar.model.ts ***!
  \************************************************/
/*! exports provided: navBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navBar", function() { return navBar; });
var navBar = [
    {
        name: "Home",
        routerLinkActive: 'active',
        routerLink: '/home',
    },
    {
        name: "how it works",
        routerLinkActive: 'active',
        routerLink: '/howItWork',
    },
    {
        name: "about",
        routerLinkActive: 'active',
        routerLink: '/about',
    },
    {
        name: "careers",
        routerLinkActive: 'active',
        routerLink: '/careers',
    },
    {
        name: "login",
        routerLinkActive: 'active',
        routerLink: '/login',
    }
];


/***/ }),

/***/ "./src/app/shared/services/auth.guard.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/services/auth.guard.ts ***!
  \***********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/shared/services/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login'], {
                queryParams: {
                    accessDenied: true
                }
            });
            return false;
        }
    };
    AuthGuard.prototype.canActivateChild = function (childRoute, state) {
        return this.canActivate(childRoute, state);
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/services/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
var AuthService = /** @class */ (function () {
    function AuthService() {
        this.isAuthenticated = false;
    }
    AuthService.prototype.login = function () {
        this.isAuthenticated = true;
    };
    AuthService.prototype.logout = function () {
        this.isAuthenticated = false;
        window.localStorage.clear();
    };
    AuthService.prototype.isLoggedIn = function () {
        return this.isAuthenticated;
    };
    return AuthService;
}());



/***/ }),

/***/ "./src/app/shared/services/users.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/users.service.ts ***!
  \**************************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_base_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/base-api */ "./src/app/shared/core/base-api.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var UsersService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UsersService, _super);
    function UsersService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        return _this;
    }
    UsersService.prototype.getUserByEmail = function (email) {
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
        params.append('username', "user");
        params.append('password', "tempP@ss123");
        params.append('grant_type', "password");
        params.append('scope', "openid email phone profile offline_access roles");
        var requestBody = params.toString();
        return this.post("connect/token", requestBody);
        // .map((users: User[]) => users[0] ? users[0] : undefined);
    };
    UsersService.prototype.myLogin = function () {
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
        params.append('username', "user");
        params.append('password', "tempP@ss123");
        params.append('grant_type', "password");
        params.append('scope', "openid email phone profile offline_access roles");
        var requestBody = params.toString();
        return this.http.post('http://localhost:4200/connect/token', requestBody).subscribe(function (value) { return console.log(value); });
    };
    UsersService.prototype.createNewUser = function (user) {
        return this.post('users', user);
    };
    UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], UsersService);
    return UsersService;
}(_core_base_api__WEBPACK_IMPORTED_MODULE_2__["BaseApi"]));



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/loader/loader.component */ "./src/app/shared/components/loader/loader.component.ts");



;

var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_3__["LoaderComponent"]],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            ],
            exports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_3__["LoaderComponent"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\shahb\OneDrive\Desktop\IndexBoard\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map