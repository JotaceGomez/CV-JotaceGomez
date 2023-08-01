import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MenuNavService } from 'src/app/services/menu-nav-service/menu-nav.service';


@Component({
  selector: 'app-program-bar',
  templateUrl: './program-bar.component.html',
  styleUrls: ['./program-bar.component.css']
})
export class ProgramBarComponent {

  documentTitle: string = 'Jose-Carlos-Gomez-Rueda.Curriculum-Vitae - Visual Studio Code'
  documentResponsiveTitle: string = 'Jose-Carlos-Gomez-Rueda.Curriculum-Vitae'

  constructor(
    public menuNavService: MenuNavService,
    private router: Router
  ) { }



}
