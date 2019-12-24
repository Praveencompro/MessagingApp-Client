import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedinuser: any;

  constructor(private http: HttpClient) { }

  env = environment;

  signup(userdata, callback?) {
    return this.http.post(this.env.apiEndpoint + '/auth/signup', userdata).toPromise()
      .then((response) => {
        let jwttoken = response['jwttoken'];
        if (jwttoken) {
          localStorage.setItem('access_token', response['jwttoken']);
          this.loggedinuser = userdata;
          let retObj = {
            status: 'success',
            response: response
          };
          if (callback) {
            callback(retObj);
          }
          return retObj;
        }
        else {
          let errMsg = response['message'];
          if (!errMsg) {
            errMsg = 'Something went wrong. Please contact the administrator.'
          }
          throw new Error(errMsg);
        }
      })
      .catch((error) => {
        console.log(error.stack);
        throw error;
      })
  }

  login(userdata, callback?) {
    return this.http.post(this.env.apiEndpoint + '/auth/login', userdata).toPromise()
      .then((response) => {
        let jwttoken = response['jwttoken'];
        if (jwttoken) {
          this.loggedinuser = userdata;
          localStorage.setItem('access_token', response['jwttoken']);
          let retObj = {
            status: 'success',
            response: response
          };
          if (callback) {
            callback(retObj);
          }
          return retObj;
        }
        else {
          let errMsg = response['message'];
          if (!errMsg) {
            errMsg = 'Something went wrong. Please contact the administrator.'
          }
          throw new Error(errMsg);
        }
      })
      .catch((error) => {
        console.log(error.stack);
        throw error;
      })
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  public get isLoggedIn(): boolean {
    return (localStorage.getItem('access_token') !== null);
  }

  public get getLoggedInUser(): any {
    return this.loggedinuser;
  }

}
