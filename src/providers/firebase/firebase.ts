import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Marcador, Parqueadero } from '../../interfaces/marcador.interface';
import { Usuario } from '../../interfaces/usuario.interface';
import { BicicletasRef } from '../../interfaces/bicicletaref.interface';

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {

  private parqueaderosCollection:AngularFirestoreCollection<Parqueadero>;
  parqueaderos: Observable<Parqueadero[]>;
  parqueaderosSnap: Observable<Parqueadero[]>
  private usuarioCollection:AngularFirestoreCollection<Usuario>;
  private usuarioDoc: AngularFirestoreDocument<Usuario>;
  private bicicletasCollection:AngularFirestoreCollection<BicicletasRef>;

  usuario:Usuario = {
    nombre :"",
    apellido :"",
    photoURL :"sin"
  };

  usuarioD: Observable<Usuario>;

  constructor(private db:AngularFirestore, public afAuth: AngularFireAuth) {

    this.usuarioCollection = this.db.collection('usuarios');
    this.bicicletasCollection = this.db.collection('bicicletas');
    this.parqueaderosCollection = this.db.collection('parqueadero');
    this.parqueaderos = this.parqueaderosCollection.valueChanges();
    this.parqueaderosSnap = this.parqueaderosCollection.snapshotChanges()
                .map(actions => {
                  return actions.map(a => {
                    const data = a.payload.doc.data() as Parqueadero;
                    const id = a.payload.doc.id;
                    return { id, ...data};
                  });
                });
  }

  /**
  * Metodo encargado de guardar cambios realizados a los marcadores
  **/
  guardarMarcadores( parqueaderoMar:Parqueadero ){
    this.parqueaderosCollection.doc( parqueaderoMar.id ).update({ "caracteristicas.nombre" : parqueaderoMar.caracteristicas.nombre,
                    "caracteristicas.bicicletas" : parqueaderoMar.caracteristicas.bicicletas })
  }

  crearUsuario(email:string, password:string){
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
                    .then(resp =>{
                      //this.cargando = false;
                      this.usuarioCollection.doc( resp.uid ).set( this.usuario );
                      return true;
                    }).catch(err => {
                      //this.cargando = false;
                      console.log(err)});

  }

  login( email:string, password:string ) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
                    .then(resp => {
                      //this.cargando = false;
                      this.usuario.id = resp.uid;
                      this.usuarioDoc = this.db.doc<Usuario>(`usuarios/${resp.uid}`);
                      this.usuarioD = this.usuarioDoc.valueChanges();
                      //localStorage.setItem('usuario', JSON.stringify(this.usuario));
                      console.log("se hizo");
                      return resp;
                    }).catch(err => {
                      //this.cargando = false;
                      console.log(err)});
  }

  logout(){
    localStorage.removeItem('usuario');
    this.usuario = {
      id:null,
      nombre :"",
      apellido :"",
      photoURL :"sin"
    };
    this.usuarioD = null;
    this.afAuth.auth.signOut();
  }

  guardarDatos(usuario:Usuario){
    this.usuarioCollection.doc( this.usuario.id ).update( usuario );
  }

  tomarPrestadaBicicleta( ref:any ){
    this.usuarioCollection.doc( this.usuario.id ).update( { prestada: ref } )
    this.bicicletasCollection.doc( ref.id ).update( { prestada: true } )
  }

  regresarBicicleta( ref:any, estacionLlegada ){
    this.usuarioCollection.doc( this.usuario.id ).update( { prestada:null } )
    this.bicicletasCollection.doc( ref.id ).update( { prestada: false, origen:estacionLlegada.caracteristicas.nombre } )

  }

  sumarViaje( viajes:number ){
    this.usuarioCollection.doc( this.usuario.id ).update( { viajesTrabajo:viajes } )
  }

}
