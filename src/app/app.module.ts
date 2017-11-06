import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicImageLoader } from 'ionic-image-loader';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OneSignal } from "@ionic-native/onesignal";
import { AdMobPro } from '@ionic-native/admob-pro';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';


import { AdmobProProvider } from '../providers/admob-pro/admob-pro';
import { WooCommerceProvider } from '../providers/woocommerce/woocommerce';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProductsListPage } from '../pages/products-list/products-list';
import { ProductDetails } from '../pages/product-details/product-details';
import { ProductsByCategoryPage } from '../pages/products-by-category/products-by-category';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProductsListPage,
    ProductDetails,
    ProductsByCategoryPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicImageLoader.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [HttpClient]
        }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProductsListPage,
    ProductDetails,
    ProductsByCategoryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WooCommerceProvider,
    OneSignal,
    AdMobPro,
    AdmobProProvider
  ]
})
export class AppModule {}
