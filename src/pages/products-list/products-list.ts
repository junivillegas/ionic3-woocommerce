import { Component, NgZone } from "@angular/core";
import { IonicPage, NavController, NavParams, LoadingController } from "ionic-angular";
import { TranslateService } from "@ngx-translate/core";

import { WooCommerceProvider } from "../../providers/woocommerce/woocommerce";
import { ProductsByCategoryPage } from "../products-by-category/products-by-category";

@IonicPage()
@Component({
  selector: "page-products-list",
  templateUrl: "products-list.html"
})
export class ProductsListPage {
  private wooCommerce: any;
  public categories: any[];
  private loading: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private wooProvider: WooCommerceProvider,
    private zone: NgZone,
    public loadingCtrl: LoadingController,
    public translate: TranslateService) {

    //Create loading
    this.loading = this.loadingCtrl.create();
    this.translate.get("LOADING").subscribe(value => {
      this.zone.run(() => (this.loading.setContent(value)));
    });

    this.wooCommerce = wooProvider.WooCommerce;

    if (this.wooCommerce) {
      this.getCategories();
    }
  }

  getCategories() {
    //Show Loading
    this.loading.present();

    this.wooCommerce.getAsync("products/categories").then(
      data => {
        //Hide loading
        this.loading.dismiss();
        this.zone.run(() => (this.categories = JSON.parse(data.body)));
      },
      err => {
        //Hide loading
        this.loading.dismiss();
        console.log(err);
      }
    );
  }

  openCategoryPage(category) {
    this.navCtrl.push(ProductsByCategoryPage, { category: category });
  }
}
