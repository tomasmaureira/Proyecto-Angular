import { Component, OnInit } from '@angular/core';
import {CharlasService} from 'src/app/servicios/charlas.service';
import { Charla } from 'src/app/model/Charla';


@Component({
  selector: 'calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

  charlas: Charla[];
  constructor(private servicio: CharlasService) { }

  ngOnInit(): void {
    this.cargarCharlas();
  }
  cargarCharlas(){
    this.servicio.obtenerTodasLasCharlas().subscribe(
      data =>{
        this.charlas = data;
      }, 
      error =>{ 
        alert( "Ocurrio un error " );
        console.log( "ERROR", error );
       }
    );
  }

}
