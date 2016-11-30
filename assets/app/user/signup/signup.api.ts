import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { User } from '../user.interface';

import { Log, Level } from 'ng2-logger/ng2-logger';
const log = Log.create('SignupApi()');
log.color = 'darkgreen';

@Injectable()
export class SignupApi {
  private users: User[] = [];

  constructor(private http: Http) {
    log.d('constructor()', API);
  }

  signup(user: User) {
    const body = JSON.stringify(user);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post(API + 'user', body, {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }
}