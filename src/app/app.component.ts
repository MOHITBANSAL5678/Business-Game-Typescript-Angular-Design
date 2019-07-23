import { Component, OnInit } from '@angular/core';
import { Board } from './game-models/board.model';
import { grid } from './static/grid-enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'business-game';
  board: Board

  ngOnInit(): void {
    this.board.size = grid.Size;
    


  }

}
