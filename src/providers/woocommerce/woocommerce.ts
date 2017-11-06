import { Injectable } from '@angular/core';
import * as WC from 'woocommerce-api';

@Injectable()
export class WooCommerceProvider {

  WooCommerce: any;

  constructor() {
    this.WooCommerce = WC({
      url: 'https://www.yoursite.com', // Your store URL
      consumerKey: 'XXXXXXXX', // Your consumer key
      consumerSecret: 'XXXXXXXX', // Your consumer secret
      wpAPI: true, // Enable the WP REST API integration
      queryStringAuth: true,
      verifySsl: true,
      version: 'wc/v2' // WooCommerce WP REST API version
    });
  }

  initialize(){
    return new Promise((resolve, reject) => {
      this.WooCommerce;
    });
  }
}
