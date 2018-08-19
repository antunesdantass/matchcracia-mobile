import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EditarPerfilPage } from '../editar-perfil/editarPerfil';
import { DbService } from '../../providers/db.provider';

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

  constructor(private dbService: DbService, public navCtrl: NavController, public navParams: NavParams) {
    this.usuario = dbService.db.usuario;
    dbService.db.usuarioChanged = () => {
      this.usuario = dbService.db.usuario;
    };
  }

  editarPerfil() {
    this.navCtrl.push(EditarPerfilPage, this.usuario);
  }

  ionViewDidLoad() {
  }
}
