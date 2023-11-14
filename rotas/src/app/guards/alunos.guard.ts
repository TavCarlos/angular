import { inject } from "@angular/core";
import { CanActivateChildFn, Router } from "@angular/router";

export const AlunosGuard: CanActivateChildFn = (route, state) => {
  const router = inject(Router);
  
  if(state.url.includes('editar')){
    alert('Usuário sem acesso!')
    return false;
  }

  return true;
}
