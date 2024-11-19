import { TestBed } from '@angular/core/testing';

import { TipoTribunalService } from './tipo-tribunal.service';

describe('TipoTribunalService', () => {
  let service: TipoTribunalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoTribunalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
