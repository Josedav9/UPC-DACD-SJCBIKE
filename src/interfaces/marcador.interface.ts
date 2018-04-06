import { BicicletasRef } from './bicicletaref.interface';
/**
*Forma en la que se debe modelar un marcador
**/
export interface Marcador{
  lat:number;
  lng:number;
  nombre:string;
  bicicletas:BicicletasRef[];
  id?:string;
}

export interface Parqueadero{
  id?:string;
  caracteristicas:{
    lat:number;
    lng:number;
    nombre:string;
    bicicletas:BicicletasRef[];
  }
  origenes?:{

  }
}
