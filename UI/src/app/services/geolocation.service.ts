import { Injectable } from '@angular/core';
import { LatLng } from 'leaflet';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  updateGeolocationSource = new Subject<boolean>();
  updateGeolocation$ = this.updateGeolocationSource.asObservable();

  mapCenterSource = new Subject<LatLng>();
  mapCenter$ = this.mapCenterSource.asObservable();

  centerMap(locate: boolean): void {
    this.updateGeolocationSource.next(locate);
  }

  updateCenter(center: LatLng): void {
    this.mapCenterSource.next(center);
  }
}
