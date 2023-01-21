import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/traks.models';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

   private readonly URL = environment.api
  constructor(private http:HttpClient) {
    }

    private skipById(listTracks:TrackModel[], id: number): Promise<TrackModel[]> {
      return new Promise((resolve, reject)=>{
        const listTmp = listTracks.filter(a => a._id!=id)
        resolve(listTmp)
      })
    }
    // devolver todas las canciones
    getAllTracks$(): Observable<any>{
      return this.http.get(`${this.URL}/tracks`)
      .pipe(
        map(({data}: any)=>{
          return data
        })
      )
    }

        // devolver todas las canciones Radom
        getAllRadom$(): Observable<any>{
          return this.http.get(`${this.URL}/tracks`)
          .pipe(
            tap(data=>console.log('ok ok ok', data)),
            mergeMap(({data}: any)=>this.skipById(data,1)),
            // { //lista invertida
            //   return data.reverse()
            // }),
            //  map((dataRevertida)=> { //fiter comun de array
            //   return dataRevertida.filter((track:TrackModel)=>track._id !=1)
            // })
            tap(data=>console.log('ok ok ok', data)),
            catchError((err)=>{
              const {status, statusText} = err
              console.log('algo paso revisame alert',[status, statusText]);
              return of([])
            })
          )
        }

  }