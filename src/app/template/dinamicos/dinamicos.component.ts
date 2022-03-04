import { Component, OnInit  } from '@angular/core';


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
  
  addFav: string = ''

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
  agregarFav(){

    const nuevoFav: Favoritos = {
      id: this.persona.favoritos.length + 1,
      nombreJuego: this.addFav
    }
    this,this.persona.favoritos.push( {...nuevoFav} )
    this.addFav= '';    
  }

  eliminarRegistro(index:number){
    this.persona.favoritos.splice(index, 1)
  }

  guardarNombre(){
    console.log('posteado')
  }
}
