import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@modules/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  errorSession: boolean= false
  formLogin: FormGroup = new FormGroup({});
  constructor(private authService:AuthService, private cookie: CookieService) { }

  ngOnInit(): void {
    this.formLogin = new FormGroup(
      {
        email: new FormControl('',[
          Validators.required,
          Validators.email
        ]),
        password:new FormControl('',[
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12)
        ])
      }
    )
  }

  sendLogin(): void{
    const { email, password} = this.formLogin.value
    // console.log('data', body);
    this.authService.sendCredentials( email, password)
    //Todo 200<400
    .subscribe(responseOk=>{//Todo,cuando el usuario ingresa sus credenciales correctas
      console.log('sesion iniciada correcta', responseOk);
      const  { tokenSession, data} = responseOk
      this.cookie.set('token',tokenSession, 4, '/')
    },
    err =>{//Todo error >=400
      this.errorSession= true
      console.log('ocurrio error coon tu email o password');
    })
  }

}
