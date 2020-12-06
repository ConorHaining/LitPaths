import { Component, OnInit } from '@angular/core';
import { tileLayer, latLng, Map } from 'leaflet';
import { environment } from 'src/environments/environment';
import { GeolocationService } from '../services/geolocation.service';

@Component({
  selector: 'lp-map',
  templateUrl: './lp-map.component.html',
  styles: ['.map { height: calc(100vh - 3.5rem); width: 100vw }']
})

export class LpMapComponent implements OnInit {

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

  map: Map;

  constructor(private readonly geolocation: GeolocationService) {}
  
  ngOnInit(): void {
    this.geolocation.updateGeolocation$.subscribe(locate => {
      if (locate) {
        this.centerMap();
      } else {
        this.map.stopLocate();
      }
    });
  }

  onMapReady(map: Map): void {
    this.map = map;
  }

  private centerMap(): void {
    this.map.locate({
      enableHighAccuracy: true,
      setView: true,
      maxZoom: 18
    });
  }

}
