import { TestBed } from '@angular/core/testing';

import { TribunaisService } from './tribunais.service';

describe('TribunaisService', () => {
  let service: TribunaisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TribunaisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
