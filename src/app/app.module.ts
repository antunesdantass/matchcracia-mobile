import { ErrorHandler, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ContentLoaderModule } from '@netbasal/content-loader';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { TabsPage } from '../pages/tabs/tabs';
import { AnalyticsPage } from './../pages/analytics/analytics';
import { LeisPage } from './../pages/leis/leis';
import { PerfilPage } from './../pages/perfil/perfil';
import { MyApp } from './app.component';

@NgModule({
  declarations: [MyApp, TabsPage, LeisPage, PerfilPage, AnalyticsPage],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    ContentLoaderModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, TabsPage, LeisPage, PerfilPage, AnalyticsPage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ],
  exports: [],
})
export class AppModule {}
