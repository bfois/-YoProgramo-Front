import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { SeducacionService } from 'src/app/service/seducacion.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  nombreEdu: string = "";
  descripcionEdu:string = "";
  initDate:number;
  finishDate:number;
  constructor(private sEducacion : SeducacionService,private router : Router) { }

  ngOnInit(): void {
  }
  onCreate():void{
    const edu = new Educacion(this.nombreEdu,this.descripcionEdu, this.initDate, this.finishDate)
    this.sEducacion.save(edu).subscribe(data => {alert("Formacion academica añadida")
    this.router.navigate([""]);
  },err =>{
    alert("no fue posible crear la Educacion")
    this.router.navigate([""]);
  });
  }
}
