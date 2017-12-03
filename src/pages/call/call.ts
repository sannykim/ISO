import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
declare var window;

@Component({
  selector: 'page-call',
  templateUrl: 'call.html'
})

export class CallPage {

  constructor(public navCtrl: NavController) {
  }
  
  callIT(passedNumber){
    //You can add some logic here
     window.location = passedNumber;
    }
}
