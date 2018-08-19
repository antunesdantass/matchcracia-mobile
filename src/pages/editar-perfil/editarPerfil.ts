import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DbService } from '../../providers/db.provider';

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

  constructor(private dbService: DbService, public navCtrl: NavController) {
    this.usuario = dbService.db.usuario;
  }

  salvar() {
    this.dbService.db.usuarioChanged();
    if (this.navCtrl.canGoBack()) {
      return this.navCtrl.pop();
    }
    return this.navCtrl.first();
  }

  ionViewDidLoad() {
  }
}
