import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MarvelServiceProvider } from '../providers/marvel-service/marvel-service';
import { HttpModule } from '@angular/http';
import { DescriptionPage } from '../pages/description/description';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DescriptionPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DescriptionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MarvelServiceProvider,HttpModule,  DescriptionPage
  ]
})
export class AppModule {}
