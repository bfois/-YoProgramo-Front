import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-edit-proyec',
  templateUrl: './edit-proyec.component.html',
  styleUrls: ['./edit-proyec.component.css']
})
export class EditProyecComponent implements OnInit {
  proyec: Proyectos = null;
  constructor(private sProyectos: ProyectosService, private actRouter:ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    const id= this.actRouter.snapshot.params["id"];
    this.sProyectos.detail(id).subscribe(
      data =>{
        this.proyec = data;
      },err =>{
        alert("Error al actualizar")
        this.router.navigate([""]);
      }
    )
  }
onUpdate(): void{
  const id= this.actRouter.snapshot.params["id"];
  this.sProyectos.update(id,this.proyec).subscribe(data => {
    this.router.navigate([""]);

  },err=>{
    alert("Error al actualizar")
    this.router.navigate([""]);
  })
}
}
