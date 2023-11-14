import { Router } from '@angular/router';
import { EventEmitter, Injectable } from '@angular/core';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuarioAtenticado: boolean = false;
  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) {}


  fazerLogin(usuario: Usuario){
    if(usuario.nome === "usuario" && usuario.senha === '123456'){
      this.usuarioAtenticado = true;
      this.mostrarMenuEmitter.emit(true);

      this.router.navigate(['/']);

    } else{
      this.usuarioAtenticado = false;
      this.mostrarMenuEmitter.emit(false);
    }
  }


  verificarUsuarioAutenticado(): boolean{
    return this.usuarioAtenticado;
  }
}
