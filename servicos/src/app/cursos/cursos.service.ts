import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  cursos: String[] = ['Java', 'Angular', 'Kotlin', 'C#'];

  constructor() { 
    console.log("cursos-service")
  }

  getCursos(){
    return this.cursos;
  }

  addCursos(inputValue: String){
    this.cursos.push(inputValue);
  }
}
