import { Component, OnInit } from '@angular/core';
import {User} from '../models/user.model';
import {UserService} from '../services/user.service';
import {TypeUser} from '../models/type-user.model';
import {TypeUserService} from '../services/type-user.service';

@Component({
  selector: 'app-inscrire',
  templateUrl: './inscrire.component.html',
  styleUrls: ['./inscrire.component.css']
})
export class InscrireComponent implements OnInit {
  categorieSelected: string;
  constructor(private userService: UserService, private typeUserService: TypeUserService) { }
  get user(): User {
    return this.userService.user;
  }
  get typeUsers(): Array<TypeUser> {
   return this.typeUserService.typeUsers;
  }
  ngOnInit(): void {
    this.typeUserService.getTypeUser();
  }
  getSelectedOptionText(event: Event) {
    let selectedOptions = event.target['options'];
    let selectedIndex = selectedOptions.selectedIndex;
    let selectElementText = selectedOptions[selectedIndex].text;
    this.categorieSelected= selectElementText;
    console.log(this.categorieSelected);
  }

  inscrire(){
  this.userService.saveUser(this.categorieSelected, this.user);
  }

}
