import { Component, OnInit } from '@angular/core';
import { AuthService } from "./../services/auth.service";
import { UserService } from "./../services/user.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users:any;

  constructor(private authService: AuthService, private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers()
      .then((userslist) => {
        this.users = userslist;
      })
  }

  getUserMessages(emailid) {
    debugger;
    let recieveremailid = emailid;
    this.authService.getLoggedInUser();
  }

}
