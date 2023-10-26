import { Component } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent {

  nomePortal: String;
  cursos: String[];

  constructor(){
    this.nomePortal = 'http://loiane.traning';
    this.cursos = ['Java', 'Angular'];
  }

}
