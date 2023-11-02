import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas-ngfor',
  templateUrl: './diretivas-ngfor.component.html',
  styleUrls: ['./diretivas-ngfor.component.scss']
})
export class DiretivasNgforComponent {

  cursos: String[] = ['Angular', 'Java', 'Kotlin', 'Rust'];
}
