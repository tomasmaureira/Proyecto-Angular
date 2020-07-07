import { Injectable } from '@angular/core';
import { Charla} from '../model/Charla';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharlasService {

  constructor( private http: HttpClient) { }

  obtenerTodasLasCharlas() {
    return this.http.get<Charla[]>("http://localhost:3000/charlas");
  }
  obtenerCharlaPorId(id: number) {
    return this.http.get<Charla>("http://localhost:3000/charlas/" + id);
  }
  crearCharla(user: Charla) {
    return this.http.post("http://localhost:3000/charlas", user);
  }
  editarCharla(user: Charla) {
    return this.http.put("http://localhost:3000/charlas/" + user.id, user);
  }
  eliminarCharla(id: number){
    return this.http.delete("http://localhost:3000/charlas/" + id);
  }
  obtenerNombreCharla(nombre:string){
    return this.http.get<Charla>("http://localhost:3000/charlas?nombre=" + nombre);
  }
}
