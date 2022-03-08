import { Injectable       } from '@angular/core';
import { AbstractControl, 
         FormControl, 
         ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {
  
  nombrePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  
  constructor() { }
  
  noPuedeSerStrider(control: FormControl): ValidationErrors | null{
      
    const valor: string = control.value?.trim().toLowerCase();
    if (valor === 'strider'){
      return {
        noStrider:true
      }
    }
    return null;
  }
  camposIguales( pass:string, conf:string ){

    return (formGroup:AbstractControl):ValidationErrors | null => {
      
      const pwd= formGroup.get(pass)?.value
      const cnf= formGroup.get(conf)?.value  
      console.log(pwd, cnf);
      
      if( pwd !== cnf){
        // se establece el error donde no coinciden los campos 
        formGroup.get('confirmar')?.setErrors({
          noiguales:true
        })
        //si se retorna un objeto es que hubo un error
        // return {
        //   noIguales:true
        // }
      }
      
      formGroup.get('confirmar')?.setErrors(null)

      // Si se retorna null es que no hubo ningun error 
      return null
    }
  }
}
