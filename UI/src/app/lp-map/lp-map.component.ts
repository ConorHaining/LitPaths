import { Component, OnInit } from '@angular/core';
import { FeatureCollection } from '@turf/helpers';
import { tileLayer, latLng, Map, circle, geoJSON, circleMarker } from 'leaflet';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GeolocationService } from '../services/geolocation.service';
import { StreetLightsService } from '../services/streetlights.service';

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

  layers = []

  map: Map;

  constructor(private readonly geolocation: GeolocationService, private readonly streetLightsService: StreetLightsService) {}

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

    const geojsonMarkerOptions = {
      radius: 5,
      fillColor: "#ffff02",
      color: "#ffff02",
      weight: 1,
      opacity: 1,
      fillOpacity: 0.5
    };

    this.streetLightsService.getStreetLights(this.map.getBounds().toBBoxString()).subscribe(lampLocation => {
      this.layers.push(geoJSON<FeatureCollection>(lampLocation, {
        pointToLayer: (feature, latlng) => (circleMarker(latlng, geojsonMarkerOptions))
      }));
    });
  }

  onMapMoveEnd(event: Event): void {
    const map = event.target as any as Map;

    const geojsonMarkerOptions = {
      radius: 5,
      fillColor: "#ffff02",
      color: "#ffff02",
      weight: 1,
      opacity: 1,
      fillOpacity: 0.5
    };

    this.streetLightsService.getStreetLights(map.getBounds().toBBoxString()).subscribe(lampLocation => {
      this.layers.push(geoJSON<FeatureCollection>(lampLocation, {
        pointToLayer: (feature, latlng) => (circleMarker(latlng, geojsonMarkerOptions))
      }));
    });
  }

  private centerMap(): void {
    this.map.locate({
      enableHighAccuracy: true,
      setView: true,
      maxZoom: 18
    });
  }

}
