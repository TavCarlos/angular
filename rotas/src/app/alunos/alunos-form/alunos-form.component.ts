import { ActivatedRoute } from '@angular/router';
import { AlunosService } from './../alunos.service';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { IFormCanDeactivate } from 'src/app/guards/iform-candeactivate';

@Component({
  selector: 'app-alunos-form',
  templateUrl: './alunos-form.component.html',
  styleUrls: ['./alunos-form.component.scss']
})
export class AlunosFormComponent implements IFormCanDeactivate{

  aluno!: any;
  inscricao!: Subscription;
  private formMudou: boolean = false;

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


    onInput(){
      this.formMudou = true;
    }

    podeMudarRota(){
      if(this.formMudou){
          return confirm('Tem certeza que deseja sair dessa página');        
      }
      return true;
    }

    podeDesativar() {
      return this.podeMudarRota();
    }

}
