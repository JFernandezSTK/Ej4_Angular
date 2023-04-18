import { Component } from '@angular/core';
enum Meses{
  Enero="enero",
  Febrero="febrero",
  Marzo="marzo",
  Abril="abril",
  Mayo="mayo",
  Junio="junio",
  Julio="julio",
  Agosto="agosto",
  Septiembre="septiembre",
  Octubre="octubre",
  Noviembre="noviembre",
  Diciembre="diciembre"
}

@Component({
  selector: 'app-enumeraciones-ts',
  templateUrl: './enumeraciones-ts.component.html',
  styleUrls: ['./enumeraciones-ts.component.css']
})
export class EnumeracionesTsComponent {
  mes: string=""
  texto: string=""

  constructor(){}

  ngOnInit():void{}

  compruebaEstacion(){
    if(this.mes === Meses.Enero || this.mes === Meses.Febrero || this.mes === Meses.Diciembre){
      this.texto = "El mes "+this.mes+" pertenece a la estacion del Invierno"
    }else if(this.mes === Meses.Marzo || this.mes === Meses.Abril || this.mes === Meses.Mayo){
      this.texto = "El mes "+this.mes+" pertenece a la estacion de la Primavera"
    }else if(this.mes === Meses.Junio || this.mes === Meses.Julio || this.mes === Meses.Agosto){
      this.texto = "El mes "+this.mes+" pertenece a la estacion del Verano"
    }else if(this.mes === Meses.Septiembre || this.mes === Meses.Octubre || this.mes === Meses.Noviembre){
      this.texto = "El mes "+this.mes+" pertenece a la estacion del Otoño"
    }else{
      this.texto=this.mes+" no es un mes o no esta registrado en el enum"
    }
  }
}
