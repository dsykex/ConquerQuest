import {Component, enableProdMode} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {HTTP_PROVIDERS} from '@angular/http';
import {BackService} from './services/BackService';
//enableProdMode()

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  providers: [BackService]
})
export class MyApp {
  rootPage: any = HomePage;
  dsykesVar: any;

  constructor(platform: Platform, bService: BackService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

        StatusBar.overlaysWebView(true); // let status var overlay webview
        StatusBar.backgroundColorByHexString('#aeaeae'); // set status bar to white
        
    });
  }
}

ionicBootstrap(MyApp, [HTTP_PROVIDERS]);
