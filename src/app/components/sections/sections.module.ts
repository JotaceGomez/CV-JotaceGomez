import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhoAmIComponent } from './who-am-i/who-am-i.component';
import { ExperienceComponent } from './experience/experience.component';
import { StudiesComponent } from './studies/studies.component';



@NgModule({
  declarations: [
    WhoAmIComponent,
    ExperienceComponent,
    StudiesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SectionsModule { }
