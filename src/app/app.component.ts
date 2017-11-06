import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {OneSignal} from "@ionic-native/onesignal";
import {TranslateService} from '@ngx-translate/core';

import {HomePage} from '../pages/home/home';
import {ProductsListPage} from '../pages/products-list/products-list';

@Component({templateUrl: 'app.html'})

export class MyApp {
  @ViewChild(Nav)nav : Nav;

  rootPage : any = HomePage;

  pages : Array < {
    title: string,
    component: any
  } >;

  constructor(public platform : Platform, public statusBar : StatusBar, public splashScreen : SplashScreen, public oneSignal : OneSignal, private translate : TranslateService) {
    this.initializeApp();

    this.translate.setDefaultLang('es');

    // used for an example of ngFor and navigation
    this.pages = [
      {
        title: 'Home',
        component: HomePage
      }, {
        title: 'Products',
        component: ProductsListPage
      }
    ];

  }

  initializeApp() {
    this
      .platform
      .ready()
      .then(() => {
        // Okay, so the platform is ready and our plugins are available. Here you can do
        // any higher level native things you might need.
        this
          .statusBar
          .styleDefault();
        this
          .splashScreen
          .hide();

        this
          .oneSignal
          .startInit('3dfbcd48-d6a3-42f5-b115-b6813f0f297b');

        this
          .oneSignal
          .inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.None);

        // this.oneSignal.handleNotificationReceived().subscribe(() => {   // do
        // something when notification is received });
        // this.oneSignal.handleNotificationOpened().subscribe(() => {   // do something
        // when a notification is opened });

        this
          .oneSignal
          .endInit();
      });
  }

  openPage(page) {
    // Reset the content nav to have just this page we wouldn't want the back button
    // to show in this scenario
    this.nav.setRoot(page.component);
  }

}
