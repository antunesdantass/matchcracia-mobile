import { Component, OnInit } from '@angular/core';
import { IonicPage } from 'ionic-angular';

const matches = require('../../assets/mockLeis.json');

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
export class AnalyticsPage implements OnInit {
  matches: any[];
  fotaDaMinhaPotencia = '';

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
      .reduce((ac: string[], situacao: string) => {
        if (ac.includes(situacao)) {
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
    this.matches = matches;

    this.fotaDaMinhaPotencia = this.getFotaDaMinhaPotencia();
  }
}
