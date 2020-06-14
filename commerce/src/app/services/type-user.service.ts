import { Injectable } from '@angular/core';
import {TypeUser} from '../models/type-user.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TypeUserService {
private _typeUser: TypeUser;
private _typeUsers: Array<TypeUser>;
  constructor(private http: HttpClient) {}

  getTypeUser(){
    this.http.get<Array<TypeUser>>('http://localhost:8080/store/type-user/get').subscribe(
      data =>{
        this.typeUsers= data;
      }
    );
  }



  get typeUser(): TypeUser {
    if (this._typeUser== null){
      this._typeUser = new TypeUser();
    }
    return this._typeUser;
  }

  set typeUser(value: TypeUser) {
    this._typeUser = value;
  }

  get typeUsers(): Array<TypeUser> {
    if (this._typeUsers == null){
      this._typeUsers = new Array<TypeUser>();
    }
    return this._typeUsers;
  }

  set typeUsers(value: Array<TypeUser>) {
    this._typeUsers = value;
  }
}
