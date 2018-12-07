import { TestBed } from '@angular/core/testing';

import { SiegeService } from './siege.service';

describe('SiegeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SiegeService = TestBed.get(SiegeService);
    expect(service).toBeTruthy();
  });
});
