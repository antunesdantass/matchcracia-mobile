import { NgModule } from '@angular/core';
import { ContentLoaderModule } from '@netbasal/content-loader';
import { IonicPageModule } from 'ionic-angular';

import { ComponentsModule } from './../../components/components.module';
import { EditarPerfilPage } from './editarPerfil';
import { FlexModule } from '@angular/flex-layout';

@NgModule({
  declarations: [EditarPerfilPage],
  imports: [
    IonicPageModule.forChild(EditarPerfilPage),
    ContentLoaderModule,
    ComponentsModule,
    FlexModule
  ],
})
export class EditarPerfilPageModule {}
