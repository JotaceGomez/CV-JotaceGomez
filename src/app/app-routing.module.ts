import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WhoAmIComponent } from './components/sections/who-am-i/who-am-i.component';
import { ExperienceComponent } from './components/sections/experience/experience.component';

const routes: Routes = [
  { path: 'experience', component: ExperienceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
