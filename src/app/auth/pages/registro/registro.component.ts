import { Component, 
         OnInit             } from '@angular/core';

import { FormBuilder, 
         FormGroup, 
         Validators         } from '@angular/forms';
        
import { ValidatorService   } from '@shared/validators/validator.service';
//Se usa en caso de solo usar el archivo de validaciones
// import { emailPattern, 
//          nombrePattern,  
//          noPuedeSerStrider  } from '@shared/validators/validaciones';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})

export class RegistroComponent implements OnInit {

  // si solo se usa el validaciones se aueda asi Validators.pattern( nombrePattern ) los campos de las propiedades
  // si se agrega el sevicio se añade el this.validatorService a la propieda del objeto
  miFormulario:FormGroup= this.fb.group({
    nombre:['',[ Validators.required, 
                  Validators.pattern( this.validatorService.nombrePattern )
              ]
            ],
    email:['',[ Validators.required,
                  Validators.pattern( this.validatorService.emailPattern )
              ]
          ],
          // El straider es la palabra que no quiero que coicida el campo 
    nombreUsuario:['',[ Validators.required,
                          this.validatorService.noPuedeSerStrider]
                  ]
  })

  constructor(private fb:FormBuilder, private validatorService:ValidatorService) { }

  ngOnInit(): void {
    // VAlores por defecto
    this.miFormulario.reset({
      nombre:'Quetzalli Hernandez',
      email:'quetzitachi@gmail.com',
      nombreUsuario:'Quetzitachi'
    })
    // console.log(this.miFormulario.value);
    
  }
  campoNoValido( campo:string ){

    return this.miFormulario.get(campo)?.invalid
    && this.miFormulario.get(campo)?.touched
  }
  submitForm(){
    if( this. miFormulario.invalid){
      this.miFormulario.markAllAsTouched()
      return
    }
  }

}
