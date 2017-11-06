import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
//Check it
import { IonicImageLoader } from 'ionic-image-loader';

import { ProductsByCategoryPage } from './products-by-category';


@NgModule({
  declarations: [
    ProductsByCategoryPage,

  ],
  imports: [
    IonicPageModule.forChild(ProductsByCategoryPage),
    IonicImageLoader.forRoot(),
  ],
})
export class ProductsByCategoryPageModule {}
