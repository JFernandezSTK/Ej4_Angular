import { Component } from '@angular/core';
import { medico } from '../_modelo/medico';


@Component({
  selector: 'app-padre-envia',
  templateUrl: './padre-envia.component.html',
  styleUrls: ['./padre-envia.component.css']
})
export class PadreEnviaComponent {
  lista: medico[]
  nombre:string
  apellidos:string
  cedula:number
  foto:string

  constructor(){
    this.lista=[]
    this.nombre=""
    this.apellidos=""
    this.cedula=0
    this.foto=""
  }

  anadir(){
    this.lista.push(new medico(this.nombre,this.apellidos,this.cedula,this.foto))
  }
}
