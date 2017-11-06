import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IonicImageLoader } from 'ionic-image-loader';

import { ProductDetails } from './product-details';

@NgModule({
  declarations: [
    ProductDetails,
  ],
  imports: [
    IonicPageModule.forChild(ProductDetails),
    IonicImageLoader.forRoot(),
  ],
  exports: [
    ProductDetails
  ]
})
export class ProductDetailsModule {}
