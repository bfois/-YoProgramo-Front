import { Component, OnInit } from '@angular/core';
import { Confirm } from 'src/app/model/Confirm';
import { Experiencia } from 'src/app/model/experiencia';
import { SexperienciaService } from 'src/app/service/sexperiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  expe : Experiencia[] = [];
  constructor(public sExperiencia: SexperienciaService, private tokenService : TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia()
   if(this.tokenService.getToken()){
    this.isLogged = true;
   }
   else{
    this.isLogged = false;
   }
  }
cargarExperiencia():void{
this.sExperiencia.lista().subscribe(data =>{this.expe = data})
}
@Confirm("¿Estas seguro que quieres eliminar esta Experiencia?")
delete(id?:number){
  if(id !=undefined){
    this.sExperiencia.delete(id).subscribe(data =>{
      this.cargarExperiencia();
    },err=>{alert("No se pudo eliminar la experiencia");})
  }
}
}
