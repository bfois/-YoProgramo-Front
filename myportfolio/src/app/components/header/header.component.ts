import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Redes } from 'src/app/model/redes';
import { RedesService } from 'src/app/service/redes.service';
import { TokenService } from 'src/app/service/token.service';
import { trigger, style, animate, transition } from '@angular/animations';

const efectStart = transition('void => *', [
  style({ opacity: 0 }),
  animate('1.5s ease', style({ opacity: 1 })),
])
const animation = trigger('animation',[efectStart])
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations:[animation]
})
export class HeaderComponent implements OnInit {
  redes : Redes[] = [];
  constructor(private sRedes:RedesService,private router:Router, private tokenService:TokenService) { }
  isLogged = false;
  ngOnInit(): void {
    this.cargarRedes()
   if(this.tokenService.getToken()){
    this.isLogged = true;
   }
   else{
    this.isLogged = false;
   }
  }
  cargarRedes():void{
this.sRedes.lista().subscribe(data =>{this.redes = data})
}
  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }

login(){
  this.router.navigate(['/login'])
}

}
