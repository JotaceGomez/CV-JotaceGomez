import { Component, OnInit } from '@angular/core';
import { TabContent, TabsContentService } from 'src/app/services/tabs-content-service/tabs-content.service';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent implements OnInit {
  education: Array<TabContent> = [];
  courses: Array<TabContent> = [];
  stringTechnologies?: string;
  stringCourses: string = '';
  stringMainEducation: string = '';
  numberOfLines: number = 200;

  constructor(
    private tabContentService: TabsContentService
  ) { }

  ngOnInit(): void {
    this.education = this.tabContentService.education;
    this.courses = this.tabContentService.courses;
    this.stringTechnologies = this.tabContentService.stringTechnologies;
    this.stringCourses = this.tabContentService.stringCourses;
    this.stringMainEducation = this.tabContentService.stringMainEducation;
  }

  get formattedCourses(): string {
    return '-------- ' + this.stringCourses.toUpperCase() + ' --------';
  }
  get formattedMainEducation(): string {
    return '-------- ' + this.stringMainEducation.toUpperCase() + ' --------';
  }
}
