import {Component, enableProdMode} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';

//enableProdMode()

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

        StatusBar.overlaysWebView(true); // let status var overlay webview

StatusBar.backgroundColorByHexString('#aeaeae'); // set status bar to white
    });
  }
}

ionicBootstrap(MyApp);
