import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalhesLeiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhes-lei',
  templateUrl: 'detalhes-lei.html',
})
export class DetalhesLeiPage {
  lei: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.lei = JSON.parse(this.navParams.get('lei'));
    console.log(this.lei);
  }
}
