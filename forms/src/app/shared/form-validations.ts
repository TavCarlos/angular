import { AbstractControl, FormArray, FormControl } from "@angular/forms";

export class FormValidations {

    static requiredMinCheckbox(min = 1) { //validar o checkbox
        const validator = (formArray: AbstractControl) => {
    
     /*   if(formArray instanceof FormArray){
            const controls = formArray.controls;
            let totalChecked = 0;
            for(let i=0 ; i < controls.length; i++){
              if(controls[i].value){
                totalChecked++;
              }
            }
        } 
       }  */
    
      if(formArray instanceof FormArray){
            const totalChecked = formArray.controls
              .map(v => v.value)
              .reduce((total, current) => current? total + current : total, 0);
            return totalChecked >= min ? null : { required: true }
          }
          return null;
        } 
        return validator;
       }

    static cepValidator(control: FormControl){

        const cep = control.value;

        if(cep && cep !== ''){
            const validacep = /^[0-9]{8}$/;
            return validacep.test(cep) ? null : { cepInvalido: true };
        }
            return null;
   }
}