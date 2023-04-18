import { Component } from '@angular/core';

@Component({
  selector: 'app-arrays-ts',
  templateUrl: './arrays-ts.component.html',
  styleUrls: ['./arrays-ts.component.css']
})
export class ArraysTsComponent {
  palabras: string[] =[
    "queso",
    "coche",
    "cerillla",
    "nota",
    "movil"
  ]

  nuevaPalabra: string=""
  indice: number=0
  compruebalugar: string=""
  showArray: string=""

  constructor(){}

  ngOnInit():void{}

  muestraArray(){
    this.showArray=this.palabras.toString()
  }

  anadepalabra(){
    this.palabras.push(this.nuevaPalabra)
    this.muestraArray()
  }

  eliminapalabra(){
    this.palabras.pop()
    this.muestraArray()
  }

  modArray(){
    this.palabras[this.indice]=this.nuevaPalabra
    this.muestraArray()
  }

  ordenarArray(){
    this.palabras.sort()
    this.muestraArray()
  }

}
