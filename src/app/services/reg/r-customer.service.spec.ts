import { TestBed, inject } from '@angular/core/testing';

import { RCustomerService } from './r-customer.service';

describe('RCustomerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RCustomerService]
    });
  });

  it('should be created', inject([RCustomerService], (service: RCustomerService) => {
    expect(service).toBeTruthy();
  }));
});
