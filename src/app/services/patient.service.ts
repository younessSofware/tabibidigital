import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientService extends DataService {
  constructor(http: HttpClient) {
    super('/patients', http);
  }

  getPatientsOfMalade(malade_id){
    this.url += '/getPatientsOfMalade?_id='
    return this.get(malade_id)
  }
}
