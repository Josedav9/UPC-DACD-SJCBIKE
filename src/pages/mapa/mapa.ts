import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase'


@Component({
  selector: 'page-about',
  templateUrl: 'mapa.html'
})
export class MapaPage {

  constructor(public navCtrl: NavController, public _fp:FirebaseProvider) {

  }

}
