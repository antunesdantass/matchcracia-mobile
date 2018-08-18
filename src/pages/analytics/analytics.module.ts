import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IonicPageModule } from 'ionic-angular';
import { ChartsModule } from 'ng2-charts';

import { ComponentsModule } from './../../components/components.module';
import { AnalyticsPage } from './analytics';

@NgModule({
  declarations: [AnalyticsPage],
  imports: [
    IonicPageModule.forChild(AnalyticsPage),
    ChartsModule,
    FlexLayoutModule,
    ComponentsModule,
  ],
})
export class AnalyticsPageModule {}
