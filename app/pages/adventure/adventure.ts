/// <reference path="../../../typings/globals/google.maps/index.d.ts" />
import {Component} from '@angular/core';
import {Http} from '@angular/http';
import {Geolocation} from 'ionic-native';
import {BackService} from '../../services/BackService';
import {Item} from '../../src/Item';
import {Player} from '../../src/Player';
import {Weapon} from '../../src/Weapon';
import {ArmoryMgr} from '../../src/ArmoryMgr';

@Component({
    templateUrl: 'build/pages/adventure/adventure.html',
    providers: [Player, BackService, ArmoryMgr]
})

export class AdventureMode{
    map: any;
    plr:Player;
    places: any;
    statusErrorr: any;
 
    constructor(_plr: Player, private http: Http, private bService: BackService){
        this.plr = _plr;
        this.bService.getPosInfo().subscribe((pos) => {
            let lat = '41.111252';
            let long = '-81.514024';
            
            this.loadMap(lat,long);
            _plr._('DSykes Da Namee', this.plr);
        }, (error) => console.log(error.message));
    }
    
    conquerLocation(plr: Player){
        plr._conquerSphere._level = plr._level;
        console.log(plr._conquerSphere._level);

        let marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: this.map.getCenter()
        });
        
        let content = "<h4>ffs</h4><p>fdfsffdsf</p>";         
        this.addInfoWindow(marker, content);
    }

    addInfoWindow(marker, content){
        let infoWindow = new google.maps.InfoWindow({
            content: content
        });
        
        google.maps.event.addListener(marker, 'click', function(){
            infoWindow.open(this.map, marker);
        });
    }

    /*presentActionSheet() {
        let actionSheet = this.actionSheetController.then({
        title: 'Modify your album',
        buttons: [
            {
            text: 'Destructive',
            role: 'destructive',
            handler: () => {
                console.log('Destructive clicked');
            }
            },{
            text: 'Archive',
            handler: () => {
                console.log('Archive clicked');
            }
            },{
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
                console.log('Cancel clicked');
            }
            }
        ]
        });
        actionSheet.present();
    }*/

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