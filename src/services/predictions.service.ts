import { PredParam } from 'src/models/PredParam';
import { Injectable } from '@angular/core';
import * as tf from '@tensorflow/tfjs';
@Injectable({
  providedIn: 'root'
})
export class PredictionsService {
  private model: any;
  private imgPreProcess: any;
  constructor() { }
  private async load_model(model): Promise<void> {
    this.model = await tf.loadLayersModel(model.path);
  }
  private  prepare_image(predParam: PredParam, index: number): Promise<void>{
    return new Promise(resolve => {
      const image = predParam.tagImage
      const imageOrigin = tf.browser.fromPixels(image).toFloat();
      this.imgPreProcess = this.configureImg(imageOrigin, predParam.models[index]);
      resolve()
    });
  }
  private configureImg(imageOrigin: any, model){
    const width = model.sizeTargetImage.width;
    const height = model.sizeTargetImage.height
    const imageResized = tf.image.resizeBilinear(imageOrigin, [width, height]);
    const imgConfig = imageResized.arraySync();
    imgConfig.map((level1, i) => {
      level1.map( (level2, j) => {
        imgConfig[i][j] = [level2[0]/ 255, level2[1]/ 255, level2[2]/ 255 ]
      });
    });
    return tf.tensor(imgConfig).reshape([1, width, height, 3]);
  }
  predict(predParam: PredParam, type: string): Promise<void>{
    const index = predParam.models.findIndex(x => x.type === type);
    return new Promise((resolve: any) => {
      this.load_model(predParam.models[index]).then(() => {
      this.prepare_image(predParam, index).then(() => {     
        const output = this.model.predict(this.imgPreProcess);
        const predictions = Array.from(output.dataSync());
        resolve(this.reformulePrediction(predictions, type))
      })
      });
    });
  }

  reformulePrediction(predictions, type){
    if(type.toLowerCase() == 'skin'){
      if(predictions[0] < 0.5){
        return {
          typeOfCellule: 'Bengin',
          porcentage: (predictions[0] * 100) / 0.5,
          etat: true
        }
      }else{
        console.log(((predictions[0] - 0.5) * 100)/0.5)
        return {
          typeOfCellule: 'malignant',
          porcentage: (((predictions[0] - 0.5) * 100)) / 0.5,
          etat: false
        }
      }
    }  
  }
}
