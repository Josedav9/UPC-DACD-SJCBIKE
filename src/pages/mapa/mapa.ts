import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase'


@Component({
  selector: 'page-about',
  templateUrl: 'mapa.html'
})
export class MapaPage {

  lat: number = 4.6255594;
  lng: number = -74.1387344;
  zoom:number = 12;

  constructor(public navCtrl: NavController, public _fp:FirebaseProvider) {

  }

}
