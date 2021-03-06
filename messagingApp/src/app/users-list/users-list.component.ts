import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from "./../services/auth.service";
import { UserService } from "./../services/user.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  @Output() onGetMessages: EventEmitter<any> = new EventEmitter();
  users: any;
  selectedItem: any;
  userInput: any;
  filteredList: any;
  loggedInUserEmailId: any;
  loggedInUser: any;

  constructor(private authService: AuthService, private router: Router, private userService: UserService) { }

  ngOnInit() {

    this.loggedInUserEmailId = this.authService.getLoggedInUserEmailId;

    this.userService.getUsers()
      .then((userslist) => {
        this.createFilteredUserList(userslist)
      })
  }

  createFilteredUserList(userslist) {
    debugger;
    if (userslist) {
      this.filteredList = this.users = userslist.filter((value) => {
        try {
          if (value && value['emailid'] === this.loggedInUserEmailId) {
            this.loggedInUser = value;
            return false;
          }
          else {
            return true;
          }
        }
        catch
        {
          return false;
        }
      })
    }
  }

  getUserMessages(user) {
    this.selectedItem = user;
    let recieverEmailId = user.emailid;
    let senderEmailId = this.loggedInUserEmailId;
    this.onGetMessages.emit({ senderEmailId, recieverEmailId });
  }

  filterUserList() {
    if (this.userInput && this.userInput.trim()) {
      this.filteredList = this.users.filter((value) => {
        try {
          let wholeSearchString = this.userInput.toLowerCase();
          let searchStringArray = wholeSearchString.split(" ");
          let isTextFound = false;
          return searchStringArray.some((searchString) => {
            if (searchString) {
              let fn = value['firstname'].toLowerCase();
              let ln = value['lastname'].toLowerCase();
              let em = value['emailid'].toLowerCase();
              return (fn.indexOf(searchString) !== -1 || ln.indexOf(searchString) !== -1 || em.indexOf(searchString) !== -1)
            }
            else {
              return false;
            }
          })
        }
        catch{
          return false;
        }
      })
    }
    else {
      this.userInput = '';
      this.filteredList = this.users
    }
  }

}
