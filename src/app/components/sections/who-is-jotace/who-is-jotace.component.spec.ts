import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoIsJotaceComponent } from './who-is-jotace.component';

describe('WhoIsJotaceComponent', () => {
  let component: WhoIsJotaceComponent;
  let fixture: ComponentFixture<WhoIsJotaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhoIsJotaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhoIsJotaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
