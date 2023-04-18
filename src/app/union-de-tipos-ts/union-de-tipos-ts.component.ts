import { Component } from '@angular/core';

@Component({
  selector: 'app-union-de-tipos-ts',
  templateUrl: './union-de-tipos-ts.component.html',
  styleUrls: ['./union-de-tipos-ts.component.css']
})
export class UnionDeTiposTsComponent {

  datoNumeros: number= 1|3|5|7|9
  numero: number=0
  texto: string=""

  constructor(){}

  ngOnInit():void{}

  compruebaPrimo(){
    if(this.numero == this.datoNumeros){
      this.texto="El numero "+this.numero+" es un numero primo por ende esta registrado en la variable"
    }else if(this.numero > 10){
      this.texto="El numero "+this.numero+" es un numero mayor que 10"
    }else {
      this.texto="El numero "+this.numero+" es un numero no primo por ende no esta registrado en la variable"
    }
  }

}
