import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNumerationComponent } from './page-numeration.component';

describe('PageNumerationComponent', () => {
  let component: PageNumerationComponent;
  let fixture: ComponentFixture<PageNumerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNumerationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageNumerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
