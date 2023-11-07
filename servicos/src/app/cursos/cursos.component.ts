import { Component } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
  providers: [CursosService] //cria uma instância separada para esse componente.
  //caso não tenha esse providers, será uma instância só para toda aplicação.
})
export class CursosComponent {

  cursos: String[] = [];
  //cursosService!: CursosService;

  constructor(private cursoService: CursosService ) { //caso queira tirar o 'private' precisa utiliar:
    //this.cursosService = cursoService;
  }

  ngOnInit(){
    this.cursos = this.cursoService.getCursos();
  }
}
