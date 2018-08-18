import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  private lei: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.lei =  [{
      ementa: "Institui a obrigatoriedade de estabelecimentos públicos e " +
      "privados voltados ao ensino ou recreação infantil e fundamental a " + 
      "capacitarem seu corpo docente e funcional em noções básicas de primeiros socorros.",
      siglaTipo: "PL",
      ano: 2018,
      numero: 9468,
      titulo: "PL 9468/2018",
      autores: [
        {
          "nome": "Ricardo Izar",
          "foto": "http://www.camara.leg.br/internet/deputado/bandep/160655.jpg"
        }
      ]
    },
    {
      ementa: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
      siglaTipo: "PL",
      ano: 2018,
      numero: 10000,
      titulo: "PL 9999/2018",
      autores: [
        {
          "nome": "Ricardo Izar",
          "foto": "http://www.camara.leg.br/internet/deputado/bandep/160655.jpg"
        }
      ]
    }];
  }

  onSwipe = (votoPositivo: boolean, lei) => {
    console.log("virou", lei)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeisPage');
  }

}
