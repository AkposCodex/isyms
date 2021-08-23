import { TestBed } from '@angular/core/testing';

import { ResearchServiceService } from './research-service.service';

describe('ResearchServiceService', () => {
  let service: ResearchServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResearchServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
