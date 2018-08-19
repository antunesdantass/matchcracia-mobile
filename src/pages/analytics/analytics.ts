import { Component, OnDestroy, OnInit } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';
import { includes } from 'lodash';
import { DbService } from '../../providers/db.provider';

/**
 * Generated class for the AnalyticsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-analytics',
  templateUrl: 'analytics.html',
})
export class AnalyticsPage implements OnInit, OnDestroy {
  matches: any[];
  matchesSubscription: Subscription;
  fotaDaMinhaPotencia = '';

  constructor(private dbService: DbService) { }

  getFotaDaMinhaPotencia() {
    if (!this.matches) return null;
    const ocorrenciasFotas = this.matches.map(match => match.autores).reduce(
      (ac1, autores) => ({
        ...ac1,
        ...autores.reduce(
          (ac, autor) => ({
            ...ac,
            [autor.urlFoto]: ac[autor.urlFoto] ? ac[autor.urlFoto] + 1 : 1,
          }),
          {}
        ),
      }),
      {}
    );
    return Object.keys(ocorrenciasFotas).reduce(
      (ac, fota) => (ocorrenciasFotas[ac] >= ocorrenciasFotas[fota] ? ac : fota)
      , ''
    );
  }

  get donutSituacaoData() {
    if (!this.matches || !this.matches.length) return {};
    const situacoesOcorrencias = {};
    const situacoes = this.matches
      .map(match => match.statusProposicao.descricaoSituacao)
      .reduce((ac: Array<string>, situacao: string) => {
        if (includes(ac, situacao)) {
          situacoesOcorrencias[situacao]++;
          return ac;
        }
        situacoesOcorrencias[situacao] = 1;
        return [...ac, situacao];
      }, []);

    return {
      labels: situacoes,
      data: situacoes.map(situacao => situacoesOcorrencias[situacao]),
    };
  }

  ngOnInit() {
    this.matches = Object.keys(this.dbService.db.votos).map(k => this.dbService.db.leis.find(i => i.id == k));
    this.dbService.db.votosChanged = () => {
      console.log(this.dbService.db);
      this.matches = Object.keys(this.dbService.db.votos).map(k => this.dbService.db.leis.find(i => {
        console.log('finding for', i, k)
        return i.id == k;
      })).filter(i => !!i);
    };
    this.fotaDaMinhaPotencia = this.getFotaDaMinhaPotencia();
  }

  ngOnDestroy(): void {
    this.matchesSubscription.unsubscribe();
  }
}
