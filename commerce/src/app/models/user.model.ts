import {TypeUser} from './type-user.model';

export class User {
  public id: number;
  public login: string;
  public password: string;
  public blocked: boolean;
  public nombreTentative: number;
  public typeUser: TypeUser;
}
