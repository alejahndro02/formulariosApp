import { Component, 
         OnInit       } from '@angular/core';
import { FormBuilder, 
         FormGroup, 
         Validators   } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {
  // exprecion temporal se evalua que el nombre tenga letras de la a la z al igual que el segundo campo que corresponde al apellido
  nombrePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';

  miFormulario:FormGroup= this.fb.group({
    nombre:['',[ Validators.required, 
                 Validators.pattern( this.nombrePattern )
                ]
            ]
    // nombre:['',Validators.required ]

  })

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
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
    console.log(this.miFormulario.value);
    
  }
}
