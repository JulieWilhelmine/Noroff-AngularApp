import { TestBed, inject } from '@angular/core/testing';

import { NamedayService } from './nameday.service';

describe('NamedayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NamedayService]
    });
  });

  it('should be created', inject([NamedayService], (service: NamedayService) => {
    expect(service).toBeTruthy();
  }));
});
