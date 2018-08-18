import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'card',
    templateUrl: 'card.component.html'
})
export class CardComponent implements OnInit {
    
    @Input() lei;

    ngOnInit() {
        console.log("lei", this.lei)
    }
}