import { BicicletasRef } from './bicicletaref.interface';
import { Marcador } from './marcador.interface';
/**
*Forma en la que se debe modelar un usuario
**/
export interface Usuario{
  id?:string;
  nombre:string;
  apellido:string;
  photoURL:string;
  fNacimiento?:Date;
  cedula?:string;
  prestada?: BicicletasRef;
  lugarTrabajo?:string;
  viajesTrabajo?:number;

}
