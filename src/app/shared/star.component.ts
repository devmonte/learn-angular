import {Component, OnChanges, Input, Output, EventEmitter} from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    // tslint:disable-next-line:no-inferrable-types
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
    }

    onClick(): void {
        console.log(`Click`);
        this.ratingClicked.emit(`The rating ${this.rating} was clicked`);
    }
}
