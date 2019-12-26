import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private http: HttpClient) { }
  env = environment;

  getMessages(sender, reciever) {
    return this.http.get(this.env.apiEndpoint + '/messages/' + sender + "/" + reciever).toPromise()
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.log(error.stack);
        throw error;
      })
  }

  sendMessage(messageObj) {
    return this.http.post(this.env.apiEndpoint + '/messages', messageObj).toPromise()
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.log(error.stack);
        throw error;
      })
  }
}
