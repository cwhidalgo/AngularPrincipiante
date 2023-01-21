import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { CookiesService} from 'ngx-cookie-service';


@NgModule({
  declarations: [//todo: componentes directivas, pipes
    // AppComponent, FavoritesPageComponent,
    AppComponent,

  ],
  imports: [//solo se importan otro modulos
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    CookieService
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
