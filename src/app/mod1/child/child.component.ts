import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  counter: number = 10;
  increment() {
    this.counter++;
  }
  decrement() {
    this.counter--;
  }

  constructor() {}

  ngOnInit(): void {}
}
