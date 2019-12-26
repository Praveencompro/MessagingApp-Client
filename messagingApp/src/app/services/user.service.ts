import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  env = environment;

  getUsers() {
    return this.http.get(this.env.apiEndpoint + '/users').toPromise()
      .then((response) => {
        return response;
      })
      .catch((error)=>{
        console.log(error.stack);
        throw error;
      })
  }
}
