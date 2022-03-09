import { Component, 
         OnInit                } from '@angular/core';

import { FormBuilder, 
         FormGroup, 
         Validators            } from '@angular/forms';
         
import { EmailValidatorService } from '@shared/validators/email-validator.service';
import { ValidatorService      } from '@shared/validators/validator.service';

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
    /* Sintaxis propiedad:['valor',[validacionesSincronas], [validacionesAsincronas]] que no dependen 
    de peticiones http, siempre y cuando regresen una promesa u observable*/
  
    nombre        :['',[ Validators.required, 
                         Validators.pattern( this.validatorService.nombrePattern )
                      ]
                    ],
    email         :['',[ Validators.required,
                         Validators.pattern( this.validatorService.emailPattern )
                       ], 
                       [  this.emailValidator ]
                   ],
          // El straider es la palabra que no quiero que coicida el campo 
    nombreUsuario :['', [ Validators.required,
                        this.validatorService.noPuedeSerStrider]
                    ],
    contraseña    :['', [ Validators.required,
                          Validators.minLength(6)]
                    ],
    confirmar     :['', [ Validators.required]
                    ],
  },{
    // Se definen las validaciones que aplicaran al formulario miFormulario
    validators    :[ this.validatorService.camposIguales('contraseña', 'confirmar') ]
  })

  constructor( private fb:FormBuilder, 
               private validatorService:ValidatorService,
               private emailValidator: EmailValidatorService ) { }

  ngOnInit(): void {
    // VAlores por defecto
    this.miFormulario.reset({
      nombre        :'Quetzalli Hernandez',
      email         :'quetzitachi@gmail.com',
      nombreUsuario :'Quetzitachi',
      contraseña    :'123456',
      confirmar     :'123456'
    })
    // console.log(this.miFormulario.value);
    
  }
  campoNoValido( campo:string ){

    return this.miFormulario.get(campo)?.invalid
      && this.miFormulario.get(campo)?.touched
    
  }
  emailMatch(){
    return this.miFormulario.get("email")?.errors?.['emailMatch']
      && this.miFormulario.get("email")?.touched
  }
  emailRequired(){
    return this.miFormulario.get("email")?.errors?.['required']
      && this.miFormulario.get("email")?.touched
  }
  emailPattern(){
    return this.miFormulario.get("email")?.errors?.['pattern']
      && this.miFormulario.get("email")?.touched
  }
  submitForm(){
    if( this. miFormulario.invalid){
      this.miFormulario.markAllAsTouched()
      return
    }
  }

}
