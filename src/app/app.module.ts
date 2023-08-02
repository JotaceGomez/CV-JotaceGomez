import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuModule } from './components/menu/menu.module';
import { NavTabsComponent } from './components/nav-tabs/nav-tabs.component';
import { ProgramBarModule } from './components/program-bar/program-bar.module';


@NgModule({
  declarations: [
    AppComponent,
    NavTabsComponent    
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
