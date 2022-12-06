import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HyS } from 'src/app/model/hy-s';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-new-hys',
  templateUrl: './new-hys.component.html',
  styleUrls: ['./new-hys.component.css']
})
export class NewHysComponent implements OnInit {
  nombreHyS: string = "";
  porcentajeHyS:number;
  constructor(private sHys : SkillService,private router : Router) { }

  ngOnInit(): void {
  }
  onCreate():void{
    const hys = new HyS(this.nombreHyS,this.porcentajeHyS)
    this.sHys.save(hys).subscribe(data => {alert("Skill añadida")
    this.router.navigate([""]);
  },err =>{
    alert("no fue posible crear la Skill")
    this.router.navigate([""]);
  });
  }

}
