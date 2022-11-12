import { Component, OnInit } from '@angular/core';
import { AboutMe } from 'src/app/model/about-me.model';
import { SAboutMeService } from 'src/app/service/sabout-me.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
aboutMe : AboutMe = new AboutMe("","")
  constructor(public aboutMeService: SAboutMeService) { }

  ngOnInit(): void {

    this.aboutMeService.detail(1).subscribe(data => {this.aboutMe = data})
  }

}
