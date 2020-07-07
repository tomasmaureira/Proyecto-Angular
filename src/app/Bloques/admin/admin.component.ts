import { Component, OnInit } from '@angular/core';
import {User} from '../../model/User';
import { Router } from '@angular/router';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  user: User;

  constructor(public router: Router) { }

  ngOnInit(): void {
    this.user =JSON.parse(localStorage.getItem("user"));
    console.log();
  }

}
