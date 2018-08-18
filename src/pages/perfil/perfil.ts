import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
  window: any = window;
  usuario: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.usuario = {
      nome: "João",
      idade: 20,
      endereco: {
        cidade: "Campina Grande",
        estado: "PB"
      }
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }
}
