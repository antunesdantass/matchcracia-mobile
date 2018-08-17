import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ComponentsModule } from './../../components/components.module';
import { LeisPage } from './leis';

@NgModule({
  declarations: [LeisPage],
  imports: [IonicPageModule.forChild(LeisPage), ComponentsModule],
})
export class LeisPageModule {}
