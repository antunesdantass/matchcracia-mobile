import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ContentLoaderModule } from '@netbasal/content-loader';
import { SwingModule } from 'angular2-swing';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { ChartsModule } from 'ng2-charts/charts/charts';

import { CardsComponent } from '../components/cards/cards';
import { TabsPage } from '../pages/tabs/tabs';
import { ComponentsModule } from './../components/components.module';
import { AnalyticsPage } from './../pages/analytics/analytics';
import { DetalhesLeiPage } from './../pages/detalhes-lei/detalhes-lei';
import { EditarPerfilPage } from './../pages/editar-perfil/editarPerfil';
import { LeisPage } from './../pages/leis/leis';
import { MatchPage } from './../pages/match/match';
import { PerfilPage } from './../pages/perfil/perfil';
import { MyApp } from './app.component';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    LeisPage,
    PerfilPage,
    EditarPerfilPage,
    AnalyticsPage,
    MatchPage,
    CardsComponent,
    DetalhesLeiPage,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    ChartsModule,
    ContentLoaderModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule,
    HttpClientModule,
    SwingModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    LeisPage,
    PerfilPage,
    EditarPerfilPage,
    AnalyticsPage,
    MatchPage,
    CardsComponent,
    DetalhesLeiPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ],
  exports: [],
})
export class AppModule {}
