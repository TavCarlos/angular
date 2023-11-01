import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.scss']
})
export class DiretivaNgifComponent {

  meusCursos: String[] = [];

  mostrarCursos: boolean = false;

  onButtonClick(){
    this.mostrarCursos = !this.mostrarCursos;
  }
}
