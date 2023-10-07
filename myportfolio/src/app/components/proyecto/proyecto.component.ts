import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
list: Proyectos[]
  constructor(private proyecService:ProyectosService) { }

  ngOnInit(): void {
    this.proyecService.lista().subscribe(
      (data: Proyectos[]) => {
        this.list = data; // Asignar los datos recibidos a la propiedad list
      },
      (error) => {
        console.error('Error al obtener la lista de proyectos:', error);
      }
    );
  }

}
