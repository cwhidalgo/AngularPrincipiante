import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [//todo: componentes directivas, pipes
    // AppComponent, FavoritesPageComponent,
    AppComponent,

  ],
  imports: [//solo se importan otro modulos
    BrowserModule,
    AppRoutingModule
     //HttpClientModule
  ],
  providers: [
    // CookieService,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: InjectSessionInterceptor,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
