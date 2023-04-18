import { Component,Input } from '@angular/core';
import { medico } from '../_modelo/medico';

@Component({
  selector: 'app-hijo-recibe',
  templateUrl: './hijo-recibe.component.html',
  styleUrls: ['./hijo-recibe.component.css']
})
export class HijoRecibeComponent {
  @Input() lHijo:medico[]

  constructor(){
    this.lHijo=[]
  }
}
