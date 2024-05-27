import { Component, OnInit } from '@angular/core';
import {
  TabContent,
  TabsContentService,
} from 'src/app/services/tabs-content-service/tabs-content.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  experience: Array<TabContent> = [];
  stringTechnologies?: string;
  numberOfLines: number = 200;
  stringMainExperience: string = '';
  otherExperience: string = '';

  constructor(private tabContentService: TabsContentService) {}

  ngOnInit(): void {
    this.experience = this.tabContentService.experience;
    this.stringTechnologies = this.tabContentService.stringTechnologies;
    this.stringMainExperience = this.tabContentService.stringMainExperience;
    this.otherExperience = this.tabContentService.otherExperience;
  }

  get formattedMainExp(): string {
    return '-------- ' + this.stringMainExperience.toUpperCase() + ' --------';
  }
  get formattedOtherExp(): string {
    return '-------- ' + this.otherExperience.toUpperCase() + ' --------';
  }
}
