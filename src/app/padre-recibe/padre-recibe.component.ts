import { Component } from '@angular/core';
import { paciente } from '../_modelo/paciente';

@Component({
  selector: 'app-padre-recibe',
  templateUrl: './padre-recibe.component.html',
  styleUrls: ['./padre-recibe.component.css']
})
export class PadreRecibeComponent {
  lPadre:paciente[]=[]

  recibeDatos(pacientes:paciente[]){
    this.lPadre=pacientes
  }
}
