import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './guards/guard.auth';
import { AlunosGuard } from './guards/alunos.guard';


const routes: Routes = [
  {path: 'cursos', 
  loadChildren: () => import('./cursos/cursos.module').then(  //lazy routing
    mod => mod.CursosModule),
  canActivate: [authGuard]  
  },
  {path: 'alunos',
    loadChildren: () => import('./alunos/alunos.module').then( //lazy routing
      mod => mod.AlunosModule),
    canActivate: [authGuard]
  },
  {path: 'login', component: LoginComponent},
  {path: '', component: HomeComponent, canActivate: [authGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
