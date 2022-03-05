import { Component, 
         OnInit     } from '@angular/core';
import { FormArray, FormBuilder, 
         FormControl, 
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
                Validators.minLength(3)]
    ],
    favoritos: this.fb.array( [
        ['Masha', Validators.required],
        ['metalGear', Validators.required]
      ], Validators.required
    )
  })
  //Se delcara una nueva propiedad incependiente al formulario para recibir la informacion que se desea agregar
  agregarFavs: FormControl= this.fb.control('', Validators.required)

  get favoritosArr(){
    return this.formularioDinamicoReactivo.get('favoritos') as FormArray;
  }
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    console.log(this.favoritosArr.controls[0].value);
    
  }

  agregarRegistro(){
    if(this.agregarFavs.invalid){
      return
    }
    //este es lo mismo si se hace con el formBuilder /*this.favoritosArr.push(new FormControl)*/
    /*this.favoritosArr.push(
      new FormControl(
        this.agregarFavs.value,
        Validators.required
      )
    )*/
    /*Al metodo push se agrega el control por medio de formBuilder y se le pasas como argumento el vaor de lo que proviene de 
     la propiedad agergarFavs*/
    this.favoritosArr.push(
      this.fb.control(
        this.agregarFavs.value,
        Validators.required
      )
    )

    this.agregarFavs.reset()
  }

  campoNoValido(campo:string){
    return this.formularioDinamicoReactivo.controls[campo].errors && 
           this.formularioDinamicoReactivo.controls[campo].touched
  }

  eliminarRegistro(i: number){
    this.favoritosArr.removeAt(i)
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
    this.agregarFavs.reset()
  }
}
