import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HyS } from 'src/app/model/hy-s';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-edit-hys',
  templateUrl: './edit-hys.component.html',
  styleUrls: ['./edit-hys.component.css']
})
export class EditHysComponent implements OnInit {
  hys: HyS;
  constructor(private sHys: SkillService, private actRouter:ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    const id= this.actRouter.snapshot.params["id"];
    this.sHys.detail(id).subscribe(
      data =>{
        this.hys = data;
      },err =>{
        alert("Error al actualizar")
        this.router.navigate([""]);
      }
    )
  }
onUpdate(): void{
  const id= this.actRouter.snapshot.params["id"];
  this.sHys.update(id,this.hys).subscribe(data => {
    this.router.navigate([""]);

  },err=>{
    alert("Error al actualizar")
    this.router.navigate([""]);
  })
}
}
