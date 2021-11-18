import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/traks.models';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';//programacion reactiva

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {

  mockCover: TrackModel={
    cover:"https://jenesaispop.com/wp-content/uploads/2009/09/guetta_onelove.jpg",
    album:'One Love',
    name:'Getting Over',
    url:'http://localhost:3000/track.mp3',
    _id: 1  
  }

  listObservers$:Array<Subscription> = []


  constructor(private multimediaService:MultimediaService) { }

  ngOnInit(): void {
    const observer1$: Subscription = this.multimediaService.callback.subscribe(
      (response:TrackModel) =>{
        console.log('Recibiendo cancion',response);
      }
    )
     this.listObservers$= [observer1$]
  }

  ngOnDestroy(): void{
     this.listObservers$.forEach(u=>u.unsubscribe())
    console.log('cancion bommmm....');
  }

}
