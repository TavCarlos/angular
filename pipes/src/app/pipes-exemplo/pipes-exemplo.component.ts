import { Component } from '@angular/core';
import { Observable } from 'rxjs';

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

  livrosArray: String[] = ['Kotlin', 'Angular', 'Java', 'C#', 'GO'];
  filtro!: string;

  obterCursos(){

    if(this.livrosArray.length == 0 || this.filtro.length == null || this.filtro.trim() == ''){
      return this.livrosArray;
    }

    return this.livrosArray.filter((v) => {
      if(v.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0){
        return true;
      }
      return false;
    })
  }

  valorAsync = new Promise((resolve, reject) =>{
    setTimeout(() => resolve('Valor assíncrono'), 2000);
  })

  valorAsync2 = new Observable<String>(observ => {
    setTimeout(() => observ.next('Valor assíncrono 2'), 2000)
  })
  
  ngOnInit(){
  }
}
