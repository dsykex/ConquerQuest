import {Component} from '@angular/core';
import {Http, HTTP_PROVIDERS} from '@angular/http';
import {Injectable} from '@angular/core';
import {Geolocation} from 'ionic-native';

@Component({
providers: [Http, HTTP_PROVIDERS]
})
export class BackService{
    lat: any;
    long:any;
    locationError: string;

    
constructor(private http: Http){ }
    
    getLatLng(){
        let options = {maximumAge: 0, timeout: 5000, enableHighAccuracy: true};
        return Geolocation.getCurrentPosition(options);
    }
    
    getPosInfo(){
        return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=41.111252,-81.514024',null)
            .map(res => res.json());
    }
    
    getData(query, all){

    let data = JSON.stringify({
                db_host: 'flypapermagazine.com',
                db_username: 'flypaper_scmgr',
                db_name: 'flypaper_scdb',
                db_password: 'maxwel123',
                query: query,
                all: all
        });
        return this.http.post('http://dsykes.esy.es/php/adb/adb.php', data).map(res => res.json());
    };

    plrWatcher(){
        setInterval( () => {
            console.log('Set');
        })
    }
}