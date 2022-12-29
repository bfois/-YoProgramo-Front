import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AboutMe } from 'src/app/model/about-me.model';
import { SAboutMeService } from 'src/app/service/sabout-me.service';

@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.css']
})
export class EditAboutComponent implements OnInit {
  about: AboutMe;
  constructor(private aboutMeService: SAboutMeService, private actRouter:ActivatedRoute,private router: Router) { }
  ngOnInit(): void {
    const id= this.actRouter.snapshot.params["id"];
    this.aboutMeService.detail(id).subscribe(
      data =>{
        this.about = data;
      },err =>{
        alert("Error al actualizar")
        this.router.navigate([""]);
      }
    )
  }
onUpdate(): void{
  const id= this.actRouter.snapshot.params["id"];
  this.aboutMeService.update(id,this.about).subscribe(data => {
    this.router.navigate([""]);

  },err=>{
    alert("Error al actualizar")
    this.router.navigate([""]);
  })
}
}
