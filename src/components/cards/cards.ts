import { Component, ViewChild, QueryList, ViewChildren, Input, ElementRef, OnInit } from '@angular/core';
import { DragEvent, SwingStackComponent, SwingCardComponent } from 'angular2-swing';

@Component({
    selector: 'cards',
    templateUrl: 'cards.html'
})
export class CardsComponent implements OnInit {
    @ViewChild('myswing1') swingStack: SwingStackComponent;
    @ViewChildren('mycards1') swingCards: QueryList<SwingCardComponent>;
    @ViewChildren('aprovo') aprovo: QueryList<ElementRef>;
    @ViewChildren('reprovo') reprovo: QueryList<ElementRef>;

    @Input()
    public cards: Array<any>;

    @Input()
    public onSwipe: Function;

    private locked: Date = new Date();

    ngOnInit() {
    }

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
        this.setOpAp('0');
        this.setOpRe('0');
        // Either subscribe in controller or set in HTML
        this.swingStack.throwin.subscribe((event: DragEvent) => {
            event.target.style.background = '#ffffff !important';
            console.log('primeiro callback');
            this.setOpAp('0');
            this.setOpRe('0');
        });
        this.swingStack.throwout.subscribe(() => {
            console.log('segundo callback');
            this.aprovo.forEach((e) => this.setOpAp('0', e));
            this.reprovo.forEach((e) => this.setOpRe('0', e));
            this.locked = new Date();
        })
    }

    onItemMove(element, x, y, r) {
        var color = '';
        var abs = Math.abs(x);
        let min = Math.trunc(Math.min(16 * 16 - abs, 16 * 16));
        let hexCode = this.decimalToHex(min, 2);

        const waitTime = 2 * 1000;
        if (new Date().getTime() - this.locked.getTime() > waitTime) {
            if (x < 0) {
                color = '#FF' + hexCode + hexCode;
                this.setOpAp('0');;
                this.setOpRe(Math.min(1, Math.abs(x) / 300));
            } else {
                this.setOpRe('0');
                this.setOpAp(Math.min(1, x / 300));
                color = '#' + hexCode + 'FF' + hexCode;
            }
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
    setOpAp(o, e = null) {
        if (this.aprovo.last || e)
            (e || this.aprovo.last).nativeElement.style.opacity = o;
    }

    setOpRe(o, e = null) {
        if (this.reprovo.last || e)
            (e || this.reprovo.last).nativeElement.style.opacity = o;
    }
}