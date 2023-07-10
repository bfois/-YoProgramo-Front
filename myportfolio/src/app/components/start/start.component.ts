import {CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { trigger,style, animate, transition } from '@angular/animations';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { RouterModule } from '@angular/router';


const efectStart = transition('void => *', [
  style({ opacity: 0 }),
  animate('3s ease-in', style({ opacity: 1 })),
])
const animation = trigger('animation',[efectStart])

const efectStart1 = transition('void => *', [
  style({ opacity: 0, transform: 'translateY(100%)' }),
  animate('4s ease', style({ opacity: 1, transform: 'translateY(0)' })),
]);

const animation1 = trigger('animation1', [efectStart1]);
@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
  standalone: true,
  animations:[animation,animation1],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports:[NgxTypedJsModule,RouterModule],

})
export class StartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
