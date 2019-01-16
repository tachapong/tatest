import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { order } from '../../models/order';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {
  public orders: order[];
  public Amount: number = 0;
  public Price: number = 0;
  public Sum: number = 0;
  public dis: number = 0;
  public change: number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
  }

  ionViewDidEnter() {
    this.http.get<order[]>("https://localhost:5001/api/Product/xx").subscribe(
      it => {
        this.orders = it;
        this.order(this.orders);
        this.or(this.orders);
      });
  }
  order(data: order[]) {
    for (var i = 0; i < data.length; i++) {
      this.Amount += data[i].amount;
      this.Price += data[i].price;

    }
    this.dis = (this.Amount - (this.Amount / 4)) * this.Price

  }
  or(data1: order[]) {
    for (var i = 0; i < data1.length; i++) {
      this.Sum = data1[i].sum;
    }
    this.change = this.Sum-this.dis

  }
}
