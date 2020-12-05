import { Component, OnInit } from '@angular/core';
import { tileLayer, latLng } from 'leaflet';

@Component({
  selector: 'lp-map',
  templateUrl: './lp-map.component.html',
  styles: [
  ]
})

export class LpMapComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 5,
    center: latLng(55.95579868434761, -3.1885178890540264)
  };
}
