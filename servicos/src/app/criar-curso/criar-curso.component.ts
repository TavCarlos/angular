import { Component } from '@angular/core';
import { CursosService } from '../cursos/cursos.service';


@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.scss'],
  providers: [CursosService] //cria uma instância separada para esse componente.
  //caso não tenha esse providers, será uma instância só para toda aplicação.
})
export class CriarCursoComponent {

  cursos: String[] = [];

  constructor(private cursosCursos: CursosService){
  }

  ngOnInit(){
    this.cursos = this.cursosCursos.getCursos();
  }

  onAddCursos(inputValue: String){
    this.cursosCursos.addCursos(inputValue);
  }

}
