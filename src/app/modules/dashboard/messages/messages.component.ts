import { Message } from './../../../../models/Message';
import { User } from './../../../../models/User';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  user: User;
  messages: Message[] = [];
  constructor() { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.addMessage()
  }
  addMessage(){
    const message = new Message();
    message.toId = this.user._id;
    message.fromName = "Patient Nom";
    message.subject = "Hello how are you fine";
    message.updatedAt = new Date('2020/05/02');
    this.messages.push(message);
  }

  fiileSelected(target){
    for(let i=0; i<target.files.length; i++) this.filesSelected.push(target.files[i]);
  }
  filesSelected = [];
  envoyer(tagMessage){
    const message = tagMessage.value;
    const new_message = new Message();
    new_message.fromId = this.user._id;
    new_message.fromName = this.user.nom + ' ' + this.user.prenom;
    new_message.subject = message;
    new_message.updatedAt = new Date();
    this.messages.push(new_message);
    tagMessage.value = '';
  }

}
