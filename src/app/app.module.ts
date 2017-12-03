import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts';
import { CallNumber } from '@ionic-native/call-number';
import { LocalNotifications } from '@ionic-native/local-notifications';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StatsPage } from '../pages/stats/stats';
import { PredictPage } from '../pages/predict/predict';
import { SocialPage } from '../pages/social/social';
import { CallPage } from '../pages/call/call';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    StatsPage,
    PredictPage,
    SocialPage,
    CallPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    StatsPage,
    PredictPage,
    SocialPage,
    CallPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CallNumber,
    LocalNotifications,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
