import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent {
  
  constructor(){}

  usuario: any = {
    nome: 'antonio',
    email: 'antonio@email.com'
  }

  onSubmit(form: any){
    console.log(form.value);

    console.log(this.usuario)
  }

}
