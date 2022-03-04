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
    /* Con el metodo reset se establecen valores prederminados y se delcaran dentro del ngOnInit para que se inicialice 
    con esos valores al cargar el componente*/
    /*Otro metodo es usar setvalue pero tiene el inconveniente que si le falta un campo la app truena y con el metodo reset no 
    por eso para este ejemplo se usa reset*/ 
    this.miFomularioReactivo.reset({
      nombreProductoReactive:'Audifonos',
      precioReactivo:300,
    })
  }
  /*Se le pasa como argumento al metodo un elemento de tipo sring en este caso es un 
   campo que en el htmml se le pasa el campo que se desea evaluar*/
  campoNoValido(campo:string){
    return this.miFomularioReactivo.controls[campo].errors && 
           this.miFomularioReactivo.controls[campo].touched
  }
  guardarRegistro(){
    if(this.miFomularioReactivo.invalid){
      /* con el metodo markAllTouched se evalua si los campos no han sido tocados mandara el 
      mensaje de error en cada uno de los elementos del formulario*/
      this.miFomularioReactivo.markAllAsTouched();
      return
    }
    console.log('algo', this.miFomularioReactivo.value);
    // Se restablecen los valores del formulario
    this.miFomularioReactivo.reset()
    
  }
}
