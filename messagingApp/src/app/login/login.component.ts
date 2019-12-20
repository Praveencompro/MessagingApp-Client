import { Component, OnInit } from '@angular/core';
import { User } from "./../user";
import { AuthService } from "./../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  model = new User('a', 'b', 'b@p', 'd');

  onSubmit() {
    this.authService.signup(this.model);
  }

}
