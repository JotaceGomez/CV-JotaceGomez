import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramBarComponent } from './program-bar.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ProgramBarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ProgramBarComponent
  ]
})
export class ProgramBarModule { }
