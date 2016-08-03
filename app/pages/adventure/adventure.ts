/// <reference path="../../../typings/globals/google.maps/index.d.ts" />
import {Component} from '@angular/core';
import {Http} from '@angular/http';
import {Geolocation} from 'ionic-native';

@Component({
    templateUrl: 'build/pages/adventure/adventure.html'
})

export class AdventureMode{
    map: any;
    constructor(private http: Http){
        this.initGeo();
    }
    
    initGeo()
    {
    
        let options = {maximumAge: 0, timeout: 5000, enableHighAccuracy: true};
        Geolocation.getCurrentPosition(options).then(pos => {
                let lat = pos.coords.latitude;
                let long = pos.coords.longitude;
                this.loadMap(lat, long);
                this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng='+lat+','+long+'', null)
                    .map((res) => res.json())
                    .subscribe(data => {
                        console.log(data);
                        
                    });
            
        }, (PositionError) => {});

    }
    
    loadMap(lat, long)
    {
        let options = {maximumAge: 0, timeout: 6000, enableHighAccuracy: true};
        
        let latLng = new google.maps.LatLng(lat, long);
        let mapOptions = {
          center: latLng,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        this.map = new google.maps.Map(document.getElementById("map"), mapOptions);
    
        let watchLoc = Geolocation.watchPosition(options).subscribe(pos => {
             this.map.panTo(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
        });
       
    }
}