import { Component } from '@angular/core';

import { AnalyticsPage } from './../analytics/analytics';
import { LeisPage } from './../leis/leis';
import { PerfilPage } from './../perfil/perfil';

@Component({
  templateUrl: 'tabs.html',
})
export class TabsPage {
  perfilRoot = PerfilPage;
  leisRoot = LeisPage;
  infoRoot = AnalyticsPage;

  constructor() {}
}
