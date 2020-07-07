import { Component, OnInit } from '@angular/core';
import { CharlasService } from 'src/app/servicios/charlas.service';
import { Router } from '@angular/router';
import { Charla } from 'src/app/model/Charla';

@Component({
  selector: 'nueva-charla',
  templateUrl: './nueva-charla.component.html',
  styleUrls: ['./nueva-charla.component.css']
})
export class NuevaCharlaComponent implements OnInit {
  n:string;
  nombre: string;
  orador: string;
  lugar: string;
  horario: string;
  capacidad: number

  constructor(private router: Router, private services: CharlasService) { }

  ngOnInit(): void {
  }
  crearCharla() {
    console.log(this.nombre);
    console.log(this.orador);
    console.log(this.lugar);
    console.log(this.horario);
    console.log(this.capacidad);

    let charla: Charla = new Charla();
    charla.nombre = this.nombre;
    charla.orador = this.orador;
    charla.lugar = this.lugar;
    charla.horario = this.horario;
    charla.capacidad = this.capacidad;
    if(this.datoscompletos(true)){
    this.services.crearCharla(charla).subscribe(
      data => {
        alert("Charla agregada!");
        this.router.navigateByUrl("privado/admin-charlas");
      },
      error => {
        alert("Ocurrio un error");
        console.log("Error", error);
      }
    );
    }
  }
  compararNombres(nombre:string){
    this.services.obtenerNombreCharla(nombre).subscribe(
      data=>{
        return this.nombre;
          console.log(data);
      },
      error =>{
        alert("error");
      }
    );
  }
  datoscompletos(ok: boolean) {
    let charla: Charla = new Charla();
    charla.nombre = this.nombre;
    charla.orador = this.orador;
    charla.lugar = this.lugar;
    charla.horario = this.horario;
    charla.capacidad = this.capacidad;
    ok = false;
    if (charla.nombre !== undefined && charla.nombre !=="") {
      if (charla.orador !== undefined && charla.orador !=="") {
        if (charla.lugar !== undefined && charla.lugar !=="") {
          if (charla.horario !== undefined && charla.horario !=="") {
            if (charla.capacidad !== undefined && charla.capacidad !== null ) {
              ok = true;
            }
            else {
              alert("capacidad faltante");
            }
          }
          else {
            alert("horario faltante");
          }
        }
        else {
          alert("lugar faltante");
        }
      }
      else {
        alert("orador faltante");
      }
    }
    else {
      alert("nombre faltante");
    }
    return ok;
  }

}

