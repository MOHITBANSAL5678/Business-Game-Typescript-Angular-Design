import { Categories } from './../static/categories.enum';
import { Cell } from './cell.model';

export class Jail extends Cell {
    public static readonly fine = 100;

    constructor() {
        super()
        this.type = Categories.J;
    }
}
