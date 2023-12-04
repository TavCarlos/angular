import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs';

import { Curso } from './iCurso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly API = 'http://localhost:3000/Cursos';

  constructor(private http: HttpClient) {}

  listarCursos(){
    return this.http.get<Curso[]>(this.API)
      .pipe(delay(2000));
  }
  
}
