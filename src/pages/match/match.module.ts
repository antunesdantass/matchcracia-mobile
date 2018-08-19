import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MatchPage } from './match';
import { FlexModule } from '@angular/flex-layout';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    MatchPage,
  ],
  imports: [
    IonicPageModule.forChild(MatchPage), FlexModule, ChartsModule
  ],
})
export class MatchPageModule {}
