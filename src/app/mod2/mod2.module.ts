import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Child2Module } from './child2/child2.module';
import { Mod2Component } from './mod2.component';

@NgModule({
  declarations: [Mod2Component],
  imports: [CommonModule, Child2Module],
  exports: [Mod2Component],
})
export class Mod2Module {}
