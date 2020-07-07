import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/servicios/user.service';
import { Router } from '@angular/router';
import {User} from 'src/app/model/User';

@Component({
  selector: 'nuevo-participante',
  templateUrl: './nuevo-participante.component.html',
  styleUrls: ['./nuevo-participante.component.css']
})
export class NuevoParticipanteComponent implements OnInit {
    nombre:string;
    apellido:string;
    username: string;
    password: string;
    charla:string;
    tipo: string;
    email:string;
    telefono:number;

  constructor(private router: Router, private services:UserService) { }

  ngOnInit(): void {
  }
  crearUsuario(){
    console.log( this.nombre );
    console.log( this.apellido );
    console.log( this.username );
    console.log( this.password );
    console.log( this.charla );
    console.log( this.tipo );
    console.log( this.email );
    console.log( this.telefono );

    let usuario:User = new User();
    usuario.nombre = this.nombre;
    usuario.apellido = this.apellido;
    usuario.username = this.username;
    usuario.password = this.password;
    usuario.charla = this.charla;
    usuario.tipo = this.tipo="NORMAL";
    usuario.email = this.email;
    usuario.telefono = this.telefono;
    if(this.datoscompletos(true))
    this.services.crearUsuario( usuario ).subscribe( 
      data =>{
        alert( "Usuario agregado!" );
        this.router.navigateByUrl("privado/admin-participantes");
      },
      error =>{
        alert( "Ocurrio un error" );
        console.log("Error", error);
      }
    );
  }

  datoscompletos(ok: boolean) {
    let usuario: User = new User();
    usuario.nombre = this.nombre;
    usuario.apellido = this.apellido;
    usuario.username = this.username;
    usuario.password = this.password;
    usuario.charla = this.charla;
    usuario.tipo = this.tipo;
    usuario.email=this.email;
    usuario.telefono=this.telefono;
    ok = false;
    if (usuario.nombre !== undefined && usuario.nombre !== "") {
      if (usuario.apellido !== undefined && usuario.apellido !== "") {
        if (usuario.username !== undefined && usuario.username !== "") {
          if (usuario.password !== undefined && usuario.password !== "") {
            if (usuario.charla !== undefined && usuario.charla !== "") {
              if(usuario.tipo !== undefined && usuario.tipo !==""){
                if(usuario.email !==undefined && usuario.email !== ""){
                  if(usuario.telefono !== undefined && usuario.telefono !== null){
                    ok = true;
                  }else{
                    alert("ingrese telefono");
                  }
                }else{
                    alert("ingrese email");
                }
              }
              else{
                  alert("ingrese tipo");
              }
            }
            else {
              alert("charla faltante");
            }
          }
          else {
            alert("password faltante");
          }
        }
        else {
          alert("username faltante");
        }
      }
      else {
        alert("apellido faltante");
      }
    }
    else {
      alert("nombre faltante");
    }
    return ok;
  }
}
