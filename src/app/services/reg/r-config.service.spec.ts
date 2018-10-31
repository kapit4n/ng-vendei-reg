import { TestBed, inject } from '@angular/core/testing';

import { RConfigService } from './r-config.service';

describe('RConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RConfigService]
    });
  });

  it('should be created', inject([RConfigService], (service: RConfigService) => {
    expect(service).toBeTruthy();
  }));
});
