import { Component, OnDestroy, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DetalhesLeiPage } from './../detalhes-lei/detalhes-lei';

/**
 * Generated class for the MatchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-match',
  templateUrl: 'match.html',
})
export class MatchPage implements OnInit, OnDestroy {
  display: string;
  tabBarElement: any;

  lei: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tabBarElement = document.querySelector('#tabs .tabbar');
  }

  redirect() {
    if (this.navCtrl.length()) {
      return this.navCtrl.pop();
    }
    return this.navCtrl.goToRoot({});
  }

  goToDetalhesLei() {
    return this.navCtrl.push(DetalhesLeiPage, {
      lei: JSON.stringify(this.lei),
    });
  }

  ngOnInit() {
    this.lei = JSON.parse(this.navParams.get('lei') || '{}');
    if (this.tabBarElement) {
      this.display = this.tabBarElement.style.display;
      this.tabBarElement.style.display = 'none';
    }
  }

  ngOnDestroy() {
    if (this.tabBarElement) {
      this.tabBarElement.style.display = this.display;
    }
  }
}
