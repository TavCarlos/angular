import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss']
})
export class DataFormComponent {

  formulario!: FormGroup

  constructor(
    private formBuilder: FormBuilder){}

  ngOnInit(){

   /* this.formulario = new FormGroup({
      nome: new FormControl(null),
      email: new FormControl(null)
    }); */

    this.formulario = this.formBuilder.group({
      nome: [null],
      email: [null]
    })
  }

  onSubmit(){
    console.log(this.formulario.value)
  }
}

//A variável formulário irá representar o formulário, todo o código ficará dentro do componente.
//dentro do html ficará somente a estrutura do formulário, será onde será adicionado os campos
//adicionar todas as validações, fazer agrupamento de dados, etc. 

//----------------------------------------------------------------------------------------//

//Cada campo é um controle de formulário, sendo assim utiliza FormControl para cada campo
//sendo o primeiro parâmetro o dado que será inicializado. Nesse caso null.

//Utilizando o formBuilder é o mesmo que usar o formGroup/ formControl
//porém de maneira simplificada. (precisa importar o 'ReactiveFormsModule' no módulo)