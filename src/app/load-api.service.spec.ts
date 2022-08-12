import { TestBed } from '@angular/core/testing';

import { LoadApiService } from './load-api.service';

describe('LoadApiService', () => {
  let service: LoadApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
