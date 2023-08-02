import { Component, OnInit } from '@angular/core';
import { TabContent, TabsContentService } from 'src/app/services/tabs-content-service/tabs-content.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experience: Array<TabContent> = [];
  technologies: string = 'Technologies';
  numberOfLines: number = 200;

  constructor(
    private tabContentService: TabsContentService,

  ) { }

  ngOnInit(): void {
    this.experience = this.tabContentService.experience;
  }
}
