import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExperienceComponent } from './components/sections/experience/experience.component';
import { WhoIsJotaceComponent } from './components/sections/who-is-jotace/who-is-jotace.component';
import { StudiesComponent } from './components/sections/studies/studies.component';
import { LanguagesComponent } from './components/sections/languages/languages.component';
import { TechnologiesComponent } from './components/sections/technologies/technologies.component';

const routes: Routes = [
  { path: '', redirectTo: 'curriculum-vitae', pathMatch: 'full' },
  { path: 'curriculum-vitae', component: WhoIsJotaceComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'education', component: StudiesComponent },
  { path: 'languages', component: LanguagesComponent },
  { path: 'technologies', component: TechnologiesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
