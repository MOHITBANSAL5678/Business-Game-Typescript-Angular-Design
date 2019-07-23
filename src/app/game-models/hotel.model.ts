import { Player } from './player.model';
import { HotelGrade } from '../static/hotel-grade.enum';

export class Hotel {
    price: number;
    owner: Player;
    type: HotelGrade.G | HotelGrade.P | HotelGrade.S;
    getRent() {
        if (this.type === HotelGrade.S) {
            return 100;
        }
    }
}