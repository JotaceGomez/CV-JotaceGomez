import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramBarComponent } from './program-bar.component';

describe('ProgramBarComponent', () => {
  let component: ProgramBarComponent;
  let fixture: ComponentFixture<ProgramBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
