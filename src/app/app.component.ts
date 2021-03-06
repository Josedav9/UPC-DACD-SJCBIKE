import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { AcercadePage } from '../pages/acercade/acercade';
import { VersionPage } from '../pages/version/version';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = TabsPage;
  acercaDe = AcercadePage;
  version = VersionPage;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(pag:Number){
    if(pag == 1){
      this.nav.setRoot( this.acercaDe );
    }
    else if(pag == 2){
      this.nav.setRoot( this.version );
    }else if(pag == 3){
      this.nav.setRoot( this.rootPage );
    }

  }

}
