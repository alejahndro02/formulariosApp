import { HttpClient         } from '@angular/common/http';
import { Injectable         } from '@angular/core';
import { AbstractControl, 
         AsyncValidator, 
         ValidationErrors   } from '@angular/forms';
import { delay, 
         map, 
         Observable         } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// Se implementa el AsyncValidator para hacer una peticion asincrona que dependa de un servicio adicional como http
export class EmailValidatorService implements AsyncValidator {

  constructor(  private http: HttpClient  ) { }
  
  /* Este metodo se ejecuta al imlementar el AsyncValidator se puede manejar como promesa o como observable ene este caso 
  se utilizara el observble*/
  validate( control: AbstractControl ): Observable<ValidationErrors | null> {
    
    const email =  control.value
    
    /*Con el operador map se transforma el valor de la informacion que emite el observable de la peticion http */
    return this.http.get<any[]>( `http://localhost:3000/usuarios?q=${ email }` )
          .pipe(
            delay(3000),
            map( response => {
              return (  response.length === 0)
                ? null
                :{ emailMatch:true}
            })
          )
            
  }
}
