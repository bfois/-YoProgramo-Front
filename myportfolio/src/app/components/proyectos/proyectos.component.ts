import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyec : Proyectos[] = [];
  constructor(public sProyectos: ProyectosService) { }

  ngOnInit(): void {
    this.sProyectos.lista().subscribe(data =>{this.proyec = data;})
  }
 
}
