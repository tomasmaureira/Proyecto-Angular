import { Component, OnInit } from '@angular/core';
import { OradoresService } from 'src/app/servicios/oradores.service';
import { Router } from '@angular/router';
import { Orador } from 'src/app/model/Orador';


@Component({
  selector: 'nuevo-orador',
  templateUrl: './nuevo-orador.component.html',
  styleUrls: ['./nuevo-orador.component.css']
})
export class NuevoOradorComponent implements OnInit {

  name: string;
  lastname: string;
  especialidad: string;
  charla: string;
  email: string
  constructor(private router: Router, private services: OradoresService) { }

  ngOnInit(): void {
  }
  crearOrador() {
    let orador: Orador = new Orador();
    orador.name = this.name;
    orador.lastname = this.lastname;
    orador.especialidad = this.especialidad;
    orador.charla = this.charla;
    orador.email = this.email;
    if (this.datoscompletos(true)) {
      if (this.oradorExistente(false))
        this.services.crearOrador(orador).subscribe(
          data => {
            alert("Orador agregado!");
            this.router.navigateByUrl("privado/admin-oradores");
          },
          error => {
            alert("Ocurrio un error");
            console.log("Error", error);
          }
        );
    }
  }
  datoscompletos(ok: boolean) {
    let orador: Orador = new Orador();
    orador.name = this.name;
    orador.lastname = this.lastname;
    orador.especialidad = this.especialidad;
    orador.charla = this.charla;
    orador.email = this.email;
    ok = false;
    if (orador.name !== undefined && orador.name !== "") {
      if (orador.lastname !== undefined && orador.lastname !== "") {
        if (orador.especialidad !== undefined && orador.especialidad !== "") {
          if (orador.charla !== undefined && orador.charla !== "") {
            if (orador.email !== undefined && orador.email !== "") {
              ok = true;
            }
            else {
              alert("email faltante");
            }
          }
          else {
            alert("charla faltante");
          }
        }
        else {
          alert("especialidad faltante");
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

  oradorExistente(existe: boolean) {
    let orador: Orador = new Orador();
    orador.name = this.name;
    this.services.obtenerOradorNombre(orador.name).subscribe(
      data => {
        if (data[0] === orador.name) {
          existe = true;
          alert(data[0].name);
          alert("el usuario existe");
        }
        else {
          alert("aqui llega");
          existe = false;

        }
      }
    )
    return existe;
  }

}
