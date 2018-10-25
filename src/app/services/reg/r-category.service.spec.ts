import { TestBed, inject } from '@angular/core/testing';

import { RCategoryService } from './r-category.service';

describe('RCategoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RCategoryService]
    });
  });

  it('should be created', inject([RCategoryService], (service: RCategoryService) => {
    expect(service).toBeTruthy();
  }));
});
