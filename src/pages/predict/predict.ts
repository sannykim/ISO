import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//https://www.djamware.com/post/598953f880aca768e4d2b12b/creating-beautiful-charts-easily-using-ionic-3-and-angular-4
@Component({
  selector: 'page-predict',
  templateUrl: 'predict.html'
})

export class PredictPage {
  stored: Array<any>
  
  public lineChartData:Array<any> = [
    {data: [361,
      376,
      331,
      371,
      418,
      412,
      374,
      381,
      396,
      433,
      343,
      368,
      446,
      352,
      307,
      299,
      336,
      382,
      359,
      361,
      391,
      424,
      431,
      380,
      376,
      336,
      314,
      346,
      398,
      383,
      331,
      346,
      331,
      379,
      378,
      408,
      347,
      326,
      312,
      318], label: 'Expected'},
    {data: [217,
      276,
      195,
      201,
      185,
      180,
      247,
      112,
      176,
      192,
      225,
      144,
      217,
      179,
      212,
      235,
      218,
      260,
      167,
      175,
      185,
      173,
      134,
      201,
      165,
      133,
      175,
      236,
      184,
      136,
      207,
      189,
      243,
      189,
      191,
      199,
      227,
      275,
      184,
      183], label: 'Real'},
  ];

  public lineChartLabels:Array<any> = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
  public lineChartOptions:any = {
    responsive: true,
    scales: {
      xAxes: [{
        ticks:{
          maxTicksLimit:11,
        },
        scaleLabel: {
          display: true,
          labelString: 'days',
        }
      }],
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'steps'
        }
      }],
    }
  };

  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
  ];

  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
  
  // events
  public chartClicked(e:any):void {
    this.lineChartData = [
      {data: [296,
        338,
        226,
        314,
        287,
        270,
        317,
        314,
        234,
        333,
        310,
        289,
        398,
        301,
        316,
        223,
        247,
        301,
        330,
        280,
        325,
        362,
        305,
        279,
        358,
        326,
        307,
        318,
        273,
        288,
        276,
        223,
        291,
        339,
        257,
        347,
        361,
        319,
        356,
        314], label: 'Expected'},
      {data: [253,
        251,
        308,
        267,
        265,
        254,
        229,
        256,
        244,
        211,
        241,
        310,
        219,
        226,
        253,
        292,
        254,
        199,
        250,
        222,
        248,
        249,
        217,
        247,
        229,
        230,
        156,
        295,
        262,
        290,
        297,
        233,
        277,
        175,
        198,
        273,
        261,
        235,
        241,
        359], label: 'Real'},
    ];
  }
  
  constructor(public navCtrl: NavController) {
    setInterval(function(){alert("You have to exercise.");
    }, 30000);
  }

}
