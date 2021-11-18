import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/traks.models';
import { observable, Observable, of } from 'rxjs';
import * as dataRaw from '../../../../data/tracks.json'
import { TracksModule } from '../tracks.module';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  dataTracksTrending$: Observable<TrackModel[]> =of([])
  dataTracksRandom$: Observable<any> =of([])
  
  constructor() {
    const { data }: any =(dataRaw as any).default;
    
    this.dataTracksTrending$ = of(data)
    this.dataTracksRandom$ = new Observable((observer)=> {
      const tracksExample :TrackModel = {
          _id:9,
          name:'lave',
          album:'cartel de santa',
          url:'http://',
          cover:'https://th.bing.com/th/id/R.35b3dc81d36028bb72d97b4df454fdcb?rik=jEEI695adfmUrA&pid=ImgRaw&r=0'

      }
      setTimeout(()=> {
        observer.next([tracksExample])
      }, 3500)
      

    })
   }
}
