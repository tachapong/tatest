import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { refund } from '../../models/refund';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  refunds: refund[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    
  }

 
  ionViewDidEnter(){
    this.http.get<refund[]>("https://localhost:5001/api/Interest").subscribe(
      it => {
        this.refunds = it;
      
      });
    }
}
