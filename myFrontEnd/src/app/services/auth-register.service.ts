import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';

import { appConfig } from '../app.config';
import { User } from '../models/user';

@Injectable()
export class AuthRegister {

  constructor(private http: HttpClient) { }

  create(user: User) {
    console.log(user);
    return this.http.post(appConfig.apiUrl + '/api/signup', user);
  }

}
