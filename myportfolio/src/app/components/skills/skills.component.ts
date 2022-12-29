import { Component, OnInit } from '@angular/core';
import { Confirm } from 'src/app/model/Confirm';
import { HyS } from 'src/app/model/hy-s';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  hys: HyS[] = []
  constructor(public sHys: SkillService, private tokenService : TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarSkill()
   if(this.tokenService.getToken()){
    this.isLogged = true;
   }
   else{
    this.isLogged = false;
   }
  }
  cargarSkill():void{
this.sHys.lista().subscribe(data =>{this.hys = data})
}
@Confirm("¿Estas seguro que quieres eliminar esta Habilidad?")
delete(id?:number){
  if(id !=undefined){
    this.sHys.delete(id).subscribe(data =>{
      this.cargarSkill();
    },err=>{alert("No se pudo eliminar la experiencia");})
  }
}

}

