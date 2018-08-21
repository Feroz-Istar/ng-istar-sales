import { TestBed, inject } from '@angular/core/testing';

import { ComplexService } from './complex.service';

describe('ComplexService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComplexService]
    });
  });

  it('should be created', inject([ComplexService], (service: ComplexService) => {
    expect(service).toBeTruthy();
  }));
});
