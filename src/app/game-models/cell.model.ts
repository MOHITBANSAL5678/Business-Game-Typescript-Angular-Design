import { Categories } from '../static/categories.enum';
import { Player } from './player.model';

export class Cell {
sold : Player
    constructor(public id: number,
        public type: Categories.Hotel | Categories.Jail | Categories.Lottery
) { }
}