import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  navBarTitle: string = 'CV-JOTACEGOMEZ'
  isExperienceRoute: boolean = false;


  constructor(private router: Router) { }

  ngOnInit(): void {
    this.checkActiveLink();
    console.log('la ruta es:', this.router.url);


    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.checkActiveLink();
      }
    });
  }

  private checkActiveLink(): void {
    const currentUrl = this.router.url;
    if (this.isExperienceRoute = currentUrl.includes('experience')) {
      console.log('lo incluye');
    }
  }
}