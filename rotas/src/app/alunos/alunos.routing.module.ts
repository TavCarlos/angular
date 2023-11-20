import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlunosComponent } from './alunos.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunosDetalheComponent } from './alunos-detalhe/alunos-detalhe.component';
import { AlunosGuard } from '../guards/alunos.guard';
import { AlunosDeactivateGuard } from './aluno-deactivate.guard';


//com children irá renderizar os dois components ao mesmo tempo
//a rota pai e a rota filha.
const alunosRoutes: Routes = [
  {path: '', component: AlunosComponent,
  canActivateChild: [AlunosGuard],
  children: [ 
    {path: 'novo', component: AlunosFormComponent, canDeactivate: [AlunosDeactivateGuard] },
    {path: ':id', component: AlunosDetalheComponent},
    {path: ':id/editar', component: AlunosFormComponent, canDeactivate: [AlunosDeactivateGuard]}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(alunosRoutes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }