import { Categories } from './static/categories.enum';
import { Hotel } from './game-models/hotel.model';
import { Jail } from './game-models/jail.model';

export class Factory {

    public static creator(type: string) {
        type = type.toUpperCase();
        if (Categories.H === Categories[type]) {
            return new Hotel();
        }
        if (Categories.J === Categories[type]) {
            return new Jail();
        }
    }

}


