import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[HighlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver(){
    this.backgroundColor = 'green';
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.backgroundColor = 'white'
  }

  @HostBinding('style.backgroundColor') backgroundColor!: String;

  constructor() { }

  // O HostListener vai fica escutando o hospedeiro da diretiva -> (tag p em diretiva-customizada)
  //E o hostBinding permite que faça a associação de uma variável com uma propriedade
  //do elemento html hospedeiro da diretiva
}
