import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Redes } from 'src/app/model/redes';
import { RedesService } from 'src/app/service/redes.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone:true,
  imports:[CommonModule]
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
