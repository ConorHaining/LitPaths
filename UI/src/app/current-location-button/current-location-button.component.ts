import { Component, OnInit } from '@angular/core';
import { GeolocationService } from '../services/geolocation.service';

@Component({
  selector: 'lp-current-location-button',
  templateUrl: './current-location-button.component.html',
  styles: [
  ]
})
export class CurrentLocationButtonComponent {

  locate = false;

  constructor(private readonly geolocation: GeolocationService) { }

  centerMap(): void {
    this.locate = !this.locate;
    this.geolocation.centerMap(this.locate);
  }

}
