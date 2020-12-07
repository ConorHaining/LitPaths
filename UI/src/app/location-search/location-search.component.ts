import { Component, OnInit } from '@angular/core';
import { FeatureCollection } from '@turf/helpers';
import { latLng, LatLng } from 'leaflet';
import { GeolocationService } from '../services/geolocation.service';

@Component({
  selector: 'lp-location-search',
  templateUrl: './location-search.component.html',
  styles: [
  ]
})
export class LocationSearchComponent {

  constructor(private readonly geolocation: GeolocationService) {}

  searchResults: FeatureCollection;

  onSearchResults(searchResults: FeatureCollection ): void {
    this.searchResults = searchResults;
  }

  updateLocation(center: LatLng): void {
    this.searchResults = null;
    this.geolocation.updateCenter(latLng(center[1], center[0]));
  }

}
