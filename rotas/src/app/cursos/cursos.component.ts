import { Component } from '@angular/core';
import { CursosService } from './cursos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent {

  cursos!: any[];
  pagina!: number;
  inscricao!: Subscription;

  constructor(private cursosService: CursosService,
              private router: Router,
              private route: ActivatedRoute){}


  ngOnInit(){
    this.cursos = this.cursosService.getCursos();
   this.inscricao =  this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.pagina = queryParams['pagina'];
      }
    )
  }

  proximaPagina(){
    this.router.navigate(['/cursos'],
    {queryParams: {'pagina': ++this.pagina}})
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
