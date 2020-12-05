import { Component } from '@angular/core';
import { tileLayer, latLng } from 'leaflet';

@Component({
  selector: 'lp-map',
  templateUrl: './lp-map.component.html',
  styles: [ '.map { height: calc(100vh - 3.5rem); width: 100vw; }' ]
})

export class LpMapComponent {
  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 5,
    center: latLng(55.95579868434761, -3.1885178890540264)
  };
}
