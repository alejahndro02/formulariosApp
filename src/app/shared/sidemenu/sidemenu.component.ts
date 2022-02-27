import { Component, OnInit } from '@angular/core';
 
interface Menuitem{
  texto:string,
  ruta:string
}
@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [
  ]
})
export class SidemenuComponent implements OnInit {
   
  templateMenu: Menuitem[]=[
    {
      texto:'Básicos',
      ruta:'./template/basicos'
    },
    {
      texto:'Dinámicos',
      ruta:'./template/dinamicos'
    },
    {
      texto:'Switches',
      ruta:'./template/switches'
    }
  ]
  reactiveMenu: Menuitem[]=[
    {
      texto:'Básicos',
      ruta:'./reactive/basicos'
    },
    {
      texto:'Dinámicos',
      ruta:'./reactive/dinamicos'
    },
    {
      texto:'Switches',
      ruta:'./reactive/switches'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
