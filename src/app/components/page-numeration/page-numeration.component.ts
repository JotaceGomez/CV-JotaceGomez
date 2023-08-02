import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-numeration',
  templateUrl: './page-numeration.component.html',
  styleUrls: ['./page-numeration.component.css']
})
export class PageNumerationComponent implements OnInit {
  @Input() maxNumber: number | any;
  numberOfLines: number[] = [];

  constructor() { }

  ngOnInit(): void {
    for (let i = 1; i <= this.maxNumber; i++) {
      this.numberOfLines.push(i);
    }
  }
}