import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
  mostrarProyecto = false;
  constructor() { }

  ngOnInit(): void {
  }
  proyectosView(){
    this.mostrarProyecto = true;
  }
  homeView(){
    this.mostrarProyecto = false;
  }
}
