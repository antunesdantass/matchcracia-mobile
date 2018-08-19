import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalhesLeiPage } from './detalhes-lei';

@NgModule({
  declarations: [
    DetalhesLeiPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalhesLeiPage),
  ],
})
export class DetalhesLeiPageModule {}
