import { Component, OnInit, ViewChild, Input, AfterViewInit, ElementRef } from '@angular/core';

import { fromEvent } from 'rxjs';
import { switchMap, takeUntil, pairwise } from 'rxjs/operators';
import * as tf from '@tensorflow/tfjs';
import { imag } from '@tensorflow/tfjs';

@Component({
  selector: 'app-test-pfe',
  templateUrl: './test-pfe.component.html',
  styleUrls: ['./test-pfe.component.scss']
})
export class TestPFEComponent implements OnInit {
  model
  modelSrc = '../assets/tmp/tfjs_model/model.json';
  imageSrc='../assets/ISIC_0024317.jpg';
  imgPx;
  constructor() { }

  ngOnInit(): void {
    this.load_model().then(()=> { 
      this.predict();
    });
  }
  async load_model(): Promise<void> {
    this.model = await tf.loadLayersModel(this.modelSrc);
  }
  prepare_image(){
    let image = new Image();
    image.src = this.imageSrc;
    let cvs = document.createElement('canvas')
    cvs.width = image.width;
    cvs.height = image.height;
    let ctx = cvs.getContext('2d');
    ctx.drawImage(image, 0, 0);
    let imageData = ctx.getImageData(0, 0, 32, 32);
    let img = tf.browser.fromPixels(imageData);
    let imgtmp = img.reshape([1, 32, 32, 3]);
    this.imgPx = tf.cast(imgtmp, 'float32');
  }
  async predict(){
    this.prepare_image()
    console.log(this.imgPx);
    const output = this.model.predict(this.imgPx) as any;
    let predictions = Array.from(output.dataSync());
    let max = 0;
    predictions.map((elm : number, index) => {
      max = max < elm ? elm : max
    });
    const classes = this.getClass(predictions.indexOf(max));
    console.log(classes)
     // 
      //11
      //11
  }

  getClass(i: number){
    const classes = ['akiec', 'bcc', 'bkl', 'df', 'mel', 'nv', 'vasc'];
    return classes[i]
  }
}

