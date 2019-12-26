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

  model = new User('praveen', 'kumar', 'praveen.compro@gmail.com', 'random');

  onSignup() {
    this.authService.signup(this.model)
      .then((data) => {
        this.router.navigate(['home'])
      })
      .catch((error) => {        
        alert(error);
      })
  }

  loginmodel = new User('praveen', 'kumar', 'praveen.compro@gmail.com', 'random');

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
