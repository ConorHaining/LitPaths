import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GeolocationService } from '../services/geolocation.service';

import { CurrentLocationButtonComponent } from './current-location-button.component';

describe('CurrentLocationButtonComponent', () => {
  let component: CurrentLocationButtonComponent;
  let fixture: ComponentFixture<CurrentLocationButtonComponent>;
  let geolocationService: GeolocationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentLocationButtonComponent ],
      providers: [
        {
          provide: GeolocationService,
          useValue: {
            centerMap: jasmine.createSpy()
          }
        }
      ]
    })
    .compileComponents();

    geolocationService = TestBed.inject(GeolocationService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentLocationButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('centerMap', () => {

    it('should invert locate property to false, if already true', () => {
      component.locate = true;

      component.centerMap();

      expect(component.locate).toBeFalse();
    });

    it('should invert locate property to true, if already false', () => {
      component.locate = false;

      component.centerMap();

      expect(component.locate).toBeTrue();
    });

    it('should call geolocation service', () => {
      component.centerMap();

      expect(geolocationService.centerMap).toHaveBeenCalled();
    });

    it('should call geolocation service with value of locate property', () => {
      component.locate = true;

      component.centerMap();

      expect(geolocationService.centerMap).toHaveBeenCalledWith(component.locate);
    });

  });
});
