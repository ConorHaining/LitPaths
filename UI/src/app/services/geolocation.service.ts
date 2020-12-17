import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  updateGeolocationSource = new Subject<boolean>();
  updateGeolocation$ = this.updateGeolocationSource.asObservable();

  centerMap(locate: boolean): void {
    this.updateGeolocationSource.next(locate);
  }
}
