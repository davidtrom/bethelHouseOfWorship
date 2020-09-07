import { TestBed } from '@angular/core/testing';

import { PrayerRequestServiceService } from './prayer-request-service.service';

describe('PrayerRequestServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrayerRequestServiceService = TestBed.get(PrayerRequestServiceService);
    expect(service).toBeTruthy();
  });
});
