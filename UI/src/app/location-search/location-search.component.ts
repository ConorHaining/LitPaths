import { Component } from '@angular/core';
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

  searchResults: FeatureCollection;
  showSearchbar = false;

  constructor(private readonly geolocation: GeolocationService) {}


  onSearchResults(searchResults: FeatureCollection ): void {
    this.searchResults = searchResults;
    this.showSearchbar = true;
  }

  updateLocation(center: LatLng): void {
    sa_event('search_result_pressed');
    this.searchResults = null;
    this.geolocation.updateCenter(latLng(center[1], center[0]));
    this.showSearchbar = false;
  }

}
