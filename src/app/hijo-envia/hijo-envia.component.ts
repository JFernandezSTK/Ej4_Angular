import { Component } from '@angular/core';
import { paciente } from '../_modelo/paciente';
import { Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo-envia',
  templateUrl: './hijo-envia.component.html',
  styleUrls: ['./hijo-envia.component.css']

})
export class HijoEnviaComponent {
  @Output() Ingreso:EventEmitter<paciente[]> =new EventEmitter<paciente[]>()
  lista:paciente[]
  id:number
  nombre:string
  apellidos:string
  dni:number
  telefono:number
  direccion:string
  correo:string

  constructor(){
    this.lista=[]
    this.id=0
    this.nombre=""
    this.apellidos=""
    this.dni=0
    this.telefono=0
    this.direccion=""
    this.correo=""

  }



  enviaDatos(){
    this.lista.push(new paciente(this.id,this.nombre,this.apellidos,this.dni,this.telefono,this.direccion,this.correo))
    this.id++
    this.Ingreso.emit(this.lista)
  }
}
