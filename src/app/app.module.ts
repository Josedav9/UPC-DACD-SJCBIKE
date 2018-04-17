import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { ENV } from '../environments/environment';
//Pages
import { MapaPage } from '../pages/mapa/mapa'
import { EstadisticasPage } from '../pages/estadisticas/estadisticas'
import { HomePage } from '../pages/home/home';
import { RegistroPage } from '../pages/registro/registro';
import { AcercadePage } from '../pages/acercade/acercade';
import { TabsPage } from '../pages/tabs/tabs';

//Google mapas
import { AgmCoreModule } from '@agm/core';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FirebaseProvider } from '../providers/firebase/firebase';

@NgModule({
  declarations: [
    MyApp,
    MapaPage,
    EstadisticasPage,
    HomePage,
    RegistroPage,
    AcercadePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBLNUZ79p5RUKzuKDAI_QUU2CjZb9H7jGw'
    }),
    AngularFireModule.initializeApp(ENV.firebase), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MapaPage,
    EstadisticasPage,
    HomePage,
    RegistroPage,
    AcercadePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider
  ]
})
export class AppModule {}
