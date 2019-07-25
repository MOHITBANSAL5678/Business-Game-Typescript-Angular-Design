import { Game } from './../static/game.enum';

export class Bank {
    private bankCash = Game.BankInitialMoney;

    public getBankCash() {
        return this.bankCash;
    }

    public addCash(cash: number) {
        this.bankCash = this.bankCash + cash;
    }
    public deductCash(cash: number): boolean {
        this.bankCash = this.bankCash - cash;
        if (this.bankCash > 0) {
            return true;
        } else {
            return false;
        }
    }



}
