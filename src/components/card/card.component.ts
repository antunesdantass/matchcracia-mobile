import { Component, Input } from "@angular/core";

@Component({
    selector: 'card',
    templateUrl: 'card.component.html'
})
export class CardComponent {
    
    @Input() deputado;
    @Input() lei;
}