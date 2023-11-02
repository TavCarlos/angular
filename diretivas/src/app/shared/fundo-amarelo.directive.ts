import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[FundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(
    private elementRef: ElementRef,
    private rendered: Renderer2
  ) {
    this.rendered.setStyle(elementRef.nativeElement, 'background-color', 'yellow')
   }

//utilizando o renderer2 é a forma mais seguro pelo angular de realizar a alteração no elemento Dom.
}
