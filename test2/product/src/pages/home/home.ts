import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ListPage } from '../list/list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private Product: string;
  private Price: number;
  private Amount: number;

  constructor(public navCtrl: NavController, public http: HttpClient) {

  }
  Add() {
    this.navCtrl.push(ListPage)
    this.http.post("https://localhost:5001/api/Interest",
      {
        Product: this.Product,
        Price: this.Price,
        Amount: this.Amount,
      }).subscribe(
        it => {
          // SUCCESS: Do something
          console.log('success')
        },
        error => {
          // ERROR: Do something
          console.log("fail")
        });
  }

}
