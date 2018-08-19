import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContentLoaderModule } from '@netbasal/content-loader';
import { IonicModule } from 'ionic-angular';
import {ChartsModule} from 'ng2-charts/charts/charts';


import { ImageComponent } from './app-image/app-image';
import { CardComponent } from './card/card.component';
import { DonutChartTableComponent } from './donut-chart-table/donut-chart-table';
import { CardsComponent } from './cards/cards';

@NgModule({
  declarations: [CardComponent, ImageComponent,
    DonutChartTableComponent],
  imports: [IonicModule, ContentLoaderModule, FlexLayoutModule, ChartsModule,],
  exports: [CardComponent, ImageComponent,
    DonutChartTableComponent],
})
export class ComponentsModule {}
