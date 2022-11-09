import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { SexperienciaService } from 'src/app/service/sexperiencia.service';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencia: ExperienciaComponent[] = [];
  constructor(private sExperiencia:SexperienciaService,private tokenService:AuthService) { }

  ngOnInit(): void {
  }

}
