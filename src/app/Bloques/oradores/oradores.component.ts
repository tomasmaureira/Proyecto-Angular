import { Component, OnInit } from '@angular/core';
import { OradoresService} from 'src/app/servicios/oradores.service';
import { Orador } from 'src/app/model/Orador';

@Component({
  selector: 'oradores',
  templateUrl: './oradores.component.html',
  styleUrls: ['./oradores.component.css']
})
export class OradoresComponent implements OnInit {
  oradores:Orador[];

  constructor(private servicio: OradoresService) { }

  ngOnInit(): void {
    this.cargarOradores();
  }
  cargarOradores(){
    this.servicio.obtenerTodosLosOradores().subscribe(
      data =>{
        this.oradores = data;
      }, 
      error =>{ 
        alert( "Ocurrio un error " );
        console.log( "ERROR", error );
       }
    );
  }

}
