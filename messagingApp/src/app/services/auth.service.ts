import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  env = environment;

  signup(userdata, callback?) {
    return this.http.post(this.env.apiEndpoint + '/users', userdata).toPromise()
      .then((response) => {
        if (callback) {
          callback('success', response);
        }
      })
      .catch((error) => {
        if (callback) {
          callback('error', error);
        }
      })
  }

}
