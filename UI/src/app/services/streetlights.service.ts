import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FeatureCollection } from '@turf/helpers';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StreetlightsService {

  streetlightsUrl = 'https://litpaths.conorhaining.com/lamps?bounds=';

  constructor(private readonly http: HttpClient) {
  }

  getStreetLights(bounds: String): Observable<FeatureCollection> {
    return this.http.get<FeatureCollection>(this.streetlightsUrl + bounds);
  }
}
