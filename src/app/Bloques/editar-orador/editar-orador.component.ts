import { Component, OnInit } from '@angular/core';
import { OradoresService } from 'src/app/servicios/oradores.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Orador } from 'src/app/model/Orador';

@Component({
  selector: 'editar-orador',
  templateUrl: './editar-orador.component.html',
  styleUrls: ['./editar-orador.component.css']
})
export class EditarOradorComponent implements OnInit {
  id: number;
  name: string;
  lastname: string;
  especialidad: string;
  charla: string;
  email: string;

  constructor(private router: Router, private servicio: OradoresService, private _routeParams: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this._routeParams.snapshot.params['id'];
    this.cargarOradorporId(this.id);
  }

  cargarOradorporId(id: number) {
    this.servicio.obtenerOradorPorId(id).subscribe(
      data => {
        this.id = data.id;
        this.name = data.name;
        this.lastname = data.lastname;
        this.especialidad = data.especialidad;
        this.charla = data.charla;
        this.email = data.email;
      },
      error => {
        alert("algo paso" + error);
      }
    );
  }
  editarOrador() {

    let orador: Orador = new Orador();
    orador.id = this.id;
    orador.name = this.name;
    orador.lastname = this.lastname;
    orador.especialidad = this.especialidad;
    orador.charla = this.charla;
    orador.email = this.email;

    this.servicio.editarOrador(orador).subscribe(
      data => {
        alert("Orador editado!");
        this.router.navigateByUrl("privado/admin-oradores");
      },
      error => {
        alert("Ocurrio un error");
        console.log("Error", error);
      }
    );
  }

}
