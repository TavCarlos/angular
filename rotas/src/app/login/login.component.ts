import { AuthService } from './auth.service';
import { Component } from '@angular/core';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public usuario: Usuario = new Usuario;

  constructor(private authService: AuthService){}

  fazerLogin(){
    this.authService.fazerLogin(this.usuario);
  }

}
