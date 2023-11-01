import { Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.scss']
})
export class OutputPropertyComponent {

@Input()
valor: number = 0;

@Output()
mudouValor = new EventEmitter;

@ViewChild('campoInput') campoValorInput = {} as ElementRef; //utilizando o valor de um elemento html
//através de uma variável local que faz referência a um elemento html. 
//nessa caso o input em outputcomponent.

decrementa(){
  this.campoValorInput.nativeElement.value--;
  //this.valor--;
  this.mudouValor.emit({novoValor: this.valor});
}

incrementa(){
  this.campoValorInput.nativeElement.value++;
  //this.valor++;
  this.mudouValor.emit({novoValor: this.valor})
}

}
