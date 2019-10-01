import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  valueOfInput = 'test';
  constructor() { }

  ngOnInit() {
  }
onInputFocused(event: Event){
  this.valueOfInput = (<HTMLInputElement>event.target).value;
}
}
