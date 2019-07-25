import { Categories } from './../static/categories.enum';
import { Cell } from './cell.model';
import { HotelGrade } from '../static/hotel-grade.enum';
import { Player } from './player.model';

export class Hotel extends Cell {
    owner: Player;
    grade: HotelGrade.Gold | HotelGrade.Silver | HotelGrade.Platinum;

    constructor() {
        super()
        this.type = Categories.H;
        this.grade = HotelGrade.Silver;
    }
    getRent() {
        if (this.type === HotelGrade.Silver) {
            return 100;
        }
        if (this.type === HotelGrade.Gold) {
            return 100;
        }
        if (this.type === HotelGrade.Platinum) {
            return 100;
        }

    }


}
