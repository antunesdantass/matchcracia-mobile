import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ComponentsModule } from './../../components/components.module';
import { LeisPage } from './leis';
import {FlexLayoutModule} from '@angular/flex-layout';
import { CardsModule } from '../../components/cards/cards.module';

@NgModule({
  declarations: [LeisPage],
  imports: [IonicPageModule.forChild(LeisPage), ComponentsModule, FlexLayoutModule, CardsModule],
})
export class LeisPageModule {}
