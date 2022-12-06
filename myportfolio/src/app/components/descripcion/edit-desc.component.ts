import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-desc',
  templateUrl: './edit-desc.component.html',
  styleUrls: ['./edit-desc.component.css']
})
export class EditDescComponent implements OnInit {
  info: Persona = null;
  constructor(private sPersona: PersonaService, private actRouter:ActivatedRoute,private router: Router) { }
  ngOnInit(): void {
    const id= this.actRouter.snapshot.params["id"];
    this.sPersona.detail(id).subscribe(
      data =>{
        this.info = data;
      },err =>{
        alert("Error al actualizar")
        this.router.navigate([""]);
      }
    )
  }
onUpdate(): void{
  const id= this.actRouter.snapshot.params["id"];
  this.sPersona.update(id,this.info).subscribe(data => {
    this.router.navigate([""]);

  },err=>{
    alert("Error al actualizar")
    this.router.navigate([""]);
  })
}
}
