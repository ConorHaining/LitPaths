import { Component } from '@angular/core';
import { tileLayer, latLng } from 'leaflet';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'lp-map',
  templateUrl: './lp-map.component.html',
  styles: ['.map { height: calc(100vh - 3.5rem); width: 100vw }']
})

export class LpMapComponent {
  options = {
    layers: [
      tileLayer(environment.map.tileLayer, { 
        maxZoom: 18, 
        attribution: environment.map.attribution, 
        id: environment.map.id, 
        accessToken: environment.map.accessToken 
      })
    ],
    zoom: 5,
    center: latLng(55.95579868434761, -3.1885178890540264)
  };
}
