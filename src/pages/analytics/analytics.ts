import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';
import { includes } from 'lodash';

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

  constructor(private http: HttpClient) {}

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
    );
  }

  get donutSituacaoData() {
    if (!this.matches) return [];
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
    this.matchesSubscription = this.http
      .get<any[]>('assets/mockLeis.json')
      .subscribe((dados: any[]) => {
        this.matches = dados;
        this.fotaDaMinhaPotencia = this.getFotaDaMinhaPotencia();
      });
  }

  ngOnDestroy(): void {
    this.matchesSubscription.unsubscribe();
  }
}
