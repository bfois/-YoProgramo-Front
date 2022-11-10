import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';

import { SexperienciaService } from 'src/app/service/sexperiencia.service';



@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  expe : Experiencia[] = [];
  constructor(public sExperiencia: SexperienciaService) { }

  ngOnInit(): void {
    this.sExperiencia.lista().subscribe(data =>{this.expe = data;})
  }

}
