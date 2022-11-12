import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';


@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.css']
})
export class DescripcionComponent implements OnInit {
persona: Persona = new Persona("","","","");
  constructor(public personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.detail(1).subscribe(data => {this.persona = data})
  }

}
