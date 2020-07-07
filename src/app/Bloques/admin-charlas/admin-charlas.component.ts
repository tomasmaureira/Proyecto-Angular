import { Component, OnInit } from '@angular/core';
import { CharlasService} from 'src/app/servicios/charlas.service';
import { Charla } from 'src/app/model/Charla';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'admin-charlas',
  templateUrl: './admin-charlas.component.html',
  styleUrls: ['./admin-charlas.component.css']
})
export class AdminCharlasComponent implements OnInit {
  id: number;
  nombre: string;
  orador: string;
  lugar: string;
  horario: string;
  capacidad: number;
  charlas: Charla[];
  botonagregarpresionado = false;
  constructor(private router: Router,private servicio: CharlasService) {
  }

  ngOnInit(): void {
    this.cargarCharlas();
  }

  cerraragregarevento1(clickcerrar:boolean){
    if(clickcerrar=== true){
      this.botonagregarpresionado = false;
    }
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
  eliminarCharla(id:number){
    this.servicio.eliminarCharla(id).subscribe(
      data=>{
        alert("eliminado");
        this.cargarCharlas();
      },
      error=>{
        alert("Ocurrio un error");
      }
    );
  }
}
