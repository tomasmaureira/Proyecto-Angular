import { Component, OnInit } from '@angular/core';
import { UserService} from '../../servicios/user.service';
import { Router } from '@angular/router';
import { User } from '../../model/User';

@Component({
  selector: 'registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

    nombre:string;
    apellido:string;
    username: string;
    password: string;
    tipo: string;
    email:string;
    telefono:number;

  constructor( private router: Router, private services:UserService) { }

  ngOnInit(): void {
  }
  crearUsuario(){
    console.log( this.nombre );
    console.log( this.apellido );
    console.log( this.username );
    console.log( this.password );
    console.log( this.tipo );

    let usuario:User = new User();
    usuario.nombre = this.nombre;
    usuario.apellido = this.apellido;
    usuario.username = this.username;
    usuario.password = this.password;
    usuario.tipo = "NORMAL";
    usuario.email=this.email;
    this.telefono=this.telefono;
    
    this.services.crearUsuario( usuario ).subscribe( 
      data =>{
        alert( "Usuario agregado!" );
        this.router.navigateByUrl("login");
      },
      error =>{
        alert( "Ocurrio un error" );
        console.log("Error", error);
      }
    );
  }
}
