import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SileBarComponent } from '@shared/components/sile-bar/sile-bar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {
    path:'tracks',
    loadChildren:()=>import('@modules/tracks/tracks.module').then(m=>m.TracksModule)
  },
  {
    path:'favorites',
    loadChildren:()=>import('@modules/favorites/favorites.module').then(m=>m.FavoritesModule)
  },
  {
    path:'history',
    loadChildren:()=>import('@modules/history/history.module').then(m=>m.HistoryModule)
  },
  {
    path:'**', // Todo 404 cuando no existe la ruta 
    redirectTo:'/tracks'
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
