import { Component, OnInit } from '@angular/core';

declare var L: any;
var apiToken = 'sk.eyJ1IjoiYW51bWFwYm94IiwiYSI6ImNqc29hYzhrbTBrbms0OW41aHpqY3ZkM24ifQ.xqG3mMuxn3RRG3RMg0pCGw'
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() { 
    var mymap = L.map('mapid').setView([10.0118, 76.3664], 10);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: apiToken
    }).addTo(mymap);

    var marker = L.marker([10.024132, 76.852112]).addTo(mymap);
    marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

    var circle = L.circle([10.0118, 76.3664], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 5000
  }).addTo(mymap);

  var polygon = L.polygon([
    [9.979502, 76.676331],
    [9.975529, 76.543808],
    [10.110078, 76.613846]
  ]).addTo(mymap);

  var popup = L.popup();
  circle.bindPopup("<b>Hello world!</b><br>I am a Circle.")
  polygon.bindPopup("<b>Hello world!</b><br>I am a Polygon.")


function onMapClick(e) {
        var marker = L.marker(e.latlng).addTo(mymap);
        marker.bindPopup("You clicked the map at " + e.latlng.toString()).openPopup()//.openOn('click');
}

mymap.on('click', onMapClick);


  }

}
