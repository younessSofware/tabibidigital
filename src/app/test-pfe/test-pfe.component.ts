import { PredictionsService } from './../../services/predictions.service';
import { Component, OnInit } from '@angular/core';
import { PredParam } from 'src/models/PredParam';

@Component({
  selector: 'app-test-pfe',
  templateUrl: './test-pfe.component.html',
  styleUrls: ['./test-pfe.component.scss']
})
export class TestPFEComponent implements OnInit {
  constructor(private predService: PredictionsService) { }
  uploadedImgs: any;
  result: number;
  loading = true;
  ngOnInit(): void {
  }

  uploadDone(event){
    var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
			this.uploadedImgs = reader.result; 
		}
    this.predService.predict(new PredParam(document.getElementById('target')), 'Breast').then((pred: any) => {
        console.log(pred)
        this.loading = true;
        this.result = Math.max(...pred);
    }, err => {
      this.loading = true;
    });
  }
}

