/// <reference path="../../../typings/globals/google.maps/index.d.ts" />
import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Geolocation} from 'ionic-native';
import {Http, Headers} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/map';
import {AdventureMode} from '../adventure/adventure';
import {CharacterPage} from '../character/character';
import {BackService} from '../../services/BackService';

@Component({
  templateUrl: 'build/pages/home/home.html',
providers: [BackService]
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
    
    constructor(private navCtrl: NavController, private http: Http, private bService: BackService)
    {
        this.loadData();
        
        
        this.initGeo();
        this.watchPos();
        
    }

    initGeo(){
        this.bService.getLatLng().then((pos) => {
            let lat = pos.coords.latitude;
            let long = pos.coords.longitude;
            this.lat = lat;
            this.long = long;
            this.bService.getPosInfo(lat, long).subscribe((data) => {
                this.address = data.results[0].formated_address;
            });
            }, (error) => console.log(error.message));
    }
    
    goToChar(){
        this.navCtrl.push(CharacterPage);
    }
    
    goToAdv(){
        this.navCtrl.push(AdventureMode);
    }

    
    loadData(){
        this.getData('get all users', true).subscribe(data => {
            console.log(data);
        });
    }
    
    watchPos(){
        setInterval(() => {
            this.initGeo();
        }, 1000);
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
    }
}
