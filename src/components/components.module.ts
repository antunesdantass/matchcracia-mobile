import { NgModule } from '@angular/core';

import { CardComponent } from './card/card.component';
import { SwipeIonContentComponent } from './swipe-ion-content/swipe-ion-content';
import { CardsComponent } from './cards/cards';

@NgModule({
  declarations: [SwipeIonContentComponent, CardComponent,
    CardsComponent],
  imports: [],
  exports: [SwipeIonContentComponent, CardComponent,
    CardsComponent],
})
export class ComponentsModule {}
