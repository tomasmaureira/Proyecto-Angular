import { Injectable } from '@angular/core';
import { User } from '../model/User';;
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  obtenerTodosLosUsuarios() {
    return this.http.get<User[]>("http://localhost:3000/usuarios");
  }

  obtenerUsuarioPorId(id: number) {
    return this.http.get<User>("http://localhost:3000/usuarios/" + id);
  }
  obtenerTodosLosAdmins() {
    return this.http.get<User[]>("http://localhost:3000/usuarios?tipo=ADMINISTRADOR");
  }
  obtenerTodosLosNormales() {
    return this.http.get<User[]>("http://localhost:3000/usuarios?tipo=NORMAL");
  }
  obtenerUsuariosPorTipo(tipo: string) {
    return this.http.get<User[]>("http://localhost:3000/usuarios?tipo=" + tipo);
  }

  crearUsuario(user: User) {
    return this.http.post("http://localhost:3000/usuarios", user);
  }

  editarUsuario(user: User) {
    return this.http.put("http://localhost:3000/usuarios/" + user.id, user);
  }
  eliminarUsuario(id: number){
    return this.http.delete("http://localhost:3000/usuarios/" + id);
  }

  login(username: string, password: string) {
    return this.http.get<User[]>("http://localhost:3000/usuarios?username=" + username + "&password=" + password);
  }

}
