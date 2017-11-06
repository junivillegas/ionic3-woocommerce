import {ViewChild,Component} from '@angular/core';
import {Slides, IonicPage, NavController , NavParams} from 'ionic-angular';
import { TranslateService } from "@ngx-translate/core";

import {WooCommerceProvider} from '../../providers/woocommerce/woocommerce';

@IonicPage({})
@Component({selector: 'page-product-details', templateUrl: 'product-details.html'})

export class ProductDetails {

  @ViewChild(Slides)slides : Slides;

  public product : any;
  private wooCommerce : any;
  public reviews : any[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams : NavParams,
    private wooProvider : WooCommerceProvider,
    public translate: TranslateService) {

    this.wooCommerce = wooProvider.WooCommerce;

    this.product = this.navParams.get("product");

    if(this.product){
      //Get reviews

      this.wooCommerce.getAsync('products/' + this.product.id + '/reviews')
        .then((data) => {
            this.reviews = JSON.parse(data.body);
          }, (err) => {
            console.log(err);
          })
    }
  }

  //Slider options
  ngAfterViewInit() {
    this.slides.autoHeight = true;
    this.slides.pager = true;
    this.slides.autoplay = 3000;
    this.slides.loop = true;

  }
}
