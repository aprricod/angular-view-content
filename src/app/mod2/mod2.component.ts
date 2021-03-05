import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mod2',
  templateUrl: './mod2.component.html',
  styleUrls: ['./mod2.component.css'],
})
export class Mod2Component implements OnInit {
  name: string = 'Tom';
  constructor() {}

  ngOnInit(): void {}
}
