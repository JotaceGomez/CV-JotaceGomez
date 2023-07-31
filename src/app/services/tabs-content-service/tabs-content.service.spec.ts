import { TestBed } from '@angular/core/testing';

import { TabsContentService } from './tabs-content.service';

describe('TabsContentService', () => {
  let service: TabsContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabsContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
