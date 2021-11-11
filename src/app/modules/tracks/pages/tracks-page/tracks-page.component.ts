import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/traks.models';
import * as dataRaw from '../../../../../data/tracks.json'
@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit {

  mockTracksList: Array<TrackModel>=[

  ]
  // tracksTrending: Array<TrackModel> = []
  // tracksRandom: Array<TrackModel> = []
  // listObservers$: Array<Subscription> = []
  constructor() { }

  ngOnInit(): void {
    const {data}:any=(dataRaw as any).default
    this.mockTracksList=data;
    // console.log(data)
  }

}
