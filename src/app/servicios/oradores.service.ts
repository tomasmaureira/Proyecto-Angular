import { Injectable } from '@angular/core';
import { Orador } from '../model/Orador';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OradoresService {

  constructor(private http: HttpClient) { }

  obtenerTodosLosOradores() {
    return this.http.get<Orador[]>("https://conferencias-json-kbefbqorma-ue.a.run.app/oradores");
  }
  obtenerOradorPorId(id: number) {
    return this.http.get<Orador>("https://conferencias-json-kbefbqorma-ue.a.run.app/oradores/" + id);
  }
  crearOrador(user: Orador) {
    return this.http.post("https://conferencias-json-kbefbqorma-ue.a.run.app/oradores", user);
  }
  editarOrador(user: Orador) {
    return this.http.put("https://conferencias-json-kbefbqorma-ue.a.run.app/oradores/" + user.id, user);
  }
  eliminarOrador(id: number){
    return this.http.delete("https://conferencias-json-kbefbqorma-ue.a.run.app/oradores/" + id);
  }
  obtenerOradorNombre(nombre:string) {
    return this.http.get<Orador>("https://conferencias-json-kbefbqorma-ue.a.run.app/oradores?name="+nombre);
  }
}
