import { Component, OnInit } from '@angular/core';
import { Board } from './game-models/board.model';
import { Grid } from './static/grid-enum';
import { Cell } from './game-models/cell.model';
import { Categories } from './static/categories.enum';
import { Player } from './game-models/player.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'business-game';
  board: Board;
  gridSize: number

  ngOnInit(): void {
    this.gridSize = Grid.Size;

    let cell1 = new Cell(1, Categories.Hotel);
    let cell2 = new Cell(2, Categories.Jail);
    let cell3 = new Cell(3, Categories.Lottery);
    let cell4 = new Cell(4, Categories.Hotel);
    let cell5 = new Cell(5, Categories.Jail);

    // move this in cell class
    this.board.cells.push(cell1);
    this.board.cells.push(cell2);
    this.board.cells.push(cell3);
    this.board.cells.push(cell4);
    this.board.cells.push(cell5);


  let  p1 = new Player();
  let  p2 = new Player();

  

  }

}
