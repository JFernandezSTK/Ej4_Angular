export class paciente{
    id:number=0
    nombre: string=""
    apellidos: string=""
    dni: number=0
    telefono: number=0
    direccion: string=""
    correo: string=""

    constructor(id:number,nombre:string,apellidos:string,dni:number,telefono:number,direccion:string,correo:string){
        this.id=id
        this.nombre=nombre
        this.apellidos=apellidos
        this.dni=dni
        this.telefono=telefono
        this.direccion=direccion
        this.correo=correo
    }
}