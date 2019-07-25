import { Game } from './../static/game.enum';
import { Grid } from '../static/grid-enum';
import { Hotel } from './hotel.model';

export class Player {
    cash: number;
    hotels: Array<Hotel>;
    position: number;

    constructor() {
        this.cash = Game.PlayerInitialMoney;
        this.position = 0;
    }

    setPosition(position: number): number {
        let movePosition = position + this.position;
        if (movePosition > Grid.Size) {
            this.position = movePosition - Grid.Size;
        } else {
            this.position = position;
        }
        return this.position;
    }
}
