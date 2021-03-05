import { Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css'],
})
export class Child2Component implements OnInit {
  @ContentChild('headerContent', { static: false })
  header: ElementRef;
  change() {
    console.log(this.header);
    this.header.nativeElement.textContent = 'Hello to world!';
  }
  constructor() {}

  ngOnInit(): void {}
}
