import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/traks.models';
import { TrackService } from '@modules/tracks/services/track.service';
import { TracksModule } from '@modules/tracks/tracks.module';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit, OnDestroy {
  tracksTrending: Array<TrackModel> = []
  tracksRandom: Array<TrackModel> = []
  listObservers$: Array<Subscription> = []
  constructor(private trackService: TrackService) { }

  ngOnInit(): void {
    this.loadDataAll()
    this.loadDataRandom()    
  }

  async loadDataAll(): Promise<any> {
   this.tracksTrending = await this.trackService.getAllTracks$().toPromise()
  //  this.tracksRandom = await this.trackService.getAllRadom$().toPromise()
  //  console.log('data canciones',dataRaw);
    // .subscribe((response: TrackModel[])=>{
    //   this.tracksTrending = response
    //   // console.log('data canciones',response);
    // })
  }

  loadDataRandom(): void {

  this.trackService.getAllRadom$()
   .subscribe((response: TrackModel[])=>{
   this.tracksRandom = response
   // console.log('data canciones',response);
    })
}

  ngOnDestroy(): void{
    }

}
