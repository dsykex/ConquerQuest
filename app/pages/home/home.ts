/// <reference path="../../../typings/globals/google.maps/index.d.ts" />
import {Component} from '@angular/core';
import {NavController, Loading} from 'ionic-angular';
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
    address: any;
    users:any;
    mess: string;
    incre: any;
    lat: any;
    long: any;
    
    constructor(private navCtrl: NavController, private http: Http, private bService: BackService)
    {
        this.loadData();
        
        
        //this.initGeo();
        //this.watchPos();
        this.presentLoading();
    }
    
    presentLoading() {
      let loading = Loading.create({
        content: "Loading Epicness!",
        duration: 500
      });
      this.navCtrl.present(loading);
    }

    /*initGeo(){
        this.bService.getLatLng().then((pos) => {
            let lat = pos.coords.latitude;
            let long = pos.coords.longitude;
            this.lat = lat;
            this.long = long;
            this.bService.getPosInfo().subscribe((data) => {
                this.address = data.results[0].formatted_address;
            });
        }, (error) => console.log(error.message));
    }*/
    
    goToChar(){
        this.navCtrl.push(CharacterPage);
    }
    
    goToAdv(){
        this.navCtrl.push(AdventureMode);
    }

    
    loadData(){
        this.bService.getData('get all users', true).subscribe(data => {
            console.log(data);
        });
    }
    
    /*watchPos(){
        setTimeout(() => {
            setInterval(() => {
                //this.initGeo();
            }, 2000);
        }, 4000);
    }*/
    
}
