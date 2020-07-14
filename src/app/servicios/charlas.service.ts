import { Injectable } from '@angular/core';
import { Charla} from '../model/Charla';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharlasService {

  constructor( private http: HttpClient) { }

  obtenerTodasLasCharlas() {
    return this.http.get<Charla[]>("https://conferencias-json-kbefbqorma-ue.a.run.app/charlas");
  }
  obtenerCharlaPorId(id: number) {
    return this.http.get<Charla>("https://conferencias-json-kbefbqorma-ue.a.run.app/charlas/" + id);
  }
  crearCharla(user: Charla) {
    return this.http.post("https://conferencias-json-kbefbqorma-ue.a.run.app/charlas", user);
  }
  editarCharla(user: Charla) {
    return this.http.put("https://conferencias-json-kbefbqorma-ue.a.run.app/charlas/" + user.id, user);
  }
  eliminarCharla(id: number){
    return this.http.delete("https://conferencias-json-kbefbqorma-ue.a.run.app/charlas/" + id);
  }
  obtenerNombreCharla(nombre:string){
    return this.http.get<Charla>("https://conferencias-json-kbefbqorma-ue.a.run.app/charlas?nombre=" + nombre);
  }
}
