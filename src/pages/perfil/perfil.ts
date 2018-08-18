import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EditarPerfilPage } from '../editar-perfil/editarPerfil';

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
      nome: "Thalyta",
      idade: 20,
      endereco: {
        cidade: "Campina Grande",
        estado: "PB"
      }
    };
  }

  editarPerfil() {
    console.log("entrou");
    this.navCtrl.push(EditarPerfilPage, this.usuario);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }
}
