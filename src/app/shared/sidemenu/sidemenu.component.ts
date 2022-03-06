import { Component, OnInit } from '@angular/core';
 
interface Menuitem{
  texto:string,
  ruta:string
}
@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [
    `li{
      cursor:pointer;
    }`
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

  authMenu:Menuitem[]=[
    {
      texto:'Login',
      ruta:'./auth/login'
    },
    {
      texto:'Registro',
      ruta:'./auth/registro'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
