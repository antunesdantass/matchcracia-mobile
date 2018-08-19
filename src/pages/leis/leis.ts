import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DbService } from '../../providers/db.provider';
import { MatchPage } from './../match/match';
// import { CardsComponent } from './../../components/cards/cards';

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

  constructor(
    private dbService: DbService,
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient
  ) {
    this.leis = [...dbService.db.leis];
  }

  botaoVoto(votoPositivo: boolean) {
    const lei = this.leis.pop();
    this.onSwipe(votoPositivo, lei);
  }

  onSwipe = (votoPositivo: boolean, lei) => {
    if (votoPositivo) this.dbService.db.votos[lei.id] = votoPositivo;
    this.dbService.db.votosChanged();
  };

  goToMatchPage() {
    const lei = this.leis[this.leis.length - 1];
    this.botaoVoto(true);
    this.navCtrl.push(MatchPage, {
      lei: JSON.stringify(lei),
    });
  }
}
