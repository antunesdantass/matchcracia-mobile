import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChartsModule } from 'ng2-charts';

import { ComponentsModule } from './../../components/components.module';
import { AnalyticsPage } from './analytics';

@NgModule({
  declarations: [AnalyticsPage],
  imports: [
    IonicPageModule.forChild(AnalyticsPage),
    ChartsModule,
    ComponentsModule,
  ],
})
export class AnalyticsPageModule {}
