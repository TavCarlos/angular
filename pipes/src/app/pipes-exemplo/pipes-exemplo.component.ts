import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-exemplo',
  templateUrl: './pipes-exemplo.component.html',
  styleUrls: ['./pipes-exemplo.component.scss']
})
export class PipesExemploComponent {

  livro: any = {
    titulo: 'aprendendo o framework angular',
    rating: 4.54321,
    numeroPaginas: 312,
    preco: 44.99,
    dataLancamento: new Date(2016, 10, 23)
  }
}
