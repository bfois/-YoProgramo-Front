import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { SeducacionService } from 'src/app/service/seducacion.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  eduLab : Educacion = null;
  constructor(private sEducacion: SeducacionService,private actRouter:ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    const id= this.actRouter.snapshot.params["id"];
    this.sEducacion.detail(id).subscribe(
      data =>{
        this.eduLab = data;
      },err =>{
        alert("Error al actualizar")
        this.router.navigate([""]);
      }
    )
  }
  onUpdate(): void{
    const id= this.actRouter.snapshot.params["id"];
    this.sEducacion.update(id,this.eduLab).subscribe(data => {
      this.router.navigate([""]);
  
    },err=>{
      alert("Error al actualizar")
      this.router.navigate([""]);
    })
  }

}
