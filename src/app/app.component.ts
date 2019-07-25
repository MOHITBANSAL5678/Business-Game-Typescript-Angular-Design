import { Component, OnInit } from '@angular/core';

import { Board } from './game-models/board.model';
import { Categories } from './static/categories.enum';
import { Cell } from './game-models/cell.model';
import { Factory } from './factory';
import { Grid } from './static/grid-enum';
import { Hotel } from './game-models/hotel.model';
import { Jail } from './game-models/jail.model';
import { Player } from './game-models/player.model';
import { Util } from './util/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'business-game';
  board: Board = new Board();
  gridSize: number;
  inputs: Array<string> = ['h', 'h', 'h', 'h'];
  Players: Array<Player>=[];
  moves: number = 5;

  ngOnInit(): void {
    this.gridSize = Grid.Size;
    this.inputs.forEach(input => {
      this.board.cellContainer.push(Factory.creator(input));
    });

    let p1 = new Player();
    let p2 = new Player();
    this.Players.push(p1);
    this.Players.push(p2);

    for (let index = 0; index < this.moves; index++) {
      this.Players.forEach(player => {
        let pos = player.setPosition(Util.randomNumber());

        if (this.board.cellContainer[pos].type == Categories.H) {
          let cell: any = this.board.cellContainer[pos];
          if (cell.owner) {

          }
          else {
            cell.owner = player;
          }
        }

      });
    }



  }

}
