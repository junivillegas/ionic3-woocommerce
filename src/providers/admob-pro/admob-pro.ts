import { Injectable } from "@angular/core";
import { Platform } from "ionic-angular";
import { AdMobPro } from '@ionic-native/admob-pro';

import "rxjs/add/operator/map";

/*
  Generated class for the AdMobPro provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AdmobProProvider {
  private admobObtions : any;
  private admobId : any;

  constructor(private platform: Platform, public adMobPro : AdMobPro) {
    console.log("Hello Admobpro Provider");
    platform.ready().then(() => {
      this.admobId = {};

      if (this.platform.is("android")) {
        this.admobId = {
          // for Android
          banner: "ca-app-pub-XXXXXXXX",
          interstitial: "ca-app-pub-XXXXXXXX",
          nativo: "ca-app-pub-XXXXXXXX"
        };
      }

      if (this.platform.is("ios")) {
        this.admobId = {
          // for iOS
          banner: "ca-app-pub-XXXXXXXX",
          interstitial: "ca-app-pub-XXXXXXXX",
          nativo: "ca-app-pub-XXXXXXXX"
        };

      }

      if(this.platform.is("ios") || this.platform.is("android")){
        this.init();
      }else{
        console.log('Only working in devices');
      }
    });
  }

  init() {
    console.log("AdMobPro init");

    if (!this.adMobPro) {
      console.log("No AdMob?");
      return;
    }

    // Register AdMob events
    // new events, with variable to differentiate: adNetwork, adType, adEvent

    document.addEventListener("onAdFailLoad", function(data) {
      console.log("onAdFailLoad: " + JSON.stringify(data));
    });

    document.addEventListener("onAdLoaded", function(data) {
      console.log("onAdLoaded: " + JSON.stringify(data));
    });

    document.addEventListener("onAdPresent", function(data) {
      console.log("onAdPresent: " + JSON.stringify(data));
    });
    document.addEventListener("onAdLeaveApp", function(data) {
      console.log("onAdLeaveApp: " + JSON.stringify(data));
    });

    document.addEventListener("onAdDismiss", function(data) {
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
      bgColor: 'black', // color name, or '#RRGGBB'
      // x: integer,     // valid when set position to 0 / POS_XY
      // y: integer,     // valid when set position to 0 / POS_XY
      isTesting: false, // set to true, to receiving test ad for testing purpose
      autoShow: true // auto show interstitial ad when loaded, set to false if prepare/show
    };

    this.adMobPro.setOptions(this.admobObtions);
    this.showBanner();
  }

  showInterstitial() {
    if (!this.adMobPro){
      return false;
    }
    console.log("showInterstitial");

    this.adMobPro.prepareInterstitial({
      adId: this.admobId.interstitial,
      autoShow: this.admobObtions.autoShow
    });

    return true;
  }

  showBanner() {
    if (!this.adMobPro){
      return false;
    }

    this.adMobPro.createBanner({
      adId: this.admobId.banner,
      position: this.admobObtions.position,
      autoShow: this.admobObtions.autoShow
    });

    return true;
  }

  removeAds() {
    if (this.adMobPro){
      this.adMobPro.removeBanner();
    }
  }
}
