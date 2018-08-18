import { Component, Input } from '@angular/core';

/**
 * Generated class for the ImageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-image',
  templateUrl: 'app-image.html',
})
export class ImageComponent {
  window: any = window;

  loaded = false;
  @Input()
  src: string;
  @Input()
  alt: string;

  toggleLoaded() {
    this.loaded = true;
  }
}
