import { TestBed } from '@angular/core/testing';

import { LocationSearchService } from './location-search.service';

describe('LocationSearchService', () => {
  let service: LocationSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocationSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
