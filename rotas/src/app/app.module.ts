import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosModule } from './cursos/cursos.module';
import { AlunosComponent } from './alunos/alunos.component';
import { AlunosDetalheComponent } from './alunos/alunos-detalhe/alunos-detalhe.component';
import { AlunosFormComponent } from './alunos/alunos-form/alunos-form.component';
import { AlunosModule } from './alunos/alunos.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursosModule,
    AlunosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
