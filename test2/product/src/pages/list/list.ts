import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { order } from '../../models/order';
import { BuyPage } from '../buy/buy';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  orders: order[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {

  }
  
  ionViewDidEnter() {
    this.http.get<order[]>("https://localhost:5001/api/Product").subscribe(
      it => {
        this.orders = it;
      });
  }
 
  Buy() {
    this.navCtrl.push(BuyPage)
  }

}
