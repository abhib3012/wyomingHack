import { TestBed } from '@angular/core/testing';

import { ErcService } from './erc.service';

describe('ErcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ErcService = TestBed.get(ErcService);
    expect(service).toBeTruthy();
  });
});
