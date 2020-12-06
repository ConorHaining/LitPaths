import { TestBed } from '@angular/core/testing';
import { StreetlightsService } from './streetlights.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('StreetlightsService', () => {
  let service: StreetlightsService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(StreetlightsService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getStreetLights', () => {
    it('should send a get request', () => {
      service.getStreetLights('-1,-2').subscribe(() => {});
      const req = httpTestingController.expectOne('https://litpaths.conorhaining.com/lamps?bounds=-1,-2');
      expect(req.request.method).toEqual('GET');
    });

    it('should send the correct base url in the request', () => {
      service.getStreetLights('-1,-2').subscribe(() => {});
      const req = httpTestingController.expectOne('https://litpaths.conorhaining.com/lamps?bounds=-1,-2');
      expect(req.request.url.startsWith('https://litpaths.conorhaining.com/lamps?bounds=')).toBeTrue();
    });

    it('should send the correct bounds in the request url', () => {
      service.getStreetLights('-1,-2').subscribe(() => {});
      const req = httpTestingController.expectOne('https://litpaths.conorhaining.com/lamps?bounds=-1,-2');
      expect(req.request.url.endsWith('-1,-2')).toBeTrue();
    });
  });

});

