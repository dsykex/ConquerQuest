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
    loaded:boolean = false;;

    constructor(_plr: Player, private http: Http, private bService: BackService, private navCtrl: NavController){
        this.plr = _plr;
        this.bService.getPosInfo().subscribe((pos) => {
            let lat = '41.112883555575664';
            let long = '-81.46895752413178';
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
        let position = {lat: this.map.getCenter().lat(),
            lng: this.map.getCenter().lng()
        };

        this.bService.getData('get all bases', true).subscribe(data => {
            let localBases = (data.length) ? data.filter( (lbases) => {
                return lbases.area == this.area;
            }) : null;
            console.log(localBases);
            if(localBases){
                let inDistance = false;
                localBases.forEach((base) => {
                    let distance = this.bService.getDistance(position.lat, position.lng, base.lat, base.lng, 'meters');
                    console.log(distance);
                    if(distance < 2.5){
                        inDistance = true;
                    }
                });

                if(inDistance){

                }else{
                    this.showBasePanel();
                }
            }else{
                let query = 'INSERT INTO bases (`name`, `lat`, `lng`, `level`, `city`, `area`, `owner_id`) VALUES ("DSykesBase", "'+this.lat+'", "'+this.lng+'", '+plr._conquerSphere._level+', "'+this.city+'", "'+this.area+'", '+plr._id+');';
                
                console.log(plr._conquerSphere._level);
                this.bService.execute(query)
                    .subscribe(data => {
                        console.log(data);
                    }, (error) => {
                        this.presentToast('There was an error aquiring the base.', 2000, 'middle');
                        console.log(error);
                    });
    
            }
        });
    }

    showActionSheet() {
        let actionSheet = ActionSheet.create({
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
        this.navCtrl.present(actionSheet);
    }

    loadBases(plr: Player){
        let cityBases = null;
        this.bService.getData('get all bases', true).subscribe((data) => {
            let _cityBases = data.filter( (_cb) => {
                return _cb.city = this.city;
            });

            cityBases = _cityBases;
            console.log(cityBases.length);
        });

        setTimeout( () => {
            if(cityBases){
                cityBases.forEach( (cb) => {
                    if(cb.owner_id == plr._id){
                        plr._base._(plr._base, cb.id, cb.name, new google.maps.LatLng(cb.lat, cb.lng), plr._id, plr._level);
                      
                        let image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
                        let marker = new google.maps.Marker({
                            position: new google.maps.LatLng(cb.lat, cb.lng),
                            map: this.map,
                            animation: google.maps.Animation.DROP,
                            icon: image,
                            title: plr._base.name
                        });

                        this.addBaseInfoWindow(marker, cb);
                        plr._bases.push(plr._base);
                    }
                });
            }
            this.loaded = true;
        }, 1500);
    }

    showBasePanel() {
        let prompt = Alert.create({
        title: 'Name your base',
        message: "Enter a name for this new base.",
        inputs: [
            {
            name: 'title',
            placeholder: 'Title'
            },
        ],
        buttons: [
            {
                text: 'Conquer',
                handler: data => {
                    let position = {
                        lat: this.map.getCenter().lat(),
                        lng: this.map.getCenter().lng()
                    };

                    console.log('Saved clicked');
                    this.initConquer(this.plr, this.plr._base);
                }
            }
        ]
        });
        this.navCtrl.present(prompt);
    }

    initConquer(plr: Player, base: Base){
        plr._conquerSphere._level = plr._level; 
        let lat = this.map.getCenter().lat();
        let lng = this.map.getCenter().lng();
        let query = 'INSERT INTO bases (`name`, `lat`, `lng`, `level`, `city`, `area`, `owner_id`) VALUES ("'+plr._base.name+'", "'+lat+'", "'+lng+'", '+plr._conquerSphere._level+', "'+this.city+'", "'+this.area+'", '+plr._id+');';
        let insertSub = null;
        console.log(query);

        setTimeout( () => {
            insertSub = this.bService.execute(query)
                .subscribe(data => {
                    console.log(data);
                    let image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
                    let marker = new google.maps.Marker({
                        position: this.map.getCenter(),
                        map: this.map,
                        animation: google.maps.Animation.BOUNCE,
                        icon: image,
                        title: plr._base.name
                    });

                    this.addBaseInfoWindow(marker, plr._base);
                    console.log(plr._bases);
                    //plr._bases.push(plr._base);

                    this.presentToast('Base "'+plr._base.name+'" succesfully conquered!', 3000, 'middle');
                }, (error) => {
                    this.presentToast('There was an error aquiring the base.', 1000, 'middle');
                });
        }, 1500);

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

    addBaseInfoWindow(marker, base: Base){
        let infoWindow = new google.maps.InfoWindow({
            content: '<div class="animated fadeIn"><h3>'+base.name+'</h3><p>'+this.plr._name+'</p><p>'+this.plr._bases+'</p></div>'
        });
        
        google.maps.event.addListener(marker, 'click', () => {
            infoWindow.open(this.map, marker);
            this.plr._base = base;
            marker.setAnimation(google.maps.Animation.BOUNCE);
        });
    }

    addInfoWindow(marker, content){
        let infoWindow = new google.maps.InfoWindow({
            content: '<div class="animated fadeIn">'+content+'</div>'
        });
        
        google.maps.event.addListener(marker, 'click', () => {
            infoWindow.open(this.map, marker);
                    //this.showActionSheet();

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
            let image = "http://downloadicons.net/sites/default/files/map-marker-icons-49653.png";
            placeData.results.forEach(place => {
                let placeLat = place.geometry.location.lat;
                let placeLong = place.geometry.location.lng;
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(placeLat, placeLong),
                    map: this.map,
                    animation: google.maps.Animation.DROP,
                    icon: image,
                    title: 'Hello World!'
                });
                console.log(place.types);
                let distance= this.bService.getDistance(lat, long, placeLat, placeLong, 'miles');
                let content = '<h4 primary>'+place.name+'</h4><p>'+place.vicinity+'</p><p>'+distance+' miles away</p><button class="button button-full">shop</button><button class="button button-full">Quests</button>';         
                this.addInfoWindow(marker, content);

                /*let cityCircle = new google.maps.Circle({
                    strokeColor: '#FF0000',
                    strokeOpacity: 0.8,
                    strokeWeight: 2,
                    fillColor: '#FF0000',
                    fillOpacity: 0.35,
                    map: this.map,
                    center: new google.maps.LatLng(placeLat, placeLong),
                    radius: 20
                });*/
            });
            this.loadBases(this.plr);
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