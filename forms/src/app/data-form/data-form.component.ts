import { DropdownService } from './../shared/services/dropdown.service';
import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { EstadoBr } from '../shared/models/estado-br';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';
import { FormValidations } from '../shared/form-validations';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss']
})
export class DataFormComponent {

  formulario!: FormGroup;
  estados!: Observable<EstadoBr[]>;
  tecnologias!: any;
  newsLetterOp!: any
  frameWorks =  ['Angular', 'React', 'Vue']

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private dropdownService: DropdownService,
    private consultaCepService: ConsultaCepService){}

  ngOnInit(){

    this.estados = this.dropdownService.getEstadosBr();
    this.tecnologias = this.dropdownService.getTecnologias();
    this.newsLetterOp = this.dropdownService.getNewsLetter();

    //o subscribe pode ficar ativo na memória após destruido, para evitar
    //memory leaks, utiliza-se o pipe | async dentro do template que utilizará
    //a informação de 'estados'

   /* this.dropdownService.getEstadosBr()
    .subscribe((res: EstadoBr[])=>{     
      this.estados = res;
      console.log(res);
      });*/

    /*this.formulario = new FormGroup({
      nome: new FormControl(null),
      email: new FormControl(null)
    }); */

    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      endereco: this.formBuilder.group({
        cep: [null, [Validators.required, FormValidations.cepValidator]],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      }),
      tecnologia: [null],
      newsLetter: ['s'],
      termos: [null, Validators.requiredTrue],
      frameWorks: this.buildFrameworks()
    })
  }

  onSubmit(){
    console.log(this.formulario.value)

    let valueSubmit = Object.assign({}, this.formulario.value); //faço uma cópia dos valores do form

    //redux
    valueSubmit = Object.assign(valueSubmit, {//mandar ao servidor valores de frameWorks
      frameworks: valueSubmit.frameWorks      //sem isso ele mandaria true or false
        .map((value: any, index: any) => value ? this.frameWorks[index] : null)
        .filter((value: any) => value != null) 
    })

    if(this.formulario.valid){
      
      this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
          .pipe(map((dados: any) => dados))
          .subscribe((dados) => {
            console.log('DADOS: ', dados);
            //resertar formulário
            this.resetarForm();
          })

    } else {
      console.log("Formulário Inválido")
      this.verificarValidacoesForm(this.formulario);
    }

  }

  verificarValidacoesForm(formGroup: FormGroup){
    Object.keys(formGroup.controls).forEach(campo => { //irá verificar os controls
      const controle = this.formulario.get(campo);
      controle?.markAsDirty;
      if(controle instanceof FormGroup){ //irá verificar o campo endereço(formGroup)
        this.verificarValidacoesForm(controle);
      }
    })
  }

  resetarForm(){
    this.formulario.reset();
  }

  consultaCEP(){

    let cep = this.formulario.get('endereco.cep')?.value;

    if(cep !== '' && cep != null){
        this.consultaCepService.consultaCEP(cep)
        ?.subscribe(dados => this.popularDadosForm(dados))
    }

  }

  resetaDadosForm(){
    this.formulario.patchValue({
      endereco: {
        rua: null,
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }

  popularDadosForm(dados: any){
    this.formulario.patchValue({
      endereco: {
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    })
  }

  buildFrameworks(){
    const values = this.frameWorks.map(value => new FormControl(false))
    return this.formBuilder.array(values, FormValidations.requiredMinCheckbox(1));
    /*
      this.formBuilder.array([
        new FormControl(false),
        new FormControl(false),
        new FormControl(false),
        new FormControl(false)
      ])
     */
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
