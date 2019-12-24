import { Component, OnInit, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import { User } from "./../user";
import { AuthService } from "./../services/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  model = new User('a', 'b', '2112b@p1', 'd');

  onSignup() {
    this.authService.signup(this.model)
      .then((data) => {
        this.router.navigate(['home'])
      })
      .catch((error) => {        
        alert(error);
      })
  }

  loginmodel = new User('al', 'bl', '2112b@pl1', 'dl');

  onLogin() {
    this.authService.login(this.loginmodel)
      .then((data) => {
        this.router.navigate(['home'])
      })
      .catch((error) => {
        alert(error);
      })
  }

}
