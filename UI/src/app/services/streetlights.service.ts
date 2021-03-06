import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FeatureCollection } from '@turf/helpers';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StreetLightsService {

  readonly streetlightsUrl = 'https://litpaths.glitch.me/lamps?bounds=';

  constructor(private readonly http: HttpClient) {
  }

  getStreetLights(bounds: String): Observable<FeatureCollection> {
    return this.http.get<FeatureCollection>(this.streetlightsUrl + bounds);
  }
}
