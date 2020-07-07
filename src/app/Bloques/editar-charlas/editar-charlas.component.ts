import { Component, OnInit } from '@angular/core';
import { CharlasService } from 'src/app/servicios/charlas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Charla } from 'src/app/model/Charla';
@Component({
  selector: 'editar-charlas',
  templateUrl: './editar-charlas.component.html',
  styleUrls: ['./editar-charlas.component.css']
})
export class EditarCharlasComponent implements OnInit {

  id: number;
  nombre: string;
  orador: string;
  lugar: string;
  horario: string;
  capacidad: number;

  constructor(private router: Router, private servicio: CharlasService, private _routeParams: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this._routeParams.snapshot.params['id'];
    this.cargarCharlaporId(this.id);
  }
  cargarCharlaporId(id: number) {
    this.servicio.obtenerCharlaPorId(id).subscribe(
      data => {
        this.id = data.id;
        this.nombre = data.nombre;
        this.orador = data.orador;
        this.lugar = data.lugar;
        this.horario = data.horario;
        this.capacidad = data.capacidad;
      },
      error => {
        alert("algo paso" + error);
      }
    );
  }

  editarCharla() {

    let charla: Charla = new Charla();
    charla.id = this.id;
    charla.nombre = this.nombre;
    charla.orador = this.orador;
    charla.lugar = this.lugar;
    charla.horario = this.horario;
    charla.capacidad = this.capacidad;

    this.servicio.editarCharla(charla).subscribe(
      data => {
        alert("Charla editada!");
        this.router.navigateByUrl("privado/admin-charlas");
      },
      error => {
        alert("Ocurrio un error");
        console.log("Error", error);
      }
    );
  }



}
