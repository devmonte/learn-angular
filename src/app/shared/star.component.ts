import {Component, OnChanges} from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    // tslint:disable-next-line:no-inferrable-types
    rating: number = 4;
    starWidth: number;

    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
    }
}
