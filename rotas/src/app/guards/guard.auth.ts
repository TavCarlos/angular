import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../login/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  

  if(auth.verificarUsuarioAutenticado()){
    return true;
  }

  router.navigate(['/login'])

  return false;
}
