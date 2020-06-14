import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {TypeUserService} from '../services/type-user.service';
import {User} from '../models/user.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-connecter',
  templateUrl: './connecter.component.html',
  styleUrls: ['./connecter.component.css']
})
export class ConnecterComponent implements OnInit {
email: string;
password: string;
  constructor(private userService: UserService, private router: Router) { }
  get user(): User {
    return this.userService.user;
  }
  ngOnInit(): void {
  }

  connecter(){
    this.userService.connecter(this.email, this.password);
    console.log(this.email);
    console.log(this.password);
  }
}
