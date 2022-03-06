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
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  miFormulario:FormGroup= this.fb.group({
    nombre:['',[ Validators.required, 
                 Validators.pattern( this.nombrePattern )
              ]
            ],
    email:['',[ Validators.required,
                Validators.pattern( this.emailPattern )
              ]
          ]
  })

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    // VAlores por defecto
    this.miFormulario.reset({
      nombre:'Quetzalli Hernandez',
      email:'quetzitachi@gmail.com'
    })
    console.log(this.miFormulario.value);
    
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
