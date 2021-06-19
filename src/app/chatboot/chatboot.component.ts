import { OutputChats } from './../../models/OutputChats';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatboot',
  templateUrl: './chatboot.component.html',
  styleUrls: ['./chatboot.component.scss']
})
export class ChatbootComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const newChatBoot = new OutputChats();
    console.log(newChatBoot.output("Hello"));
  }

}
