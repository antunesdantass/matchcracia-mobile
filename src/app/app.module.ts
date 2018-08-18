import { ErrorHandler, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LeisPage } from './../pages/leis/leis';
import { CardComponent } from './../components/card/card.component'
import { MyApp } from './app.component';
import { SwingModule } from '../../node_modules/angular2-swing';
import { CardsComponent } from '../components/cards/cards';

@NgModule({
  declarations: [MyApp, AboutPage, ContactPage, HomePage, TabsPage, LeisPage, CardComponent, CardsComponent],
  imports: [BrowserModule, FlexLayoutModule, IonicModule.forRoot(MyApp), SwingModule],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LeisPage,
    CardComponent,
    CardsComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ],
  exports: [],
})
export class AppModule {}
