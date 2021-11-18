import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes = [
  {
    path:'login',//todo http:localhost:4200/auth/login
    component:LoginPageComponent
  },
  {
    path:'**',//no existe el envio de la ruta
    redirectTo:'/auth/login'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
