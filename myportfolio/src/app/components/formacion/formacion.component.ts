import { Component, OnInit } from '@angular/core';
import { Confirm } from 'src/app/model/Confirm';
import { Educacion } from 'src/app/model/educacion';
import { SeducacionService } from 'src/app/service/seducacion.service';
import { TokenService } from 'src/app/service/token.service';
import { trigger, style, animate, transition } from '@angular/animations';
const efectStart = transition('void => *', [
  style({ opacity: 0, transform: 'translateY(100%)' }),
  animate('1.5s ease', style({ opacity: 1, transform: 'translateY(0)' })),
]);

const animation = trigger('animation', [efectStart]);
@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css'],
  animations:[animation]
})
export class FormacionComponent implements OnInit {
edu : Educacion[] = [];
  constructor(public sEducacion: SeducacionService, private tokenService : TokenService) { }
  isLogged = false;
  ngOnInit(): void {
    this.cargarEducation()
   if(this.tokenService.getToken()){
    this.isLogged = true;
  }else{
    this.isLogged = false;
  }
}

  cargarEducation():void{
    this.sEducacion.lista().subscribe(data =>{this.edu = data})
    }
    @Confirm("¿Estas seguro que quieres eliminar esta Formacion?")
    delete(id?:number){
      if(id !=undefined){
        this.sEducacion.delete(id).subscribe(data =>{
          this.cargarEducation();
        },err=>{alert("No se pudo eliminar la formacion academica");})
      }
    }
}
