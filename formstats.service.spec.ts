import { TestBed, inject } from '@angular/core/testing';

import { FormstatsService } from './formstats.service';

describe('FormstatsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormstatsService]
    });
  });

  it('should be created', inject([FormstatsService], (service: FormstatsService) => {
    expect(service).toBeTruthy();
  }));
});
