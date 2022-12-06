export class Redes {
        id?:number;
        nombre: string;
        icono: string;
        url: string;
      
    
        constructor(nombre: string,icono:string,url:string){
            this.nombre = nombre;
            this.icono = icono;
            this.url = url;
        }
    
}
