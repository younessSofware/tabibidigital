import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService extends DataService{
  constructor(http: HttpClient) {
    super('/users', http);
  }
  getAll(_id){
    this.url += '/getAll'
    return super.getAll(_id);
  }
}
