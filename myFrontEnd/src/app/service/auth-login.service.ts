import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';
import { appConfig } from '../app.config';

@Injectable()
export class AuthLoginService {
  public token: string;

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post<any>(appConfig.apiUrl + '/api/signin', {email: email, password: password})
      .map(user => {
        console.log('Login has fired');

        console.log(user);
        let token = user.json() && user.json.token;
        // Login successful if there's a jew token in the response
        if (token) {
          // Store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
        console.log('Usertoken is');
        console.log(user.token);
        console.log('User is');
        console.log(user.email);

        return user;
      });
  }

  logout() {
    // Remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
