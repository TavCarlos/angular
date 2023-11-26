import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss']
})
export class DataFormComponent {

  formulario!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient){}

  ngOnInit(){

   /* this.formulario = new FormGroup({
      nome: new FormControl(null),
      email: new FormControl(null)
    }); */

    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      endereco: this.formBuilder.group({
        cep: [null, Validators.required],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      })
    })
  }

  onSubmit(){
    console.log(this.formulario.value)

    this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
        .pipe(map((dados: any) => dados))
        .subscribe((dados) => {
          console.log('DADOS: ', dados);
          //resertar formulário
          this.resetarForm();
        })
  }

  resetarForm(){
    this.formulario.reset();
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
//Para utilizar o httpClient é necessário importar o HttpclientModule no módulo.

//----------------------------------------------------------------------------------//

//Validators, são os próximos atributos que podem ser inseridos dentro do formControl