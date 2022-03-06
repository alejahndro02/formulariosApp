import { Component, 
         OnInit     } from '@angular/core';
import { FormBuilder, 
         FormGroup, 
         Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})

export class SwitchesComponent implements OnInit {

  formularioSwitchDinamico: FormGroup = this.fb.group({
    genero        :[ 'M'   , Validators.required ],
    notificaciones:[  true  , Validators.required ],
    terminos      :[  false , Validators.requiredTrue ]
  })

  persona={
    genero:'F',
    notificaciones:true
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.formularioSwitchDinamico.reset({
      ...this.persona,
      terminos:false
    })
    /*Otro ejemplo de poder hacerlo es 
    this.formularioSwitchDinamico.get('terminos')?.valueChanges.subscribe(nuevoValor => {
      console.log(nuevoValor)
    }) */
// Se susbcribe a los cambios dentro del fomrmulario, se extrae el elemento de termino 
    this.formularioSwitchDinamico.valueChanges.subscribe( ({ terminos, ...restoArgumentos }) => {
      this.persona= restoArgumentos
    })

  }

  guardar(){
    const formValue={ ...this.formularioSwitchDinamico.value }
    delete formValue.terminos
    this.persona = formValue
  }

}
