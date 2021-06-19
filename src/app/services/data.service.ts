import { AppError } from './../errors/AppError';
import { BadRequest } from './../errors/BadRequest';
import { NotFoundError } from './../errors/NotFoundError';
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  static static_header = {};
  header: any;
  url = 'http://localhost:5000/api';

  constructor(@Inject('string') url: string, protected http: HttpClient) {
    this.url += url;
    this.setToken();
  }

  getAll(_id?){
    let url;
    if(_id)  url = this.url + '?_id=' + _id;
    else url = this.url
    return this.http.get(url, this.header)
    .pipe(
      catchError(this.handleError)
    );
  }

  get(_id){
    // console.log(this.url + '/' + id)
    return this.http.get(this.url + _id, this.header)
    .pipe(
      catchError(this.handleError)
    );
  }

  create(data: any){
    return this.http.post(this.url, data, this.header)
    .pipe(
      catchError(this.handleError)
    );
  }

  update(id: number, data: any){
    return this.http.put(this.url + '/' + id, data, this.header)
    .pipe(
      catchError(this.handleError)
    );
  }
  delete(id: number){
    return this.http.delete(this.url + '/' + id, this.header)
    .pipe(
      catchError(this.handleError)
    );
  }
  setToken(){
    this.header = {
      headers : new HttpHeaders(
        {
          Authorization : 'Bearer ' + localStorage.getItem('steno-token')
        }
      )
    };
    DataService.static_header = this.header;
  }

  handleError(error: HttpErrorResponse){
      console.log(error);
      if (error.status === 404){
        return throwError(new NotFoundError());
      }
      if (error.status === 400){
        return throwError(new BadRequest());
      }
      return throwError(new AppError());
  }
}