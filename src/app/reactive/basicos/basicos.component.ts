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
    
    nombreProductoReactive: ['Rxt',[ Validators.required, 
                                     Validators.minLength(3)]],

    precioReactivo        : [20, [Validators.required,
                                  Validators.min(0)]],

    existenciasReactivas  : [3, [Validators.required,
                                 Validators.min(0)]]
  })

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
