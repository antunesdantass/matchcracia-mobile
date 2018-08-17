import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the SwipeIonContentComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'swipe-ion-content',
  templateUrl: 'swipe-ion-content.html',
})
export class SwipeIonContentComponent {
  constructor(public navCtrl: NavController) {}

  swipeEvent(e) {
    if (e.direction == '2') {
      this.navCtrl.parent.select(2);
    } else if (e.direction == '4') {
      this.navCtrl.parent.select(0);
    }
  }
}
