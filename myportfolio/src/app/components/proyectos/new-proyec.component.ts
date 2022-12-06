import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-new-proyec',
  templateUrl: './new-proyec.component.html',
  styleUrls: ['./new-proyec.component.css']
})
export class NewProyecComponent implements OnInit {
  nombre: string = "";
  descripcion:string = "";
  img:string = "";
  constructor(private sProyec:ProyectosService, private router:Router) { }

  ngOnInit(): void {
  }
onCreate():void{
  const proyec = new Proyectos(this.nombre,this.descripcion, this.img)
  this.sProyec.save(proyec).subscribe(data => {alert("Proyecto añadido")
  this.router.navigate([""]);
},err =>{
  alert("no fue posible añadir el proyecto")
  this.router.navigate([""]);
});
}
}
