import { TestBed } from '@angular/core/testing';

import { CipherService } from './cipher.service';

describe('CipherServiceService', () => {
  let service: CipherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CipherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
