import { inject } from '@angular/core';
import { CanActivateFn, CanMatchFn, Router } from '@angular/router';
import { AuthService } from '../login/auth.service';
import { Observable } from 'rxjs';

const verificarAcesso = (): boolean => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if(auth.verificarUsuarioAutenticado()){
    return true;
  }

  router.navigate(['/login'])

  return false;
}


export const authGuard: CanActivateFn = (route, state) => { //usuário n logado n pode acess. recursos
  return verificarAcesso();
}

export const authLoad: CanMatchFn = (route, state): //Caso reload, protege as rotas para o browser
  Observable<boolean> | Promise<boolean> | boolean => {//não fazer download dos recursos
   return verificarAcesso();//caso o usuário não esteja autenticado
}