// Este ejemplo es solo para valiadaciones sencillas que no se encuetren denro de unservicio sino se tendria que hacer mas codigo para su crrecto funcionamiento 
import { FormControl } from "@angular/forms";

// Se evalua que el nombre tenga letras de la a la z al igual que el segundo campo que corresponde al apellido
export const nombrePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  
  //evalua si concide con una palabra
export const noPuedeSerStrider= (control: FormControl) => {
      
      const valor: string = control.value?.trim().toLowerCase();
      if (valor === 'strider'){
        return {
          noStrider:true
        }
      }
      return null;
}