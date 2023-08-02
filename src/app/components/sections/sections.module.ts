import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienceComponent } from './experience/experience.component';
import { StudiesComponent } from './studies/studies.component';
import { WhoIsJotaceComponent } from './who-is-jotace/who-is-jotace.component';
import { LanguagesComponent } from './languages/languages.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { PageNumerationComponent } from '../page-numeration/page-numeration.component';


@NgModule({
  declarations: [
    ExperienceComponent,
    StudiesComponent,
    WhoIsJotaceComponent,
    LanguagesComponent,
    TechnologiesComponent,
    PageNumerationComponent
  ],
  imports: [
    CommonModule,    
  ]
})
export class SectionsModule { }
