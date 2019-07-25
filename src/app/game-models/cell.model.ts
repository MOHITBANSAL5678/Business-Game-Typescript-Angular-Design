import { Player } from './player.model';

export class Cell {
    static code = 1;
    public id: number;
    public type: string;
    constructor() {
        this.id = Cell.code;
        Cell.code++;
    }
}

