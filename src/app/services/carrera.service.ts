import { Injectable } from '@angular/core';
import { Carrera } from '../Domain/carrera';

@Injectable({
  providedIn: 'root'
})
export class CarreraService {

  listcarreras : Carrera[] = [];
  


  constructor() { }
}
