import { User } from './../../models/User';
import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  urlVerfify = 'https://detect-project.herokuapp.com/upload';
  url = 'http://localhost:5000/api/users/';
  upload(files) {
    const formData = new FormData();
    for(let i=0; i<files.length; i++){
      formData.append('file', files[i], files[i].name);
    }

    // const req = new HttpRequest('POST', this.urlVerfify, );

    return this.http.post(this.urlVerfify, formData);
  }

  signin(email, password){
    return this.http.post(this.url + 'signin', {email,password});
  }



  signup(user: User){
    const userFormData = new FormData();
    const keys = Object.keys(user);
    keys.map((key) => {
      if(key == 'photos'){
        user[key].map((photo) => {
          userFormData.append('files', photo, photo.name)
        })
      }else{
        userFormData.append(key, user[key]);
      }
    });
    return this.http.post(this.url + 'signup', userFormData);
  }
  
  detectFaceByCamera(blob){
    const options = {
      uri: 'https://eastus.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=false&recognitionModel=recognition_04&returnRecognitionModel=false&detectionModel=detection_03&faceIdTimeToLive=86400',
      verifyUri: 'https://eastus.api.cognitive.microsoft.com/face/v1.0/verify',
      headers : {
          'Content-Type': 'application/octet-stream',
          'Ocp-Apim-Subscription-Key': '31024abd20e841c1b747ed349eebf23c'
      }
    };
    return this.http.post(options.uri, blob,{
      headers: options.headers     
    });
  }
  
  signinByCamera(faceIds){
    return this.http.post(this.url + 'signinByCamera', {faceIds: faceIds});
  }
  

  getToken(){
    return localStorage.getItem('token');
  }
}
