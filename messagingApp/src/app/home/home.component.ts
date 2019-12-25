import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  senderEmailid:any;
  recieverEmailid:any;
  constructor() { }

  ngOnInit() {
  }
  getMessages(data) {
    this.senderEmailid = data.senderEmailId;
    this.recieverEmailid = data.recieverEmailId;
  }
}
