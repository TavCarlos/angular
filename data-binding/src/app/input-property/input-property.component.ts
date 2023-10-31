import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.scss']
})
export class InputPropertyComponent {

  @Input()
  nome:String = '';
}
