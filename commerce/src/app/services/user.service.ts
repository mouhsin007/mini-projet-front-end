import { Injectable } from '@angular/core';
import {User} from '../models/user.model';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private _user: User;
isConnecter: boolean;
  constructor(private http: HttpClient, private router: Router) { }
saveUser(libelle: string, user: User){
    this.http.post('http://localhost:8080/store/user/libelle/' + libelle, user).subscribe();
}

  connecter(email: string, password: string){
     this.http.get<number>('http://localhost:8080/store/user/email/' + email + '/password/' + password).subscribe(
      response => {
        if ( response == -1){alert('ce compte n existe pas'); }
        else if ( response == -2){alert('vous etes bloque'); }
        else if (  response == -3){alert('verfier votre email ou password'); }
        else{alert('vous avez connecte'); }
      }
    );
  }

  get user(): User {
    if (this._user == null){
      this._user = new User();
    }
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }
}
