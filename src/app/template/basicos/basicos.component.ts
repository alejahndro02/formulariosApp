import { Component, 
         OnInit, 
         ViewChild } from '@angular/core';
import { NgForm    } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})

export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  //Valores del formulario por default
  initForm = {
      precio:0,
      existencias:0
    }

  constructor() { }

  ngOnInit(): void {
  }

  nombreValido():boolean{
    return this.miFormulario?.controls['producto']?.invalid && 
           this.miFormulario?.controls['producto']?.touched
  }
  precioValido():boolean{
    return this.miFormulario?.controls['precio']?.touched && 
           this.miFormulario.controls['precio']?.value < 0

  }
  guardar(){
    console.log('guardado');
    // atara vez del metodo reset se pueden agregar valores por defecto al reiniciar el fomrulario 
    this.miFormulario.resetForm({
      precio:0,
      existencias:0
    })
  }
}