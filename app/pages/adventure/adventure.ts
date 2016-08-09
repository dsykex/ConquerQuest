/// <reference path="../../../typings/globals/google.maps/index.d.ts" />
import {Component} from '@angular/core';
import {Http} from '@angular/http';
import {Geolocation} from 'ionic-native';
import {BackService} from '../../services/BackService';
import {Item} from '../../src/Item';
import {Player} from '../../src/Player';
import {Weapon} from '../../src/Weapon';
import {ArmoryMgr} from '../../src/ArmoryMgr';
import {Base} from '../../src/Base';
import {Loading, NavController, Toast, ActionSheet, Alert} from 'ionic-angular';

@Component({
    templateUrl: 'build/pages/adventure/adventure.html',
    providers: [Player, BackService, ArmoryMgr]
})

export class AdventureMode{
    map: any;
    plr:Player;
    places: any;
    statusErrorr: any;
    lat: string;
    lng: string;
    city: string;
    area: string; 

    constructor(_plr: Player, private http: Http, private bService: BackService, private navCtrl: NavController){
        this.plr = _plr;
        this.bService.getPosInfo().subscribe((pos) => {
            let lat = '41.111252';
            let long = '-81.514024';
            this.lat = lat;
            this.lng = long;
            this.showLoading('Loading Map Data!', 2000);
            this.city = pos.results[2].formatted_address;
            this.area = pos.results[1].formatted_address;
            setTimeout(() => {
                this.loadMap(lat,long);
            }, 2000);
            _plr._('DSykes Da Namee', this.plr);
        }, (error) => console.log(error.message));
    }
    
    conquerLocation(plr: Player){

        plr._conquerSphere._level = plr._level; 
        this.showLoading('Conquering Location..', 1000);
        
        let position = {lat: this.map.getCenter().lat(),
            lng: this.map.getCenter().lng()
        };
        setTimeout( () =>{
            
        
        this.showPrompt();
        this.bService.getData('get all bases', true).subscribe(data => {
            let localBases = (data.length) ? data.filter( (lbases) => {
                return lbases.area == this.area;
            }) : null;
            if(localBases){
                localBases.forEach((base) => {
                    let distance = this.bService.getDistance(position.lat, position.lng, base.lat, base.lng, 'meters');
                    console.log(distance);
                    if(distance < 2.5){
                        this.presentToast('You will have to conquor this base!', 1000, 'middle');
                    }else{
                        
                        this.initConquer(plr);
                    }
                });
            }else{
                let query = 'INSERT INTO bases (`name`, `lat`, `lng`, `level`, `city`, `area`, `owner_id`) VALUES ("DSykesBase", "'+this.lat+'", "'+this.lng+'", '+plr._conquerSphere._level+', "'+this.city+'", "'+this.area+'", '+plr._id+');';
                
        
                console.log(plr._conquerSphere._level);
                this.bService.execute(query)
                    .subscribe(data => {
                        console.log(data);
                        this.initConquer(plr);
                        this.presentToast('Base succesfully conquered!', 1000, 'middle');
                    }, (error) => {
                        this.presentToast('There was an error aquiring the base.', 2000, 'middle');
                        console.log(error);
                    });
    
            }
        });
        }, 2000);
    }


    showPrompt() {
        let prompt = Alert.create({
        title: 'Login',
        message: "Enter a name for this new album you're so keen on adding",
        inputs: [
            {
            name: 'title',
            placeholder: 'Title'
            },
        ],
        buttons: [
            {
            text: 'Cancel',
            handler: data => {
                console.log('Cancel clicked');
            }
            },
            {
                text: 'Save',
                handler: data => {
                    console.log('Saved clicked');
                    console.log(data)
                }
            }
        ]
        });
        this.navCtrl.present(prompt);
    }
    initConquer(plr: Player){
        let query = 'INSERT INTO bases (`name`, `lat`, `lng`, `level`, `city`, `area`, `owner_id`) VALUES ("DSykesBase", "'+this.lat+'", "'+this.lng+'", '+plr._conquerSphere._level+', "'+this.city+'", "'+this.area+'", '+plr._id+');';
        let insertSub = null;

        setTimeout( () => {
            insertSub = this.bService.execute(query)
                .subscribe(data => {
                    console.log(data);
                    this.presentToast('Base succesfully conquered!', 1000, 'middle');
                }, (error) => {
                    this.presentToast('There was an error aquiring the base.', 1000, 'middle');
                });
        }, 2500);
        this.bService.getData('get all bases', true).subscribe(data => {
            let _localBases = data.filter((_b) => {
                return _b.area = this.area;
            });
        });
    }

    presentToast(message, time, pos) {
        let toast = Toast.create({
            message: message,
            duration: time,
            position: pos,
            dismissOnPageChange: true,
        
        });
        this.navCtrl.present(toast);
        //toast.present();
    }

    addBaseInfoWindow(marker, content, base){
        let infoWindow = new google.maps.InfoWindow({
            content: content
        });
        
        google.maps.event.addListener(marker, 'click', function(){
            infoWindow.open(this.map, marker);
            alert('AW SHIT');
        });
    }

    addInfoWindow(marker, content){
        let infoWindow = new google.maps.InfoWindow({
            content: content
        });
        
        google.maps.event.addListener(marker, 'click', function(){
            infoWindow.open(this.map, marker);
            
        });
    }

    loadPlaces(){
        return this.bService.loadDummyData();

        /*let key = 'AIzaSyCFHXCQfUVaTiOJPhkbENk69RPtxoahtjQ';
        this.bService.getWebData('http://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+lat+','+long+'&radius='+radius+'&types='+type+'&key='+key+'')
            .subscribe(data => {
                this.places = data;
                console.log(this.places);
            });*/
    }

    showLoading(message, time) {
      let loading = Loading.create({
        content: message,
        duration: time
      });
      this.navCtrl.present(loading);
    }

    loadMap(lat, long)
    {
        let options = {maximumAge: 0, timeout: 6000, enableHighAccuracy: true};
        
        let latLng = new google.maps.LatLng(lat, long);
        let mapOptions = {
          center: latLng,
          zoom: 18,
          styles: [
            {
              featureType: 'all',
              stylers: [
                
                { hue: '#9f0000' }
              ]
            },{
              featureType: 'road',
              elementType: 'geometry.fill',
              stylers: [
                { saturation: 100 },
                { hue: '#2582fc' }
              ]
            },{
              featureType: 'road.arterial',
              elementType: 'geometry',
              stylers: [
                { hue: '#9f0000' },
                { saturation: 50 },
                { visibility: 'simplified'}
              ]
            },{
              featureType: 'poi',
              elementType: 'labels',
              stylers: [
                { visibility: 'off' }
              ]
            }
          ],
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        this.map = new google.maps.Map(document.getElementById("map"), mapOptions);

        setTimeout(() => {
            console.log('Loading Places..');
            let placeData = this.loadPlaces();
            
            placeData.results.forEach(place => {
                let placeLat = place.geometry.location.lat;
                let placeLong = place.geometry.location.lng;
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(placeLat, placeLong),
                    map: this.map,
                    animation: google.maps.Animation.DROP,

                    title: 'Hello World!'
                });
                let distance= this.bService.getDistance(lat, long, placeLat, placeLong, 'miles');
                let content = '<h4 primary>'+place.name+'</h4><p>'+place.vicinity+'</p><p>'+distance+' meters away</p><button class="button button-full">Items</button><button class="button button-full">Items</button>';         
                this.addInfoWindow(marker, content);
            });
        }, 1000);

        /*setInterval(() => {
            this.bService.getPosInfo().subscribe((pos) => {
                let lat = 41.111252;
                let long = -81.514024;
           
                this.map.panTo(new google.maps.LatLng(lat, long));
            });
             
        }, 1000);*/
    }
}