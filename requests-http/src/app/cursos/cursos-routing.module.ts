import { RouterModule, Routes } from "@angular/router";
import { CursosListaComponent } from "./cursos-lista/cursos-lista.component";
import { NgModule } from "@angular/core";
import { CursosFormComponent } from "./cursos-form/cursos-form.component";



const routes: Routes = [
    {path: '', component: CursosListaComponent},
    {path: 'novo', component: CursosFormComponent},
    {path: 'editar/:id', component: CursosFormComponent}
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class CursosRoutingModule { }