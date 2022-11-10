import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { SeducacionService } from 'src/app/service/seducacion.service';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})
export class FormacionComponent implements OnInit {
edu : Educacion[] = [];
  constructor(public sEducacion: SeducacionService) { }

  ngOnInit(): void {
    this.sEducacion.lista().subscribe(data =>{this.edu = data;})
  }

}
