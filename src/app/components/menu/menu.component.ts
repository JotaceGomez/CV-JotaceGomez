import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MenuNavService } from 'src/app/services/menu-nav-service/menu-nav.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  navBarTitle: string = 'CV-JOTACEGOMEZ'
  isExperienceRoute: boolean = false;


  constructor(
    private router: Router,
    public menuNavService: MenuNavService) { }

  ngOnInit(): void {
    this.checkActiveLink();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.checkActiveLink();
      }
    });
  }

  private checkActiveLink(): void {
    const currentUrl = this.router.url;
  }
}