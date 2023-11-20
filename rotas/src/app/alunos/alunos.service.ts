import { Injectable } from '@angular/core';
import { Aluno } from './aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  aluno!: any;
  alunos: Aluno[] = [
    {id: 1, nome: 'David', email: 'david@email.com'},
    {id: 2, nome: 'Mio', email: 'mio@email.com'},
    {id: 3, nome: 'Lucas', email: 'lucas@email.com'}
  ]

  constructor() { }

  getAlunos(){
    return this.alunos;
  }

  getAluno(id: number){
    for(let i=0; i<this.alunos.length; i++){
      let aluno = this.alunos[i];
      //if(aluno.id == id) return aluno;
      if(aluno.id == id){
        this.aluno = aluno;
        return aluno;
      }
    }
    return null;
  }

  getAlunoAtributo(){
    return this.aluno;
  }
}
