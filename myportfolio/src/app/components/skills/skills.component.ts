import { Component, OnInit } from '@angular/core';
import { HyS } from 'src/app/model/hy-s';
import { HysService } from 'src/app/service/hys.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  hys: HyS[] = []

  constructor(public sHys: HysService) { }

  ngOnInit(): void {
    this.sHys.lista().subscribe(data =>{this.hys = data;})
 
  }

}
