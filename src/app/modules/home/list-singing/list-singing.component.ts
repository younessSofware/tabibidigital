import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-singing',
  templateUrl: './list-singing.component.html',
  styleUrls: ['./list-singing.component.scss']
})
export class ListSingingComponent implements OnInit {
  playlist = [
    {
        title: 'Audio One Title',
        link: 'Link to Audio One URL',
        artist: 'Artist',
        duration: 'Duration'
    }];
  constructor() { }

  ngOnInit(): void {
  }

}
