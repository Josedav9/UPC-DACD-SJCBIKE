import { Component } from '@angular/core';
import { MapaPage } from '../mapa/mapa'
import { EstadisticasPage } from '../estadisticas/estadisticas'
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MapaPage;
  tab3Root = EstadisticasPage;

  constructor() {

  }
}
