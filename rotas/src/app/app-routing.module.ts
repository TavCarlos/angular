import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanMatchFn } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { authGuard, authLoad } from './guards/guard.auth';
import { AlunosGuard } from './guards/alunos.guard';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';


const routes: Routes = [
  {path: 'cursos', 
  loadChildren: () => import('./cursos/cursos.module').then(  //lazy routing
    mod => mod.CursosModule),
  canActivate: [authGuard]  
  },
  {path: 'alunos',
    loadChildren: () => import('./alunos/alunos.module').then( //lazy routing
      mod => mod.AlunosModule),
    canActivate: [authGuard],
    canMatch: [authLoad]
  },
  {path: 'login', component: LoginComponent},
  {path: '', component: HomeComponent, canActivate: [authGuard]},
  {path: '**', component: PaginaNaoEncontradaComponent, canActivate: [authGuard]} //Caso o usuário
  //digite uma rota que não exista, ele irá refirecionar para a página de login com authGuard.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
