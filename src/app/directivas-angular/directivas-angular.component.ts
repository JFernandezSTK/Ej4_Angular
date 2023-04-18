import { Component } from '@angular/core';

const VEHICULOS =[
  {id: 1, name:'Coche'},
  {id: 2, name:'Barco'},
  {id: 3, name:'Moto'},
  {id: 4, name:'Tren'},
]

@Component({
  selector: 'app-directivas-angular',
  templateUrl: './directivas-angular.component.html',
  styleUrls: ['./directivas-angular.component.css']
})
export class DirectivasAngularComponent {
  vehiculos = VEHICULOS
  boolIf: boolean = true
  num: number=0
  comprueba: number=0

  cambiaIf(){
    this.boolIf = false
  }

  cambiaSwitch(){
    this.comprueba = this.num
  }
}
