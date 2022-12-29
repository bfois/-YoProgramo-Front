import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Experiencia } from 'src/app/model/experiencia';
import { SexperienciaService } from 'src/app/service/sexperiencia.service';

@Component({
  selector: 'app-editexp',
  templateUrl: './editexp.component.html',
  styleUrls: ['./editexp.component.css']
})
export class EditexpComponent implements OnInit {
expLab: Experiencia;
  constructor(private sExperiencia: SexperienciaService, private actRouter:ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    const id= this.actRouter.snapshot.params["id"];
    this.sExperiencia.detail(id).subscribe(
      data =>{
        this.expLab = data;
      },err =>{
        alert("Error al actualizar")
        this.router.navigate([""]);
      }
    )
  }
onUpdate(): void{
  const id= this.actRouter.snapshot.params["id"];
  this.sExperiencia.update(id,this.expLab).subscribe(data => {
    this.router.navigate([""]);

  },err=>{
    alert("Error al actualizar")
    this.router.navigate([""]);
  })
}
}
