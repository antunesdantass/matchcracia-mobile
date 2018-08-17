import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [CardComponent],
  imports: [IonicModule.forRoot(CardComponent)],
  exports: [CardComponent],
})
export class AppComponentsModule {}
