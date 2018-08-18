import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MatchPage } from './../match/match';

/**
 * Generated class for the LeisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-leis',
  templateUrl: 'leis.html',
})
export class LeisPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  goToMatchPage() {
    this.navCtrl.push(MatchPage, {
      lei: JSON.stringify({
        siglaTipo: 'PL',
        numero: 9469,
        ano: 2078,
      }),
    });
  }
}
