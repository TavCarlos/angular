import { Subscription } from 'rxjs';
import { Component } from '@angular/core';

import { AlunosService } from '../alunos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-alunos-detalhe',
  templateUrl: './alunos-detalhe.component.html',
  styleUrls: ['./alunos-detalhe.component.scss']
})
export class AlunosDetalheComponent {

  aluno!: any;
  inscricao!: Subscription;

  constructor(private alunoService: AlunosService,
    private route: ActivatedRoute,
    private router: Router){
  }

  ngOnInit(){
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

       this.aluno = this.alunoService.getAluno(id);
      }
    )
  }

  editarContato(){
    this.router.navigate(['/alunos', this.aluno.id, 'editar'])
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
