import {Component, NgZone} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import { TranslateService } from "@ngx-translate/core";


import { ProductDetails } from '../product-details/product-details';
import {WooCommerceProvider} from '../../providers/woocommerce/woocommerce';
/**
 * Generated class for the ProductsByCategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({selector: 'page-products-by-category', templateUrl: 'products-by-category.html'})
export class ProductsByCategoryPage {

  private wooCommerce : any;
  public products : any[];
  private page : number;
  public category : any;
  private loading : any;

  constructor(
    public navCtrl : NavController,
    public navParams : NavParams,
    private wooProvider : WooCommerceProvider,
    private zone: NgZone,
    public loadingCtrl: LoadingController,
    public translate: TranslateService) {

    //Loading
    this.loading = this.loadingCtrl.create();
    this.translate.get("LOADING").subscribe(value => {
      this.zone.run(() => (this.loading.setContent(value)));
    });

    this.wooCommerce = wooProvider.WooCommerce;

    if(this.wooCommerce){
      this.getProductos();
    }
  }

  getProductos(){

    //Show Loading
    this.loading.present();


    this.page = 1;

    this.category = this
      .navParams
      .get("category");

    this
    .wooCommerce
    .getAsync("products?filter[category]=" + this.category.slug)
    .then((data) => {
      this.products = JSON.parse(data.body);
      //Hide loading
      this.loading.dismiss();
    }, (err) => {
      console.log(err);
      //Hide loading
      this.loading.dismiss();
    })
  }

  loadMoreProducts(event) {
    this.page++;
    this
      .wooCommerce
      .getAsync("products?filter[category]=" + this.category.slug + "&page=" + this.page)
      .then((data) => {
        let temp = (JSON.parse(data.body))
        this.products = this
          .products
          .concat(JSON.parse(data.body));
        event.complete();
        if (temp.length < 10)
          event.enable(false);
        }
      )
  }

  openProductPage(product) {
    this
      .navCtrl
      .push(ProductDetails, {"product": product});
  }

}
