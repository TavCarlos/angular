import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlunosComponent } from './alunos.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunosDetalheComponent } from './alunos-detalhe/alunos-detalhe.component';


//com children irá renderizar os dois components ao mesmo tempo
//a rota pai e a rota filha.
const alunosRoutes: Routes = [
  {path: 'alunos', component: AlunosComponent, children: [ 
    {path: 'novo', component: AlunosFormComponent},
    {path: ':id', component: AlunosDetalheComponent},
    {path: ':id/editar', component: AlunosFormComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(alunosRoutes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }