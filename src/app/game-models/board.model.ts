import { Cell } from './cell.model';
import { Hotel } from './hotel.model';
import { Jail } from './jail.model';

export class Board {
    cellContainer: Array<Hotel | Jail>=[];
    constructor() {
    }
}
