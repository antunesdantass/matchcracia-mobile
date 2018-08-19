import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

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
  leis;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.http
      .get<any[]>('assets/mockLeis.json')
      .subscribe((dados: any[]) => {
        this.leis = dados;
      });
  }
  onSwipe = (votoPositivo: boolean, lei) => {
    console.log("virou", lei)
  }

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
