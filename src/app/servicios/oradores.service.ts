import { Injectable } from '@angular/core';
import { Orador } from '../model/Orador';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OradoresService {

  constructor(private http: HttpClient) { }

  obtenerTodosLosOradores() {
    return this.http.get<Orador[]>("http://localhost:3000/oradores");
  }
  obtenerOradorPorId(id: number) {
    return this.http.get<Orador>("http://localhost:3000/oradores/" + id);
  }
  crearOrador(user: Orador) {
    return this.http.post("http://localhost:3000/oradores", user);
  }
  editarOrador(user: Orador) {
    return this.http.put("http://localhost:3000/oradores/" + user.id, user);
  }
  eliminarOrador(id: number){
    return this.http.delete("http://localhost:3000/oradores/" + id);
  }
  obtenerOradorNombre(nombre:string) {
    return this.http.get<Orador>("http://localhost:3000/oradores?name="+nombre);
  }
}
