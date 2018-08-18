import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ContentLoaderModule } from '@netbasal/content-loader';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { ChartsModule } from 'ng2-charts/charts/charts';

import { TabsPage } from '../pages/tabs/tabs';
import { ComponentsModule } from './../components/components.module';
import { AnalyticsPage } from './../pages/analytics/analytics';
import { LeisPage } from './../pages/leis/leis';
import { PerfilPage } from './../pages/perfil/perfil';
import { EditarPerfilPage } from './../pages/editar-perfil/editarPerfil';
import { MyApp } from './app.component';

@NgModule({
  declarations: [MyApp, TabsPage, LeisPage, PerfilPage, EditarPerfilPage, AnalyticsPage],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    ChartsModule,
    ContentLoaderModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule,
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, TabsPage, LeisPage, EditarPerfilPage, PerfilPage, AnalyticsPage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ],
  exports: [],
})
export class AppModule {}
