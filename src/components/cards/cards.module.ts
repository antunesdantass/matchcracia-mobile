import { NgModule } from '@angular/core';

import { ComponentsModule } from './../../components/components.module';
import { CardsComponent } from '../../components/cards/cards';
import { SwingModule } from 'angular2-swing';
import { IonicModule } from 'ionic-angular';

@NgModule({
  declarations: [CardsComponent],
  imports: [ComponentsModule, SwingModule, IonicModule],
  exports: [CardsComponent]
})
export class CardsModule {}
