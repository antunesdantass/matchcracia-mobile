import { Component, Input } from "../../../../node_modules/@angular/core";

@Component({
    selector: 'card',
    templateUrl: 'card.component.html'
})
export class CardComponent {
    
    @Input() deputado;
    @Input() lei;
}