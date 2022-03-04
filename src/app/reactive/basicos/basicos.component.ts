import { Component, 
         OnInit      } from '@angular/core';
import { FormControl, 
         FormGroup   } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  miFomularioReactivo : FormGroup = new FormGroup({
    nombreProductoReactive:new FormControl('Rxt')
  })
  constructor() { }

  ngOnInit(): void {
  }

}
