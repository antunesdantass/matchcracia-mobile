import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

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
export class AnalyticsPage {
  matches: any[];

  constructor() {
    this.matches = [];
    for (let i = 0; i < 5; i++)
      this.matches.push({
        siglaTipo: 'PL',
        ementa:
          'Institui a obrigatoriedade de estabelecimentos públicos e privados voltados ao ensino ou recreação infantil e fundamental a capacitarem seu corpo docente e funcional em noções básicas de primeiros socorros.',
        statusProposicao: {
          dataHora: '2018-03-22T00:00',
          regime: 'Urgência (Art. 155, RICD)',
          descricaoTramitacao: 'Devolução à CCP',
          descricaoSituacao: 'Aguardando Apreciação pelo Senado Federal',
          despacho: 'Devolução à CCP.',
          orgao: {
            sigla: 'CCJC',
            nome: 'Comissão de Constituição e Justiça e de Cidadania',
            tipoOrgao: 'Comissão Permanente',
          },
        },
      });
  }
}
