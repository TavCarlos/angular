import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AlunosComponent } from './alunos.component';
import { AlunosDetalheComponent } from './alunos-detalhe/alunos-detalhe.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunosRoutingModule } from './alunos.routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AlunosComponent,
    AlunosDetalheComponent,
    AlunosFormComponent,
  ],
  imports: [
    CommonModule,
    AlunosRoutingModule,
    FormsModule
  ]
})
export class AlunosModule { }
