import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase'
import { RegistroPage } from '../registro/registro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  email:string;
  passwd:string;
  registro = RegistroPage;

  constructor(public navCtrl: NavController, public fp:FirebaseProvider) {

  }

}
