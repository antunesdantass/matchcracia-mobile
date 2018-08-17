import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ComponentsModule } from './../../components/components.module';
import { PerfilPage } from './perfil';

@NgModule({
  declarations: [PerfilPage],
  imports: [IonicPageModule.forChild(PerfilPage), ComponentsModule],
})
export class PerfilPageModule {}
