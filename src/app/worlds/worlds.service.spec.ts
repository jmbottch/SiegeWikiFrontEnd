import { TestBed } from '@angular/core/testing';

import { WorldsService } from './worlds.service';

describe('WorldsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorldsService = TestBed.get(WorldsService);
    expect(service).toBeTruthy();
  });
});
