import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/traks.models';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {

  mockCover: TrackModel={
    cover:'https://www.udemy.com/course/angular-principiantes-leifer-mendez/learn/lecture/28818468#overview',
    album:'cover',
    name:'salsa',
    url:'http://localhost/tracks.mp3',
    _id: 1
  }
  constructor() { }

  ngOnInit(): void {
  }

}
