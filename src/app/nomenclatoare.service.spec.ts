import { TestBed, inject } from '@angular/core/testing';

import { NomenclatoareService } from './nomenclatoare.service';

describe('NomenclatoareService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NomenclatoareService]
    });
  });

  it('should be created', inject([NomenclatoareService], (service: NomenclatoareService) => {
    expect(service).toBeTruthy();
  }));
});
