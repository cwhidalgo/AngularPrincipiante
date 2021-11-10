import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { SileBarComponent } from './components/sile-bar/sile-bar.component';



@NgModule({
  declarations: [
    SileBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SileBarComponent
  ]
})
export class SharedModule { }
