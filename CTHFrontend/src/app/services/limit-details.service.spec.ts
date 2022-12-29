import { TestBed } from '@angular/core/testing';

import { LimitDetailsService } from './limit-details.service';

describe('LimitDetailsService', () => {
  let service: LimitDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LimitDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
