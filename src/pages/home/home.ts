import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StatsPage } from '../stats/stats';
import { PredictPage } from '../predict/predict';
import { CallPage } from '../call/call';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pushPage1: any;
  pushPage2: any;
  pushPage4: any;
  constructor(public navCtrl: NavController) {
    this.pushPage1 = StatsPage;
    this.pushPage2 = PredictPage;
    this.pushPage4 = CallPage;
  }
}
