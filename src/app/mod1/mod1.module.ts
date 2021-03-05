import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChildModule } from './child/child.module';
import { Mod1Component } from './mod1.component';

@NgModule({
  declarations: [Mod1Component],
  imports: [CommonModule, ChildModule, FormsModule],
  exports: [Mod1Component],
})
export class Mod1Module {}
