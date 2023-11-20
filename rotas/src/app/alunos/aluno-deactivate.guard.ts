import { ActivatedRouteSnapshot, CanDeactivateFn, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AlunosFormComponent } from "./alunos-form/alunos-form.component";
import { IFormCanDeactivate } from "../guards/iform-candeactivate";

export const AlunosDeactivateGuard: CanDeactivateFn<IFormCanDeactivate> = (
    component: IFormCanDeactivate,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> 
    | Promise<boolean | UrlTree> 
    |boolean | UrlTree => {

    //return component.podeMudarRota();
      return component.podeDesativar();
  }

  //Caso seja necessário criar um CanDeactivateFn para uma classe específico,
  //basta colocar o nome da classe no '<>' como exemplo:  CanDeactivateFn<AlunosFormComponent>;
  //Se precisar utilizar o CanDeactivateFn de forma genérica, 
  //basta criar uma interface, como no exemplo acima