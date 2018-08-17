import { Component } from '@angular/core';

/**
 * Generated class for the SwipeIonContentComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'swipe-ion-content',
  templateUrl: 'swipe-ion-content.html'
})
export class SwipeIonContentComponent {

  text: string;

  constructor() {
    console.log('Hello SwipeIonContentComponent Component');
    this.text = 'Hello World';
  }

}
