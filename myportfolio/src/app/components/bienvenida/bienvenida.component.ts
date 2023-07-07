import { Component, OnInit } from '@angular/core';
import { trigger,style, animate, transition } from '@angular/animations';
const efectStart = transition('void => *', [
  style({ opacity: 0 }),
  animate('1.5s ease-in', style({ opacity: 1 })),
])
const animation = trigger('animation',[efectStart])
@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css'],
  animations:[animation]
})
export class BienvenidaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
