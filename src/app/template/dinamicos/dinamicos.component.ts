import { Component, OnInit } from '@angular/core';

// Se crea la interface para la data que se utilizara 
interface Persona{
  nombre: string,
  favoritos: Favoritos[]
}

interface Favoritos{
  id:number
  nombreJuego:string
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {
  // Se creo un objeto con informacion 
persona: Persona = {
  nombre:'Quetzalli',
  favoritos: [
    {id:1, nombreJuego:'Masha'},
    {id:2, nombreJuego:'Marinerito'}

  ]
}

  constructor() { }

  ngOnInit(): void {
    
  }
  guardarNombre(){
    console.log('posteado');
  }
}
