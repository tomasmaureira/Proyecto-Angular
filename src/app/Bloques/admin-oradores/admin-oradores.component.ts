import { Component, OnInit } from '@angular/core';
import { OradoresService} from 'src/app/servicios/oradores.service';
import { Orador } from 'src/app/model/Orador';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'admin-oradores',
  templateUrl: './admin-oradores.component.html',
  styleUrls: ['./admin-oradores.component.css']
})
export class AdminOradoresComponent implements OnInit {
  oradores:Orador[];
  botonagregarpresionado = false;
  constructor(private servicio: OradoresService,private router: Router) { }

  ngOnInit(): void {
    this.cargarOradores();
  }
  mostraragregar(){
    this.botonagregarpresionado = true;
  }
  cerraragregarevento1(clickcerrar:boolean){
    if(clickcerrar=== true){
      this.botonagregarpresionado = false;
    }
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

  eliminarOrador(id:number){
    this.servicio.eliminarOrador(id).subscribe(
      data=>{
        alert("eliminado");
        this.cargarOradores();
      },
      error=>{
        alert("Ocurrio un error");
      }
    );
  }

}
