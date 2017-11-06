import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductsListPage } from './products-list';

//Check it
import { IonicImageLoader } from 'ionic-image-loader';

@NgModule({
  declarations: [
    ProductsListPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductsListPage),
    IonicImageLoader.forRoot(),
  ],
})
export class ProductsListPageModule {}
