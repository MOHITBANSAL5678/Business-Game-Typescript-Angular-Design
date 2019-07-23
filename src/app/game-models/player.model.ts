import { Hotel } from './hotel.model';
import { Grid } from '../static/grid-enum';

export class Player {
    cash: number;
    hotels: Array<Hotel>;
    position: number;

    constructor() {
        this.cash = 5000;
        this.position = 0;
    }

    setPosition(position: number): void {

        let movePosition = position + this.position;
        if (movePosition > Grid.Size) {
            this.position = movePosition - Grid.Size;
        } else {
            this.position = position;
        }
    }
}