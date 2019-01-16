import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ListPage } from '../list/list';
import { OrderPage } from '../order/order';

/**
 * Generated class for the BuyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buy',
  templateUrl: 'buy.html',
})
export class BuyPage {
  private Product: string;
  private Price: number;
  private Amount: number;
  private Sum: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyPage');
  }
  Add() {
    this.navCtrl.push(OrderPage)
    this.http.post("https://localhost:5001/api/Product/xx",
      {
        Product: this.Product,
        Price: this.Price,
        Amount: this.Amount,
        Sum: this.Sum,
      }).subscribe(
        it => {
        });
  }

}
