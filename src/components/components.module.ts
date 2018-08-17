import { NgModule } from '@angular/core';

import { CardComponent } from './card/card.component';
import { SwipeIonContentComponent } from './swipe-ion-content/swipe-ion-content';

@NgModule({
  declarations: [SwipeIonContentComponent, CardComponent],
  imports: [],
  exports: [SwipeIonContentComponent, CardComponent],
})
export class ComponentsModule {}
