import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { LeisPage } from './../leis/leis';

@Component({
  templateUrl: 'tabs.html',
})
export class TabsPage {
  perfilRoot = HomePage;
  leisRoot = LeisPage;
  infoRoot = ContactPage;

  constructor() {}
}
