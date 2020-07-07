import { Component, OnInit } from '@angular/core';
import { User } from '../../model/User';
import { Router } from '@angular/router';

@Component({
  selector: 'barra-inicio',
  templateUrl: './barra-inicio.component.html',
  styleUrls: ['./barra-inicio.component.css']
})
export class BarraInicioComponent implements OnInit {

  user: User;
  nologeado=true;

  constructor(public router: Router) { }

  ngOnInit(): void {
    this.user =JSON.parse(localStorage.getItem("user"));
    this.estalog();
    console.log();
  }
  estalog(){
    if(this.user!==null){
      this.nologeado=false;
    }
    else{
      this.nologeado=true;
    }
    return this.nologeado;
  }
  logout(){
    localStorage.removeItem("user");
    this.nologeado=true;
    this.router.navigate(['inicio']);
  }

}
