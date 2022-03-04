import { Component, 
         OnInit      } from '@angular/core';
import { FormBuilder, 
         FormControl, 
         FormGroup,   
         Validators  } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  /*Este ejemplo es con formControl y en el archivo html se hace uso de la propiedad formControlName 
   y asignandole coo valor alhguna propiedad declarada dentro del objeto*/ 
  
   /*miFomularioReactivo  : FormGroup = new FormGroup({
    nombreProductoReactive: new FormControl('Rxt'),
    precioReactivo        : new FormControl(20),
    existenciasReactivas  : new FormControl(3)
  })*/
  
  // Este ejemplo es usando FormBuidelr

  miFomularioReactivo: FormGroup= this.fb.group({

    nombreProductoReactive: [,[ Validators.required, 
                                     Validators.minLength(3)]],

    precioReactivo        : [, [Validators.required,
                                  Validators.min(0)]],

    existenciasReactivas  : [, [Validators.required,
                                 Validators.min(0)]]
  })

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  /*Se le pasa como argumento al metodo un elemento de tipo sring en este caso es un 
   campo que en el htmml se le pasa el campo que se desea evaluar*/
  campoNoValido(campo:string){
    return this.miFomularioReactivo.controls[campo].errors && 
           this.miFomularioReactivo.controls[campo].touched
  }

}
