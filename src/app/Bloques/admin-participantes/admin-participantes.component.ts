import { Component, OnInit } from '@angular/core';
import {UserService} from '../../servicios/user.service';
import {User} from '../../model/User';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'admin-participantes',
  templateUrl: './admin-participantes.component.html',
  styleUrls: ['./admin-participantes.component.css']
})
export class AdminParticipantesComponent implements OnInit {
  usuarios:User[];

  constructor(private servicio: UserService,private router: Router) { }

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios(){
    this.servicio.obtenerTodosLosNormales().subscribe(
      data =>{
        this.usuarios = data;
      }, 
      error =>{ 
        alert( "Ocurrio un error " );
        console.log( "ERROR", error );
       }
    );
  }
  eliminarUsuario(id:number){
    this.servicio.eliminarUsuario(id).subscribe(
      data=>{
        alert("eliminado");
        this.cargarUsuarios();
      },
      error=>{
        alert("Ocurrio un error");
      }
    );
  }

}
