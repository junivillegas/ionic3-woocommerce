webpackJsonp([3],{

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetails; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_woocommerce_woocommerce__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductDetails = (function () {
    function ProductDetails(navCtrl, navParams, wooProvider, translate) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.wooProvider = wooProvider;
        this.translate = translate;
        this.reviews = [];
        this.wooCommerce = wooProvider.WooCommerce;
        this.product = this.navParams.get("product");
        if (this.product) {
            //Get reviews
            this.wooCommerce.getAsync('products/' + this.product.id + '/reviews')
                .then(function (data) {
                _this.reviews = JSON.parse(data.body);
            }, function (err) {
                console.log(err);
            });
        }
    }
    //Slider options
    ProductDetails.prototype.ngAfterViewInit = function () {
        this.slides.autoHeight = true;
        this.slides.pager = true;
        this.slides.autoplay = 3000;
        this.slides.loop = true;
    };
    return ProductDetails;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */])
], ProductDetails.prototype, "slides", void 0);
ProductDetails = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({ selector: 'page-product-details',template:/*ion-inline-start:"/Users/jaiville/Proyects/Personal/ionic3-woocommerce/src/pages/product-details/product-details.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{ product.name | translate}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-card>\n\n    <ion-slides #slides>\n      <ion-slide *ngFor="let image of product.images">\n        <img-loader src="{{image.src}}" useImg></img-loader>\n      </ion-slide>\n    </ion-slides>\n\n    <ion-card-content>\n      <ion-card-title>\n        <ion-chip color="dark" *ngFor="let cat of product.categories" center>\n          <ion-label color="light"> {{ cat.name }} </ion-label>\n        </ion-chip>\n      </ion-card-title>\n\n      <p *ngIf="product.short_description" [innerHTML]="product.short_description"></p>\n\n      <button ion-button icon-left block outline color="danger">\n        <ion-icon name="basket"></ion-icon> Precio {{product.price}}\n      </button>\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card *ngIf="reviews.length > 0">\n    <ion-card-content>\n      <ion-card-title>\n        {{ REVIEWS | translate }}\n      </ion-card-title>\n\n      <ion-grid>\n        <ion-row *ngFor="let review of reviews">\n          <ion-col col-4>\n            <b>{{ review.reviewer_name }}</b>\n            <br/>\n            <span *ngIf="review.rating >= 1">\n              <ion-icon style="color: #d4af37" small name="star"></ion-icon>\n            </span>\n            <span *ngIf="review.rating >= 2">\n              <ion-icon style="color: #d4af37" small name="star"></ion-icon>\n            </span>\n            <span *ngIf="review.rating >= 3">\n              <ion-icon style="color: #d4af37" small name="star"></ion-icon>\n            </span>\n            <span *ngIf="review.rating >= 4">\n              <ion-icon style="color: #d4af37" small name="star"></ion-icon>\n            </span>\n            <span *ngIf="review.rating >= 5">\n              <ion-icon style="color: #d4af37" small name="star"></ion-icon>\n            </span>\n\n          </ion-col>\n          <ion-col col-8>\n            {{ review.review }}\n          </ion-col>\n\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/jaiville/Proyects/Personal/ionic3-woocommerce/src/pages/product-details/product-details.html"*/ }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_woocommerce_woocommerce__["a" /* WooCommerceProvider */],
        __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
], ProductDetails);

//# sourceMappingURL=product-details.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsByCategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_details_product_details__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_woocommerce_woocommerce__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ProductsByCategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductsByCategoryPage = (function () {
    function ProductsByCategoryPage(navCtrl, navParams, wooProvider, zone, loadingCtrl, translate) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.wooProvider = wooProvider;
        this.zone = zone;
        this.loadingCtrl = loadingCtrl;
        this.translate = translate;
        //Loading
        this.loading = this.loadingCtrl.create();
        this.translate.get("LOADING").subscribe(function (value) {
            _this.zone.run(function () { return (_this.loading.setContent(value)); });
        });
        this.wooCommerce = wooProvider.WooCommerce;
        if (this.wooCommerce) {
            this.getProductos();
        }
    }
    ProductsByCategoryPage.prototype.getProductos = function () {
        var _this = this;
        //Show Loading
        this.loading.present();
        this.page = 1;
        this.category = this
            .navParams
            .get("category");
        this
            .wooCommerce
            .getAsync("products?filter[category]=" + this.category.slug)
            .then(function (data) {
            _this.products = JSON.parse(data.body);
            //Hide loading
            _this.loading.dismiss();
        }, function (err) {
            console.log(err);
            //Hide loading
            _this.loading.dismiss();
        });
    };
    ProductsByCategoryPage.prototype.loadMoreProducts = function (event) {
        var _this = this;
        this.page++;
        this
            .wooCommerce
            .getAsync("products?filter[category]=" + this.category.slug + "&page=" + this.page)
            .then(function (data) {
            var temp = (JSON.parse(data.body));
            _this.products = _this
                .products
                .concat(JSON.parse(data.body));
            event.complete();
            if (temp.length < 10)
                event.enable(false);
        });
    };
    ProductsByCategoryPage.prototype.openProductPage = function (product) {
        this
            .navCtrl
            .push(__WEBPACK_IMPORTED_MODULE_3__product_details_product_details__["a" /* ProductDetails */], { "product": product });
    };
    return ProductsByCategoryPage;
}());
ProductsByCategoryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({ selector: 'page-products-by-category',template:/*ion-inline-start:"/Users/jaiville/Proyects/Personal/ionic3-woocommerce/src/pages/products-by-category/products-by-category.html"*/'<!--\n  Generated template for the ProductsListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n      <ion-title>{{ category.name }}</ion-title>\n    </ion-navbar>\n\n  </ion-header>\n\n<ion-content>\n    <ion-list>\n        <ion-item *ngFor="let product of products" text-wrap (click)="openProductPage(product)">\n            <ion-thumbnail item-left>\n                <img-loader useImg *ngIf="product.images" src="{{product.images[0].src}}" useImg></img-loader>\n            </ion-thumbnail>\n\n            <h2> {{ product.title }} </h2>\n\n            <p>\n                <span [innerHTML]="product.short_description.substr(0, 50) + \'...\'"></span>\n                <span [innerHTML]="product.price_html"></span>\n            </p>\n\n            <button ion-button icon clear item-right>\n              <ion-icon name="arrow-forward"></ion-icon>\n            </button>\n        </ion-item>\n    </ion-list>\n    <ion-infinite-scroll (ionInfinite)="loadMoreProducts($event)">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/Users/jaiville/Proyects/Personal/ionic3-woocommerce/src/pages/products-by-category/products-by-category.html"*/ }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__providers_woocommerce_woocommerce__["a" /* WooCommerceProvider */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
], ProductsByCategoryPage);

//# sourceMappingURL=products-by-category.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_woocommerce_woocommerce__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__products_by_category_products_by_category__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductsListPage = (function () {
    function ProductsListPage(navCtrl, navParams, wooProvider, zone, loadingCtrl, translate) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.wooProvider = wooProvider;
        this.zone = zone;
        this.loadingCtrl = loadingCtrl;
        this.translate = translate;
        //Create loading
        this.loading = this.loadingCtrl.create();
        this.translate.get("LOADING").subscribe(function (value) {
            _this.zone.run(function () { return (_this.loading.setContent(value)); });
        });
        this.wooCommerce = wooProvider.WooCommerce;
        if (this.wooCommerce) {
            this.getCategories();
        }
    }
    ProductsListPage.prototype.getCategories = function () {
        var _this = this;
        //Show Loading
        this.loading.present();
        this.wooCommerce.getAsync("products/categories").then(function (data) {
            //Hide loading
            _this.loading.dismiss();
            _this.zone.run(function () { return (_this.categories = JSON.parse(data.body)); });
        }, function (err) {
            //Hide loading
            _this.loading.dismiss();
            console.log(err);
        });
    };
    ProductsListPage.prototype.openCategoryPage = function (category) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__products_by_category_products_by_category__["a" /* ProductsByCategoryPage */], { category: category });
    };
    return ProductsListPage;
}());
ProductsListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: "page-products-list",template:/*ion-inline-start:"/Users/jaiville/Proyects/Personal/ionic3-woocommerce/src/pages/products-list/products-list.html"*/'<!-- Header -->\n<ion-header>\n  <ion-toolbar color="secondary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title center>Products</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item text-wrap *ngFor="let category of categories" (click)="openCategoryPage(category)">\n      <ion-thumbnail item-start >\n        <img-loader *ngIf="category.image.length != 0" useImg src="{{category.image.src}}" useImg></img-loader>\n      </ion-thumbnail>\n\n      <h2> {{ category.name }} </h2>\n      <p> {{ category.description }}</p>\n    </ion-item>\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/jaiville/Proyects/Personal/ionic3-woocommerce/src/pages/products-list/products-list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_woocommerce_woocommerce__["a" /* WooCommerceProvider */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
], ProductsListPage);

//# sourceMappingURL=products-list.js.map

/***/ }),

/***/ 209:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 209;

/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/product-details/product-details.module": [
		670,
		2
	],
	"../pages/products-by-category/products-by-category.module": [
		671,
		1
	],
	"../pages/products-list/products-list.module": [
		672,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 250;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdmobProProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_admob_pro__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the AdMobPro provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var AdmobProProvider = (function () {
    function AdmobProProvider(platform, adMobPro) {
        var _this = this;
        this.platform = platform;
        this.adMobPro = adMobPro;
        console.log("Hello Admobpro Provider");
        platform.ready().then(function () {
            _this.admobId = {};
            if (_this.platform.is("android")) {
                _this.admobId = {
                    // for Android
                    banner: "ca-app-pub-XXXXXXXX",
                    interstitial: "ca-app-pub-XXXXXXXX",
                    nativo: "ca-app-pub-XXXXXXXX"
                };
            }
            if (_this.platform.is("ios")) {
                _this.admobId = {
                    // for iOS
                    banner: "ca-app-pub-XXXXXXXX",
                    interstitial: "ca-app-pub-XXXXXXXX",
                    nativo: "ca-app-pub-XXXXXXXX"
                };
            }
            if (_this.platform.is("ios") || _this.platform.is("android")) {
                _this.init();
            }
            else {
                console.log('Only working in devices');
            }
        });
    }
    AdmobProProvider.prototype.init = function () {
        console.log("AdMobPro init");
        if (!this.adMobPro) {
            console.log("No AdMob?");
            return;
        }
        // Register AdMob events
        // new events, with variable to differentiate: adNetwork, adType, adEvent
        document.addEventListener("onAdFailLoad", function (data) {
            console.log("onAdFailLoad: " + JSON.stringify(data));
        });
        document.addEventListener("onAdLoaded", function (data) {
            console.log("onAdLoaded: " + JSON.stringify(data));
        });
        document.addEventListener("onAdPresent", function (data) {
            console.log("onAdPresent: " + JSON.stringify(data));
        });
        document.addEventListener("onAdLeaveApp", function (data) {
            console.log("onAdLeaveApp: " + JSON.stringify(data));
        });
        document.addEventListener("onAdDismiss", function (data) {
            console.log("onAdDismiss: " + JSON.stringify(data));
        });
        this.admobObtions = {
            // bannerId: admobid.banner,
            // interstitialId: admobid.interstitial,
            adSize: 'SMART_BANNER',
            // width: integer, // valid when set adSize 'CUSTOM'
            // height: integer, // valid when set adSize 'CUSTOM'
            position: this.adMobPro.AD_POSITION.BOTTOM_CENTER,
            // offsetTopBar: false, // avoid overlapped by status bar, for iOS7+
            bgColor: 'black',
            // x: integer,     // valid when set position to 0 / POS_XY
            // y: integer,     // valid when set position to 0 / POS_XY
            isTesting: false,
            autoShow: true // auto show interstitial ad when loaded, set to false if prepare/show
        };
        this.adMobPro.setOptions(this.admobObtions);
        this.showBanner();
    };
    AdmobProProvider.prototype.showInterstitial = function () {
        if (!this.adMobPro) {
            return false;
        }
        console.log("showInterstitial");
        this.adMobPro.prepareInterstitial({
            adId: this.admobId.interstitial,
            autoShow: this.admobObtions.autoShow
        });
        return true;
    };
    AdmobProProvider.prototype.showBanner = function () {
        if (!this.adMobPro) {
            return false;
        }
        this.adMobPro.createBanner({
            adId: this.admobId.banner,
            position: this.admobObtions.position,
            autoShow: this.admobObtions.autoShow
        });
        return true;
    };
    AdmobProProvider.prototype.removeAds = function () {
        if (this.adMobPro) {
            this.adMobPro.removeBanner();
        }
    };
    return AdmobProProvider;
}());
AdmobProProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_admob_pro__["a" /* AdMobPro */]])
], AdmobProProvider);

//# sourceMappingURL=admob-pro.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_woocommerce_woocommerce__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_admob_pro_admob_pro__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_details_product_details__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    function HomePage(navCtrl, navParams, wooProvider, toastCtrl, loadingCtrl, adMobPro, zone, translate) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.wooProvider = wooProvider;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.adMobPro = adMobPro;
        this.zone = zone;
        this.translate = translate;
        //Create loading
        this.loading = this.loadingCtrl.create();
        this.translate.get("LOADING").subscribe(function (value) {
            _this.zone.run(function () { return (_this.loading.setContent(value)); });
        });
        //Load Products
        this.wooCommerce = wooProvider.WooCommerce;
        //Load more products
        if (this.wooCommerce) {
            this.loadProducts();
        }
    }
    HomePage.prototype.loadProducts = function () {
        var _this = this;
        //Show Loading
        this.loading.present();
        this.page = 1;
        this.loadMoreProducts(null);
        this.wooCommerce
            .getAsync("products?status=publish&in_stock=true&featured=true")
            .then(function (data) {
            //Hide loading
            _this.loading.dismiss();
            _this.products = JSON.parse(data.body);
        }, function (err) {
            //Hide Loading
            _this.loading.dismiss();
            console.log(err);
        });
    };
    //Function to load more products
    HomePage.prototype.loadMoreProducts = function (event) {
        var _this = this;
        if (event == null) {
            this.page = 2;
            this.moreProducts = [];
        }
        else {
            this.page++;
        }
        this.wooCommerce
            .getAsync("products?status=publish&in_stock=true&page=" + this.page)
            .then(function (data) {
            _this.moreProducts = _this.moreProducts.concat(JSON.parse(data.body));
            if (event != null) {
                event.complete();
            }
            if (JSON.parse(data.body).length < 10) {
                event.enable(false);
                _this.toastCtrl
                    .create({ message: "No more products!", duration: 5000 })
                    .present();
            }
        }, function (err) {
            console.log(err);
        });
    };
    //Open New page
    HomePage.prototype.openProductPage = function (product) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__product_details_product_details__["a" /* ProductDetails */], { product: product });
    };
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */])
], HomePage.prototype, "slides", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({ selector: "page-home",template:/*ion-inline-start:"/Users/jaiville/Proyects/Personal/ionic3-woocommerce/src/pages/home/home.html"*/'<!-- Header -->\n<ion-header>\n  <ion-toolbar color="secondary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title center>{{ \'HOME\' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- Feature -->\n  <ion-slides autoplay=\'3000\' loop=\'true\' autoHeight=\'true\' pager=\'true\'>\n    <ion-slide *ngFor="let number of [1,2,3]">\n      <img-loader src="./assets/images/{{number}}.jpeg" useImg></img-loader>\n    </ion-slide>\n  </ion-slides>\n  <ion-grid *ngIf="products">\n    <ion-row>\n      <ion-slides >\n        <ion-slide *ngFor="let product of products" #slider>\n          <ion-card>\n            <div class="feature_home">\n                <h1 padding center> {{ product.name }} </h1>\n                <img-loader *ngIf="product.images" src="{{product.images[0].src}}" useImg></img-loader>\n            </div>\n            <p center padding [innerHTML]="product.short_description"></p>\n          </ion-card>\n        </ion-slide>\n      </ion-slides>\n    </ion-row>\n  </ion-grid>\n  <!-- Products -->\n  <ion-list>\n    <ion-item *ngFor="let product of moreProducts" text-wrap (click)="openProductPage(product)">\n      <ion-thumbnail item-left>\n        <img-loader *ngIf="product.images" src="{{product.images[0].src}}" useImg></img-loader>\n      </ion-thumbnail>\n\n      <h2> {{ product.title }} </h2>\n      <p>\n        <span [innerHTML]="product.name"></span>\n        <br>\n        <span class="list-price" [innerHTML]="product.price_html"></span>\n      </p>\n\n      <button ion-button icon clear item-right>\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </ion-item>\n  </ion-list>\n\n  <ion-infinite-scroll (ionInfinite)="loadMoreProducts($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>\n'/*ion-inline-end:"/Users/jaiville/Proyects/Personal/ionic3-woocommerce/src/pages/home/home.html"*/ }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_woocommerce_woocommerce__["a" /* WooCommerceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_admob_pro_admob_pro__["a" /* AdmobProProvider */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */],
        __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(387);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_image_loader__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_onesignal__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_admob_pro__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_http_loader__ = __webpack_require__(663);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__(665);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_admob_pro_admob_pro__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_woocommerce_woocommerce__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__(669);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_home_home__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_products_list_products_list__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_product_details_product_details__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_products_by_category_products_by_category__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_9__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_products_list_products_list__["a" /* ProductsListPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_product_details_product_details__["a" /* ProductDetails */],
            __WEBPACK_IMPORTED_MODULE_17__pages_products_by_category_products_by_category__["a" /* ProductsByCategoryPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/product-details/product-details.module#ProductDetailsModule', name: 'ProductDetails', segment: 'product-details', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/products-by-category/products-by-category.module#ProductsByCategoryPageModule', name: 'ProductsByCategoryPage', segment: 'products-by-category', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/products-list/products-list.module#ProductsListPageModule', name: 'ProductsListPage', segment: 'products-list', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_3_ionic_image_loader__["a" /* IonicImageLoader */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["a" /* TranslateLoader */],
                    useFactory: (createTranslateLoader),
                    deps: [__WEBPACK_IMPORTED_MODULE_10__angular_common_http__["a" /* HttpClient */]]
                }
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_products_list_products_list__["a" /* ProductsListPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_product_details_product_details__["a" /* ProductDetails */],
            __WEBPACK_IMPORTED_MODULE_17__pages_products_by_category_products_by_category__["a" /* ProductsByCategoryPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_12__providers_woocommerce_woocommerce__["a" /* WooCommerceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_onesignal__["a" /* OneSignal */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_admob_pro__["a" /* AdMobPro */],
            __WEBPACK_IMPORTED_MODULE_11__providers_admob_pro_admob_pro__["a" /* AdmobProProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 478:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 479:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 533:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 552:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 669:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_onesignal__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_products_list_products_list__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, oneSignal, translate) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.oneSignal = oneSignal;
        this.translate = translate;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        this.translate.setDefaultLang('es');
        // used for an example of ngFor and navigation
        this.pages = [
            {
                title: 'Home',
                component: __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            }, {
                title: 'Products',
                component: __WEBPACK_IMPORTED_MODULE_7__pages_products_list_products_list__["a" /* ProductsListPage */]
            }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this
            .platform
            .ready()
            .then(function () {
            // Okay, so the platform is ready and our plugins are available. Here you can do
            // any higher level native things you might need.
            _this
                .statusBar
                .styleDefault();
            _this
                .splashScreen
                .hide();
            _this
                .oneSignal
                .startInit('3dfbcd48-d6a3-42f5-b115-b6813f0f297b');
            _this
                .oneSignal
                .inFocusDisplaying(_this.oneSignal.OSInFocusDisplayOption.None);
            // this.oneSignal.handleNotificationReceived().subscribe(() => {   // do
            // something when notification is received });
            // this.oneSignal.handleNotificationOpened().subscribe(() => {   // do something
            // when a notification is opened });
            _this
                .oneSignal
                .endInit();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page we wouldn't want the back button
        // to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/jaiville/Proyects/Personal/ionic3-woocommerce/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header color="secondary">\n    <ion-toolbar>\n      <ion-title>{{ \'PAGES\' | translate }}</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{ p.title | translate}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav #content [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/jaiville/Proyects/Personal/ionic3-woocommerce/src/app/app.html"*/ }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_onesignal__["a" /* OneSignal */], __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WooCommerceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_woocommerce_api__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_woocommerce_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_woocommerce_api__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WooCommerceProvider = (function () {
    function WooCommerceProvider() {
        this.WooCommerce = __WEBPACK_IMPORTED_MODULE_1_woocommerce_api__({
            url: 'https://www.yoursite.com',
            consumerKey: 'XXXXXXXX',
            consumerSecret: 'XXXXXXXX',
            wpAPI: true,
            queryStringAuth: true,
            verifySsl: true,
            version: 'wc/v2' // WooCommerce WP REST API version
        });
    }
    WooCommerceProvider.prototype.initialize = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.WooCommerce;
        });
    };
    return WooCommerceProvider;
}());
WooCommerceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], WooCommerceProvider);

//# sourceMappingURL=woocommerce.js.map

/***/ })

},[372]);
//# sourceMappingURL=main.js.map