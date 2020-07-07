import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/servicios/user.service';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  users:User[];
  usersA:User[];
  usersN:User[];

  constructor( private servicio:UserService) { }

  ngOnInit(): void {
  }
  cargarUsuarios(){
    this.servicio.obtenerTodosLosUsuarios().subscribe(
      data =>{
        this.users = data;
      }, 
      error =>{ 
        alert( "Ocurrio un error " );
        console.log( "ERROR", error );
       }
    );
  }
  cargarAdmins(){
    this.servicio.obtenerUsuariosPorTipo("ADMINISTRADOR").subscribe(
      data =>{
        this.usersA = data;
        console.log("Respuesta del servidor");
      }, 
      error =>{ 
        alert( "Ocurrio un error " );
        console.log( "ERROR", error );
       }
    );
    
    console.log("Respuesta");
  }
  cargarNormales(){
    this.servicio.obtenerUsuariosPorTipo("NORMALES").subscribe(
      data =>{
        this.usersN = data;
      }, 
      error =>{ 
        alert( "Ocurrio un error " );
        console.log( "ERROR", error );
       }
    );
  }

}
