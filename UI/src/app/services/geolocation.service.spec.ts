import { TestBed } from '@angular/core/testing';

import { GeolocationService } from './geolocation.service';

describe('GeolocationService', () => {
  let service: GeolocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeolocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('centerMap', () => {

    it('it should emit true when given from the update updateGeolocation$ observable', () => {
      service.centerMap(true);

      service.updateGeolocation$.subscribe(locate => expect(locate).toBeTrue())
    });
    
    it('it should emit false when given from the update updateGeolocation$ observable', () => {
      service.centerMap(false);

      service.updateGeolocation$.subscribe(locate => expect(locate).toBeFalse())
    });

  });
});
