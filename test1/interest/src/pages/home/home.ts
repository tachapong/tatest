import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ListPage } from '../list/list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private Money: number;
  private year: number

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {

  }
  Add() {
    this.navCtrl.push(ListPage)
    this.http.post("https://localhost:5001/api/Order",
      {
        Money: this.Money,
        year: this.year,
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