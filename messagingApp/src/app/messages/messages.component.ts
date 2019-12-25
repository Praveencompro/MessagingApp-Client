import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { MessagesService } from "./../services/messages.service";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  @Input() senderEmail: string;
  @Input() recieverEmail: string;
  messages: any;
  messagemodel = {};
  hideSendMsgBtn = true;
  constructor(private messageService: MessagesService) { }

  ngOnInit() {
    this.messagemodel['sender'] = this.senderEmail;
    this.messagemodel['reciever'] = this.recieverEmail;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.getMessages(this.senderEmail, changes.recieverEmail.currentValue);
    this.messagemodel['sender'] = this.senderEmail;
    this.messagemodel['reciever'] = changes.recieverEmail.currentValue;
  }

  getMessages(senderEmail, recieverEmail) {
    if (senderEmail && recieverEmail) {
      this.messageService.getMessages(senderEmail, recieverEmail)
        .then((messages) => {
          this.messages = messages;
        })
    }
  }

  sendMessage() {
    if (this.messagemodel['message'] && this.messagemodel['message'].trim()) {
      this.messageService.sendMessage(this.messagemodel)
        .then((response) => {
          this.messagemodel['message'] = '';
        })
        .catch((error) => {
          this.messagemodel['message'] = '';
        })
    }
    else{
      this.messagemodel['message'] = '';
    }
  }

}
