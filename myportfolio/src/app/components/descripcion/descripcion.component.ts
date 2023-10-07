import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.css']
})
export class DescripcionComponent implements OnInit {
persona: Persona = new Persona("","","","");
  constructor(public personaService: PersonaService, private tokenService: TokenService ) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarInfo()
   if(this.tokenService.getToken()){
    this.isLogged = true;
   }
   else{
    this.isLogged = false;
   }
  }
cargarInfo():void{
  this.personaService.detail(1).subscribe(data => {this.persona = data})
}

}
