import { PredParam } from './../../../../models/PredParam';
import { PredictionsService } from './../../../../services/predictions.service';
import { User } from './../../../../models/User';
import { Patient } from './../../../../models/Patient';
import { PatientService } from './../../../services/patient.service';
import { ActivatedRoute, Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-traitement-malade',
  templateUrl: './traitement-malade.component.html',
  styleUrls: ['./traitement-malade.component.scss']
})
export class TraitementMaladeComponent implements OnInit {
  nomOfMalade: any;
  patients = [];
  user: User;
  checkeds = [];
  list_images_selected = [];
  prediction: any;
  loading = false;
  patientSelected: Patient;
  etatMaladeSelection;
  download = false;
  constructor(private route: ActivatedRoute,
    private patientService: PatientService,
    private predService: PredictionsService) { }
  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.route.queryParamMap.subscribe((param) => {
      this.getPatientsOfMalade(param.get('malade_id'))
    });
  }
  getPatientsOfMalade(_id: string){
    this.patientService.getPatientsOfMalade(_id)
    .subscribe((resp: any) => {
      this.patients = resp.patients;
      this.nomOfMalade = resp.nomOfMalade
    })
  }


  checkToggle(patientSelected: Patient, checkedTarget){
    // this.checked = true;
    if (!this.checkeds.includes(patientSelected)){
      this.checkeds.push(patientSelected);
    }
    else{
      this.checkeds.splice(this.checkeds.indexOf(patientSelected), 1);
    }
    // if (!this.checkeds.length){
    //   this.checked = false;
    // }
  }

  imageSelected(fileSelected){
    const images = fileSelected.files;
    for(let i=0; i<images.length; i++){
      this.Main(images[i])
    }
  }
  toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
  async  Main(file) {
    this.list_images_selected.push(await this.toBase64(file));
 }

 lancerPrediction(){
  this.list_images_selected.map((target, index) => {
    const imgTag = document.createElement('img');
    imgTag.src = target;
    this.predService.predict(new PredParam(imgTag), this.nomOfMalade.toLowerCase()).then((pred: any) => {
      this.prediction = pred;
      this.prediction.nom = this.checkeds[0].nom;
      this.prediction.prenom = this.checkeds[0].prenom;
      this.loading = true;
    }, err => {
        this.loading = true;
    });
  })
 }
 downloadRapport(){
   this.download = true;
 }
 creerOrdonnance(){

 }
 envoyerRapport(){

 }
}
