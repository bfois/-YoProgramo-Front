import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SexperienciaService } from 'src/app/service/sexperiencia.service';

@Component({
  selector: 'app-new-exp',
  templateUrl: './new-exp.component.html',
  styleUrls: ['./new-exp.component.css']
})
export class NewExpComponent implements OnInit {
  nombreE: string = "";
  descripcionE:string = "";
  constructor(private sExperiencia:SexperienciaService, private router:Router) { }

  ngOnInit(): void {
  }
onCreate():void{
  const expe = new Experiencia(this.nombreE,this.descripcionE)
  this.sExperiencia.save(expe).subscribe(data => {alert("experiencia añadida")
  this.router.navigate([""]);
},err =>{
  alert("no fue posible crear la experiencia")
  this.router.navigate([""]);
});
}
}
