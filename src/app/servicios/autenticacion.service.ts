import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor() { }

  public estaAutenticado(): boolean {

    const ad = JSON.parse(localStorage.getItem("user"));
    if (ad.tipo == "ADMINISTRADOR") {
      return true
    }
    else
      return false;
  }
}
