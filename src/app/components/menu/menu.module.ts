import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { SectionsModule } from '../sections/sections.module';


@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    SectionsModule
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }
