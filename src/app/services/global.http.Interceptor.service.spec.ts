import { TestBed } from '@angular/core/testing';

import { GlobalHttpInterceptorService } from './global.http.Interceptor.service';

describe('GlobalhttpinterceptorServiceService', () => {
  let service: GlobalHttpInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalHttpInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
