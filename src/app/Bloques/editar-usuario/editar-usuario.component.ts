import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/servicios/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/User';

@Component({
  selector: 'editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {
  id: number;
  name: string;
  lastname: string;
  username: string;
  password: string;
  charla: string;
  tipo: string;
  email: string;
  telefono: number;

  constructor(private router: Router, private servicio: UserService, private _routeParams: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this._routeParams.snapshot.params['id'];
    this.cargarUsuarioporId(this.id);
  }

  cargarUsuarioporId(id: number) {
    this.servicio.obtenerUsuarioPorId(id).subscribe(
      data => {
        this.id = data.id;
        this.name = data.nombre;
        this.lastname = data.apellido;
        this.username = data.username;
        this.password = data.password;
        this.charla = data.charla;
        this.tipo = data.tipo;
        this.email = data.email;
        this.telefono =data.telefono;
      },
      error => {
        alert("algo paso" + error);
      }
    );
  }
  editarUsuario() {

    let usuario: User = new User();
    usuario.id = this.id;
    usuario.nombre = this.name;
    usuario.apellido = this.lastname;
    usuario.username = this.username;
    usuario.password=this.password;
    usuario.charla = this.charla;
    usuario.tipo=this.tipo;
    usuario.email = this.email;
    usuario.telefono=this.telefono;

    this.servicio.editarUsuario(usuario).subscribe(
      data => {
        alert("Usuario editado!");
        this.router.navigateByUrl("privado/admin-participantes");
      },
      error => {
        alert("Ocurrio un error");
        console.log("Error", error);
      }
    );
  }
}
