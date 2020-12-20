import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { featureCollection, FeatureCollection } from '@turf/helpers';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocationSearchService {

  private readonly baseUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/{SEARCH}.json?access_token={ACCESS_TOKEN}&';
  private readonly geoencodingParams: HttpParams = new HttpParams({
    fromObject: {
      autocomplete: 'true',
      bbox: '-10.788574,54.498758,0.109863,61.164437', // Bounding box of Scotland, roughly
      limit: '10',
      types: 'postcode,district,place,locality,neighborhood,address,poi'
    }
  });

  constructor(private readonly http: HttpClient) { }


  getSearchLocations(searchValue: string): Observable<FeatureCollection> {
    if (!searchValue) { return of(featureCollection([])); }

    let url = this.baseUrl.replace('{SEARCH}', searchValue).replace('{ACCESS_TOKEN}', environment.map.accessToken);
    url += this.geoencodingParams.toString();
    return this.http.get<FeatureCollection>(url);
  }
}
