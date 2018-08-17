import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { LeisPage } from './../leis/leis';
import { PerfilPage } from './../perfil/perfil';

@Component({
  templateUrl: 'tabs.html',
})
export class TabsPage {
  perfilRoot = PerfilPage;
  leisRoot = LeisPage;
  infoRoot = ContactPage;

  constructor() {}
}
