import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-mod1',
  templateUrl: './mod1.component.html',
  styleUrls: ['./mod1.component.css'],
})
export class Mod1Component implements OnInit {
  name = 'test';

  @ViewChild('nameText', { static: false })
  nameParagraph: ElementRef;

  secondName: string = 'Tom';

  // private counterComponent: ChildComponent;

  // increment() {
  //   this.counterComponent.increment();
  // }
  // decrement() {
  //   this.counterComponent.decrement();
  // }

  constructor() {}

  ngOnInit(): void {}

  change() {
    console.log(this.nameParagraph.nativeElement.textContent);
    this.nameParagraph.nativeElement.textContent = 'hello';
  }
}
