import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {

  mockCover: any={
    cover:'https://www.udemy.com/course/angular-principiantes-leifer-mendez/learn/lecture/28818468#overview',
    album:'cover',
    name:'salsa'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
