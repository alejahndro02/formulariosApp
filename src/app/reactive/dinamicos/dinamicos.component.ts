import { Component, 
         OnInit     } from '@angular/core';
import { FormArray, FormBuilder, 
         FormGroup, 
         Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  formularioDinamicoReactivo: FormGroup = this.fb.group({
    nombre:[, [Validators.required,
                Validators.minLength(3)]],
    favoritos: this.fb.array( [
      ['Masha', Validators.required],
      ['metalGear', Validators.required]
    ], Validators.required)
  })
get favoritosArr(){
  return this.formularioDinamicoReactivo.get('favoritos') as FormArray;
}
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    console.log(this.favoritosArr);
    
  }
  campoNoValido(campo:string){
    return this.formularioDinamicoReactivo.controls[campo].errors && 
           this.formularioDinamicoReactivo.controls[campo].touched
  }
  guardar(){
    if(this.formularioDinamicoReactivo.invalid){
      /* con el metodo markAllTouched se evalua si los campos no han sido tocados mandara el 
      mensaje de error en cada uno de los elementos del formulario*/
      this.formularioDinamicoReactivo.markAllAsTouched();
      return
    }
    console.log('algo', this.formularioDinamicoReactivo.value);
    // Se restablecen los valores del formulario
    this.formularioDinamicoReactivo.reset()
  }
}
