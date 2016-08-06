/// <reference path="../../../typings/globals/google.maps/index.d.ts" />
import {Component} from '@angular/core';
import {Http} from '@angular/http';
import {Geolocation} from 'ionic-native';
import {BackService} from '../../services/BackService';
import {Item} from '../../src/Item';
import {Player} from '../../src/Player';
import {Weapon} from '../../src/Weapon';
import {Armor} from '../../src/Armor';

@Component({
    templateUrl: 'build/pages/adventure/adventure.html',
    providers: [BackService]
})

export class AdventureMode{
    map: any;
    _plr:Player;
    places: any;
    statusErrorr: any;


    constructor(private http: Http, private bService: BackService){
        this.bService.getPosInfo().subscribe((pos) => {
            let lat = '41.111252';
            let long = '-81.514024';
           
            this.loadMap(lat,long);
        }, (error) => console.log(error.message));
    }
    
    conquerLocation(plr: Player){
        this._plr = plr;
        plr._('DSykesBiih', this._plr);

        
    }

    loadMap(lat, long)
    {
        let options = {maximumAge: 0, timeout: 6000, enableHighAccuracy: true};
        
        let latLng = new google.maps.LatLng(lat, long);
        let mapOptions = {
          center: latLng,
          zoom: 18,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        this.map = new google.maps.Map(document.getElementById("map"), mapOptions);
        
        let request: any  = {
            location: latLng,
            radius: '500',
            types: ['store']
        };
        
        /*let service = new google.maps.places.PlacesService(this.map);
        service.nearbySearch(request, function(results, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                this.places = results;
              for (var i = 0; i < results.length; i++) {
                let place: any = results[i];
                // If the request succeeds, draw the place location on
                // the map as a marker, and register an event to handle a
                // click on the marker.
                let marker: any = new google.maps.Marker({
                  map: this.map,
                  position: place.geometry.location
                });
              }
            }else
            {
                this.statusErrorr = status;
            }
          });*/
        
        setInterval(() => {
            this.bService.getPosInfo().subscribe((pos) => {
               let lat = 41.111252;
                let long = -81.514024;
           
                this.map.panTo(new google.maps.LatLng(lat, long));
            });
             
        }, 1000);
    }
}