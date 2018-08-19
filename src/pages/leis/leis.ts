import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

import { MatchPage } from './../match/match';
import { DbService } from '../../providers/db.provider';

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

  constructor(private dbService: DbService, public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.leis = [...dbService.db.leis];
  }

  onSwipe = (votoPositivo: boolean, lei) => {
    if (votoPositivo)
      this.dbService.db.votos[lei.id] = votoPositivo;
    this.dbService.db.votosChanged();
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
