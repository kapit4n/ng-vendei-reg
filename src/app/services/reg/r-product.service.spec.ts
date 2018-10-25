import { TestBed, inject } from '@angular/core/testing';

import { RProductService } from './r-product.service';

describe('RProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RProductService]
    });
  });

  it('should be created', inject([RProductService], (service: RProductService) => {
    expect(service).toBeTruthy();
  }));
});
