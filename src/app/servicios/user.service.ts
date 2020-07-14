import { Injectable } from '@angular/core';
import { User } from '../model/User';;
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  obtenerTodosLosUsuarios() {
    return this.http.get<User[]>("https://conferencias-json-kbefbqorma-ue.a.run.app/usuarios");
  }

  obtenerUsuarioPorId(id: number) {
    return this.http.get<User>("https://conferencias-json-kbefbqorma-ue.a.run.app/usuarios/" + id);
  }
  obtenerTodosLosAdmins() {
    return this.http.get<User[]>("https://conferencias-json-kbefbqorma-ue.a.run.app/usuarios?tipo=ADMINISTRADOR");
  }
  obtenerTodosLosNormales() {
    return this.http.get<User[]>("https://conferencias-json-kbefbqorma-ue.a.run.app/usuarios?tipo=NORMAL");
  }
  obtenerUsuariosPorTipo(tipo: string) {
    return this.http.get<User[]>("https://conferencias-json-kbefbqorma-ue.a.run.app/usuarios?tipo=" + tipo);
  }

  crearUsuario(user: User) {
    return this.http.post("https://conferencias-json-kbefbqorma-ue.a.run.app/usuarios", user);
  }

  editarUsuario(user: User) {
    return this.http.put("https://conferencias-json-kbefbqorma-ue.a.run.app/" + user.id, user);
  }
  eliminarUsuario(id: number){
    return this.http.delete("https://conferencias-json-kbefbqorma-ue.a.run.app/" + id);
  }

  login(username: string, password: string) {
    return this.http.get<User[]>("https://conferencias-json-kbefbqorma-ue.a.run.app/usuarios?username=" + username + "&password=" + password);
  }

}
