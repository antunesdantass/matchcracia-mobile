import { Component, ViewChild, QueryList, ViewChildren, Input, ElementRef } from '@angular/core';
import { DragEvent, SwingStackComponent, SwingCardComponent } from 'angular2-swing';

@Component({
    selector: 'cards',
    templateUrl: 'cards.html'
})
export class CardsComponent {
    @ViewChild('myswing1') swingStack: SwingStackComponent;
    @ViewChildren('mycards1') swingCards: QueryList<SwingCardComponent>;
    @ViewChildren('aprovo') aprovo: QueryList<ElementRef>;
    @ViewChildren('reprovo') reprovo: QueryList<ElementRef>;

    @Input() 
    public cards: Array<any>;

    @Input() 
    public onSwipe: Function;

    stackConfig = {
        throwOutConfidence: (offsetX, offsetY, element) => {
            return Math.min(Math.abs(offsetX) / (element.offsetWidth / 2), 1);
        },
        transform: (element, x, y, r) => {
            this.onItemMove(element, x, y, r);
        },
        throwOutDistance: (d) => {
            return 800;
        }
    };
    
    ngAfterViewInit() {
        console.log(this.reprovo)
        this.aprovo.last.nativeElement.style.opacity = '0';
        this.reprovo.last.nativeElement.style.opacity = '0';
        // Either subscribe in controller or set in HTML
        this.swingStack.throwin.subscribe((event: DragEvent) => {
            // console.log(event)
            event.target.style.background = '#ffffff !important';
            this.aprovo.last.nativeElement.style.opacity = '0';
            this.reprovo.last.nativeElement.style.opacity = '0';
        });
    }

    onItemMove(element, x, y, r) {
        var color = '';
        var abs = Math.abs(x);
        let min = Math.trunc(Math.min(16 * 16 - abs, 16 * 16));
        let hexCode = this.decimalToHex(min, 2);

        if (x < 0) {
            color = '#FF' + hexCode + hexCode;            
            this.aprovo.last.nativeElement.style.opacity = '0';
            this.reprovo.last.nativeElement.style.opacity = Math.min(1, Math.abs(x) / 300);
        } else {
            this.reprovo.last.nativeElement.style.opacity = '0';
            this.aprovo.last.nativeElement.style.opacity = Math.min(1, x / 300);
            color = '#' + hexCode + 'FF' + hexCode;
        }
        
        element.style.background = color;
        element.style['transform'] = `translate3d(0, 0, 0) translate(${x}px, ${y}px) rotate(${r}deg)`;
    }

    onThrow(keep: boolean) {
        const removedCard = this.cards.pop();      

        this.onSwipe(keep, removedCard);
    }

    decimalToHex(d, padding) {
        var hex = Number(d).toString(16);
        padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;

        while (hex.length < padding) {
            hex = "0" + hex;
        }

        return hex;
    }
}