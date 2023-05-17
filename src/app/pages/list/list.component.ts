import { Component } from '@angular/core';
import { Carrera } from 'src/app/Domain/carrera';
import { CarreraService } from 'src/app/services/carrera.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  carreraList : Carrera[] = []

  constructor(private carreraService: CarreraService){
    this.carreraList = carreraService.getList()
    console.log('lista de carreras '+this.carreraList)
  }


}
