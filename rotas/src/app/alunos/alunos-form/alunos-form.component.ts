import { ActivatedRoute } from '@angular/router';
import { AlunosService } from './../alunos.service';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-alunos-form',
  templateUrl: './alunos-form.component.html',
  styleUrls: ['./alunos-form.component.scss']
})
export class AlunosFormComponent {

  aluno!: any;
  inscricao!: Subscription;

  constructor(private alunosService: AlunosService,
    private route: ActivatedRoute ){}

    ngOnInit(){
      this.inscricao = this.route.params.subscribe(
        (params: any) => {
        let id = params['id'];

        //this.aluno = this.alunosService.getAluno(id);
        this.aluno = this.alunosService.getAlunoAtributo();

        if(this.aluno == null) this.aluno = {};
        }
      )
    }

    ngOnDestroy(){
      this.inscricao.unsubscribe();
    }
}
