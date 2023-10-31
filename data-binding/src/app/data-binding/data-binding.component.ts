import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {

  url: String = "https://www.linkedin.com/in/tavcarlos/";
  cursoAngular: boolean = true;
  urlImage: String = "http://lorempixel.com.br/200/200";
  valorAtual: any = "";
  valorSalvo: any = "";
  isMouseOver: boolean = false;

  nomeDoCurso: String = 'angular';

  valorInicial: number = 15;

  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    alert("O botão foi clicado!");
  }

  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement> evento.target).value;
  }

  salvarValor(valor: any){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento: any){
    console.log(evento.novoValor);
  }


}
