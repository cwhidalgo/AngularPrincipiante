import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sile-bar',
  templateUrl: './sile-bar.component.html',
  styleUrls: ['./sile-bar.component.css']
})
export class SileBarComponent implements OnInit {
  mainMenu: {
    defaultOptions: Array<any>, accessLink: Array<any>
  } = { defaultOptions: [], accessLink: [] }

  customOptions: Array<any> = []

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.mainMenu.defaultOptions=[
      {
        name: 'Home',
        icon: 'uil uil-estate',
        router: ['/','auth']
      },
      {
        name: 'Buscar',
        icon: 'uil uil-search',
        router: ['/', 'history']
      },
      {
        name: 'Tu biblioteca',
        icon: 'uil uil-chart',
        router: ['/', 'favorites'],
        query: { hola: 'mundo' }
      }
    ]
    this.mainMenu.accessLink = [
      {
        name: 'Crear lista',
        icon: 'uil-plus-square'
      },
      {
        name: 'Canciones que te gustan',
        icon: 'uil-heart-medical'
      }
    ]
    this.customOptions = [
      {
        name: 'Mi lista º1',
        router: ['/']
      },
      {
        name: 'Mi lista º2',
        router: ['/']
      },
      {
        name: 'Mi lista º3',
        router: ['/']
      },
      {
        name: 'Mi lista º4',
        router: ['/']
      }
    ]

    // this.trackService.dataTracksRandom$
    // .subscribe((response: any ) => {
    //   this.customOptions.push(
    //     {
    //       name:response[0].name,
    //       router: []
    //     }
    //   )
    // })
  }
goTo($event:any):void{
  this.router.navigate(['/', 'favorites'],{
    queryParams:{
      key1:'value1',
      key2:'value1',
      key3:'value3'
    }
  })
  console.log($event)

}
}
