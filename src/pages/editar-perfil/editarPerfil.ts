import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LeisPage } from '../leis/leis';

/**
 * Generated class for the EditarPerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'editar-perfil',
  templateUrl: 'editar-perfil.html',
})
export class EditarPerfilPage {
  window: any = window;
  usuario: any = {};

  constructor(private navParams: NavParams, public navCtrl: NavController) {
    this.usuario.nome = navParams.get('nome');
  }

  salvar() {
    if (this.navCtrl.canGoBack()) {
      return this.navCtrl.pop();
    }
    return this.navCtrl.first();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditarPerfilPage');
  }
}
