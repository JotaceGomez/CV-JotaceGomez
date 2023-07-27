import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { SectionsModule } from '../sections/sections.module';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    SectionsModule,
    RouterModule
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }
