import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../common/user.model';

@Injectable()
export class AuthService {
  url = 'url_path_of_MySQL';

  constructor(private http: HttpClient) {}

  signUpUser(dataNewUser: IUser) {
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post(this.url, dataNewUser, options);
  }
}
