import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Child2Component } from './child2.component';

@NgModule({
  declarations: [Child2Component],
  imports: [CommonModule],
  exports: [Child2Component],
})
export class Child2Module {}
