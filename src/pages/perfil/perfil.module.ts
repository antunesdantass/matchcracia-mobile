import { NgModule } from '@angular/core';
import { ContentLoaderModule } from '@netbasal/content-loader';
import { IonicPageModule } from 'ionic-angular';

import { ComponentsModule } from './../../components/components.module';
import { PerfilPage } from './perfil';
import { FlexModule } from '@angular/flex-layout';

@NgModule({
  declarations: [PerfilPage],
  imports: [
    IonicPageModule.forChild(PerfilPage),
    ContentLoaderModule,
    ComponentsModule,
    FlexModule
  ],
})
export class PerfilPageModule {}
