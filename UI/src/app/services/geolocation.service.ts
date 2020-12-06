import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  updateGeolocation$ = this.updateGeolocationSource.asObservable();
  private updateGeolocationSource = new Subject<boolean>();

  centerMap(locate: boolean): void {
    this.updateGeolocationSource.next(locate);
  }
}
