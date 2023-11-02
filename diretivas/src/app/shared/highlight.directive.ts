import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[Highlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseOver(){
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') backgroundColor!: String;

  @Input() defaultColor: String = "white";
  @Input() highlightColor: String = "green";

  constructor() { }

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
  }

  //O input() serve para que o atributo consiga ser visto pelo 'diretiva-customizada' para ser realizado
  //o property binding.

  //Foi necesário inicializar o backgroundColor no ngOnInit() pois quando dava refrash na página
  //o backgroundcolor vinha como branco, ao invés de cinza 
  //(cor modificada no propertyBind em diretiva-customizada)
}
