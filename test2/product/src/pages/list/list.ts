import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
 
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    
    
  }

  
}
