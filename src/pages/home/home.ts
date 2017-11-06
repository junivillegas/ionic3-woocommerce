import { ViewChild, Component, NgZone } from "@angular/core";
import { Slides, ToastController, NavController, NavParams, LoadingController } from "ionic-angular";
import { TranslateService } from "@ngx-translate/core";

import { WooCommerceProvider } from "../../providers/woocommerce/woocommerce";
import { AdmobProProvider } from "../../providers/admob-pro/admob-pro";

import { ProductDetails } from "../product-details/product-details";

@Component({ selector: "page-home", templateUrl: "home.html" })
export class HomePage {
  @ViewChild(Slides) slides: Slides;

  private wooCommerce: any;
  public products: any[];
  public moreProducts: any[];
  private page: number;
  private loading: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private wooProvider: WooCommerceProvider,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public adMobPro: AdmobProProvider,
    private zone: NgZone,
    public translate: TranslateService) {
    //Create loading
    this.loading = this.loadingCtrl.create();
    this.translate.get("LOADING").subscribe(value => {
      this.zone.run(() => (this.loading.setContent(value)));
    });

    //Load Products
    this.wooCommerce = wooProvider.WooCommerce;

    //Load more products
    if (this.wooCommerce) {
      this.loadProducts();
    }
  }

  loadProducts() {
    //Show Loading
    this.loading.present();

    this.page = 1;

    this.loadMoreProducts(null);

    this.wooCommerce
      .getAsync("products?status=publish&in_stock=true&featured=true")
      .then(
        data => {
          //Hide loading
          this.loading.dismiss();
          this.products = JSON.parse(data.body);
        },
        err => {
          //Hide Loading
          this.loading.dismiss();
          console.log(err);
        }
      );
  }
  //Function to load more products
  loadMoreProducts(event) {
    if (event == null) {
      this.page = 2;
      this.moreProducts = [];
    } else {
      this.page++;
    }

    this.wooCommerce
      .getAsync("products?status=publish&in_stock=true&page=" + this.page)
      .then(
        data => {
          this.moreProducts = this.moreProducts.concat(JSON.parse(data.body));

          if (event != null) {
            event.complete();
          }
          if (JSON.parse(data.body).length < 10) {
            event.enable(false);
            this.toastCtrl
              .create({ message: "No more products!", duration: 5000 })
              .present();
          }
        },
        err => {
          console.log(err);
        }
      );
  }

  //Open New page
  openProductPage(product) {
    this.navCtrl.push(ProductDetails, { product: product });
  }
}
