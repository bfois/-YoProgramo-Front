import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template:
  `<div class="container">
  <span> © 2022 Brian Fois. All Rights Reserved.</span>
</div>
`,
  styles: [`

  *{
    color:rgb(160, 160, 160);
    font-size: 10px;
}
.container{
   width: 50%;
   text-align: center;
}
  `],
  standalone:true
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
