import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Marcador } from '../../interfaces/marcador.interface';

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {

  private parqueaderosCollection:AngularFirestoreCollection<Marcador>;
  parqueaderos: Observable<Marcador[]>;

  constructor(private db:AngularFirestore) {
    this.parqueaderosCollection = this.db.collection('parqueadero');
    this.parqueaderos = this.parqueaderosCollection.valueChanges();
  }

}
