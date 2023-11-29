import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'  //não precisa declarar o serviço no providers do módulo
})
export class ConsultaCepService {

  constructor(private http: HttpClient) { }

  consultaCEP(cep: string){
    cep = cep.replace(/\D/g, '');

    if(cep != ""){
      var validacep = /^[0-9]{8}$/;
      if(validacep.test(cep)){
       return this.http.get(`//viacep.com.br/ws/${cep}/json`);
      }
      return null;
    }
    return null;

  }
}
