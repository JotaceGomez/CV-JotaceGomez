import { Component, OnInit } from '@angular/core';
import {
  TabContent,
  TabsContentService,
} from 'src/app/services/tabs-content-service/tabs-content.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css'],
})
export class LanguagesComponent implements OnInit {
  languages: Array<TabContent> = [];
  stringTechnologies?: string;
  numberOfLines: number = 200;
  stringLanguage: string = '';

  constructor(private tabContentService: TabsContentService) {}

  ngOnInit(): void {
    this.stringLanguage = this.tabContentService.stringLanguage;
    this.languages = this.tabContentService.languages;
  }

  get formattedLanguage(): string {
    return '-------- ' + this.stringLanguage.toUpperCase() + ' --------';
  }
}
