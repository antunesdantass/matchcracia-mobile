import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContentLoaderModule } from '@netbasal/content-loader';
import { IonicModule } from 'ionic-angular';

import { ImageComponent } from './app-image/app-image';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [CardComponent, ImageComponent],
  imports: [IonicModule, ContentLoaderModule, FlexLayoutModule],
  exports: [CardComponent, ImageComponent],
})
export class ComponentsModule {}
