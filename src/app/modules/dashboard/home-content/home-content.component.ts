import { Patient } from './../../../../models/Patient';
import { Malade } from './../../../../models/Malade';
import { UserService } from './../../../services/user.service';
import { User } from './../../../../models/User';
import { Component, OnInit } from '@angular/core';
import { Date } from 'core-js';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss']
})
export class HomeContentComponent implements OnInit {
  user: User;
  malades: Malade[];
  mesPatients = [];
  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    const user_id = JSON.parse(localStorage.getItem('user'))._id;
    this.userService.getAll(user_id)
    .subscribe((res: any) => {
      this.user = JSON.parse(localStorage.getItem('user'));
      this.user.consultations = res.consultations;
      this.user.patients = res.patients;
      this.user.malades = res.malades;
      this.getEtatAndDate();
      console.log(this.mesPatients)
    })
  }

  getEtatAndDate(){
    this.user.patients.map((patient) => {
      patient.malades.map((malade_id) => {
        this.user.consultations.map((consult) => {
          if(consult.malade == malade_id ) {
            // console.log(this.user.malades.findIndex( malade => malade._id == malade_id))
            let nomMalade = this.user.malades[this.user.malades.findIndex( malade => malade._id.toString() == malade_id.toString())]
            this.mesPatients.push({
              patient: patient,
              etat: consult.etat,
              malade: nomMalade, 
              date: consult.updatedAt
            });
          } 
        })
      });
    })
  }
}
