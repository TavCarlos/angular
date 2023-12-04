import { Component } from '@angular/core';
import { CursosService } from '../cursos.service';
import { Curso } from '../iCurso';
import { Observable, Subject, catchError, empty, of } from 'rxjs';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss']
})
export class CursosListaComponent {

  //cursos: Curso[] = [];

  curso$!: Observable<Curso[]>;
  error$ = new Subject<boolean> //através do subject crio um Observable

  constructor(private cursosService: CursosService ){}

  ngOnInit() {
   // this.cursosService.listarCursos().subscribe(
   //   dados => this.cursos = dados)

   this.curso$ = this.cursosService.listarCursos()
   .pipe(
      catchError(error  => {
        console.error(error);
        this.error$.next(true); //emito o valor de error$ como true
        return of(); // necessárior retornar algo, pois no template estou utilizando
        //*ngIf="curso$ | async as cursos; else loading, caso curso$ não tenha resultado
        //ficará o valor de loading para sempre.
      })
   );
  }

  //toda vez que se incresver é necessário se desinscrever para que não haja um vazamento de memória
  //mesmo ao destruir o componente.
}
