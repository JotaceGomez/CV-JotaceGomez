import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgramBarModule } from './components/program-bar/program-bar.module';
import { MenuModule } from './components/menu/menu.module';
import { RouterModule, Routes } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProgramBarModule,
    MenuModule,
    RouterModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
