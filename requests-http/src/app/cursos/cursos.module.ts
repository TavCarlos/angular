import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosListaComponent } from './cursos-lista/cursos-lista.component';
import { RouterModule } from '@angular/router';
import { CursosRoutingModule } from './cursos-routing.module';
import { CursosFormComponent } from './cursos-form/cursos-form.component';



@NgModule({
  declarations: [
    CursosListaComponent,
    CursosFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CursosRoutingModule
  ],
  exports: [
    CursosListaComponent,
    CursosFormComponent
  ]
})
export class CursosModule { }
