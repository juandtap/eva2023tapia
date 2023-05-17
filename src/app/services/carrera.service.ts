import { Injectable } from '@angular/core';
import { Carrera } from '../Domain/carrera';

@Injectable({
  providedIn: 'root'
})
export class CarreraService {

  listcarreras : Carrera[] = [];
  
  save(carrera: Carrera){
    this.listcarreras.push(carrera)
  }

  getList(){
    return this.listcarreras
  }


  constructor() { }
}
