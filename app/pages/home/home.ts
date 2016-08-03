/// <reference path="../../../typings/globals/google.maps/index.d.ts" />
import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Geolocation} from 'ionic-native';
import {Http} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/map';
import {AdventureMode} from '../adventure/adventure';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
    loC: any;
    loCError: any;
    address: string;
    users:any;
mess: string;
incre: any;
lat: any;
long: any;
    constructor(private navCtrl: NavController, private http: Http)
    {
        this.initGeo();
        setTimeout(function(){
            setInterval(function(){
                this.initGeo();
            }, 1000);
        },4000);
    }

    initGeo()
    {
    
        let options = {maximumAge: 0, timeout: 5000, enableHighAccuracy: true};
        Geolocation.getCurrentPosition(options).then(pos => {
            let lat = pos.coords.latitude;
            let long = pos.coords.longitude;
            this.lat = lat
            this.long = long;

            this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng='+lat+','+long+'', null)
                .map((res) => res.json())
                .subscribe(data => {
                    console.log(data);
                    this.address = data.results[0].formatted_address;
                });
        }, (PositionError) => { console.log(PositionError.message) });
    }
    
    refreshLocation(){
        let options = {maximumAge: 0, timeout: 6000, enableHighAccuracy: true};

        let watchLocation = Geolocation.watchPosition().subscribe(pos => {
            let lat = pos.coords.latitude;
            let long = pos.coords.longitude;
            this.lat = lat
            this.long = long;

            this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng='+lat+','+long+'', null)
                .map((res) => res.json())
                .subscribe(data => {
                    console.log(data);
                    this.address = data.results[0].formatted_address;
                });
        }, (error) => {console.log(error.message)});
    }
    
    goToPage(){
        this.navCtrl.push(AdventureMode);
    }

    loadData(){
       let data = JSON.stringify({
            db_host: 'flypapermagazine.com',
            db_name: 'flypaper_scdb',
            db_username: 'flypaper_scmgr',
            db_password: 'maxwel123',
            query: 'get all users',
            all: true
        });
        this.http.post('http://dsykes.esy.es/php/adb/adb.php', data)
            .map(res => res.json())
            .subscribe(data => {
                this.users = data;
            }, (error) => {
        });
    }
}
