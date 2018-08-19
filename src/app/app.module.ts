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

import {DbService} from '../providers/db.provider';
import { AnalyticsPageModule } from '../pages/analytics/analytics.module';
import { DetalhesLeiPageModule } from '../pages/detalhes-lei/detalhes-lei.module';
import { EditarPerfilPageModule } from '../pages/editar-perfil/editarPerfil.module';
import { LeisPageModule } from '../pages/leis/leis.module';
import { MatchPageModule } from '../pages/match/match.module';
import { PerfilPageModule } from '../pages/perfil/perfil.module';
import { CardsModule } from '../components/cards/cards.module';

@NgModule({
  declarations: [
    MyApp,
    TabsPage
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
    AnalyticsPageModule,
    DetalhesLeiPageModule,
    EditarPerfilPageModule,
    LeisPageModule,
    MatchPageModule,
    PerfilPageModule,
    CardsModule
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
    DbService
  ]
})
export class AppModule {}
