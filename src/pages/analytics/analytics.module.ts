import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChartsModule } from 'ng2-charts';

import { AnalyticsPage } from './analytics';

@NgModule({
  declarations: [AnalyticsPage],
  imports: [IonicPageModule.forChild(AnalyticsPage), ChartsModule],
})
export class AnalyticsPageModule {}
