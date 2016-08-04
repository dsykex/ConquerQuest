/// <reference path="../../../typings/globals/google.maps/index.d.ts" />
import {Component} from '@angular/core';
import {Http} from '@angular/http';
import {Geolocation} from 'ionic-native';
import {BackService} from '../../services/BackService';

@Component({
    templateUrl: 'build/pages/adventure/adventure.html',
    providers: [BackService]
})

export class AdventureMode{
    map: any;
    constructor(private http: Http, private bService: BackService){
        this.bService.getLatLng().then((pos) => {
            let lat = pos.coords.latitude;
            let long = pos.coords.longitude;
           
            this.loadMap(lat,long);
        }, (error) => console.log(error.message));
    }
    
    initGeo()
    {
    
        

    }
    
    loadMap(lat, long)
    {
        let options = {maximumAge: 0, timeout: 6000, enableHighAccuracy: true};
        
        let latLng = new google.maps.LatLng(lat, long);
        let mapOptions = {
          center: latLng,
          zoom: 30,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        this.map = new google.maps.Map(document.getElementById("map"), mapOptions);
    
        setInterval(() => {
            this.bService.getLatLng().then((pos) => {
                let lat = pos.coords.latitude;
                let long = pos.coords.longitude;
                this.map.panTo(new google.maps.LatLng(lat, long));
            });
             
        }, 500);
    }
}