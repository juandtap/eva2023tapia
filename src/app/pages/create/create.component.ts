import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Carrera } from 'src/app/Domain/carrera';
import { CarreraService } from 'src/app/services/carrera.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

    carrera: Carrera = new Carrera

    constructor(private carreraService : CarreraService, private router:  Router ){

    }

    save(){
      console.log("carrera guardada "+this.carrera.nombre)
      this.carreraService.save(this.carrera)
      this.carrera = new Carrera
      this.router.navigate(['pages/list'])
    }
}
