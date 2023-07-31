import { Component } from '@angular/core';
import { MenuNavService } from 'src/app/services/menu-nav-service/menu-nav.service';

@Component({
  selector: 'app-nav-tabs',
  templateUrl: './nav-tabs.component.html',
  styleUrls: ['./nav-tabs.component.css']
})
export class NavTabsComponent {

  constructor(public menuNavService: MenuNavService) { }

}
