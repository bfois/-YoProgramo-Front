import { Component, OnInit } from '@angular/core';
import { AboutMe } from 'src/app/model/about-me.model';
import { SAboutMeService } from 'src/app/service/sabout-me.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
aboutMe : AboutMe = new AboutMe("","")
  constructor(public aboutMeService: SAboutMeService, private tokenService:TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarAbout()
   if(this.tokenService.getToken()){
    this.isLogged = true;
   }
   else{
    this.isLogged = false;
   }
  }
cargarAbout():void{
  this.aboutMeService.detail(1).subscribe(data => {this.aboutMe = data})
}
 
}
