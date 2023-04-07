import { Component, AfterViewInit } from '@angular/core';

// imports from leaflet
import * as L from 'leaflet';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['../../../../node_modules/leaflet/dist/leaflet.css', './map.component.css']
})
export class MapComponent implements AfterViewInit {
  private map;

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 39.8282, -98.5795 ],
      zoom: 3
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

    const provider = new OpenStreetMapProvider();
    const searchControl = GeoSearchControl({
    provider: provider,
    style:"bar"
});
    this.map.addControl(searchControl);
}

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
  }
}