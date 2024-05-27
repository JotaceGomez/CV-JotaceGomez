import { Component, OnInit } from '@angular/core';
import { MenuNavService } from 'src/app/services/menu-nav-service/menu-nav.service';
import {
  TabContent,
  TabsContentService,
  WhoIsJotace,
} from 'src/app/services/tabs-content-service/tabs-content.service';

@Component({
  selector: 'app-who-is-jotace',
  templateUrl: './who-is-jotace.component.html',
  styleUrls: ['./who-is-jotace.component.css'],
})
export class WhoIsJotaceComponent implements OnInit {
  content: WhoIsJotace = {};

  numberOfLines: number = 200;
  whoIsJotace: string = '';

  constructor(private tabContentService: TabsContentService) {}

  ngOnInit(): void {
    this.content = this.tabContentService.whoIsContent;
    this.whoIsJotace = this.tabContentService.whoIsJotace;
  }

  get formattedWho(): string {
    return '-------- ' + this.whoIsJotace.toUpperCase() + ' --------';
  }
}
