import { User } from './../../../../models/User';
import { LoginService } from './../../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errorTakeImage: any;
  loadingSignIn = true;
  init(){
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".ma-container");
    sign_up_btn.addEventListener("click", () => {
      container.classList.add("sign-up-mode");
    })
    sign_in_btn.addEventListener("click", () => {
      container.classList.remove("sign-up-mode");
    });
  }
  startSignup = false;
  user: User;
  usingCamera = false;
  photos = [];
  valueOfButton = 'Add your face image';
  err = '';
  loading = true;
  private trigger: Subject<void> = new Subject<void>();
  constructor( private loginService: LoginService, private router: Router){
  }
  ngOnInit(){
    this.init();
  }

  login(email, password){
    this.loadingSignIn = false;
    this.loginService.signin(email, password)
    .subscribe((res: any) => {
      this.loadingSignIn = true;
      localStorage.setItem('token', res.token);
      localStorage.setItem('user', JSON.stringify(res.user));
      this.router.navigateByUrl('/dash');
    })
  }
  
  register(nom, prenom, email, password,specialisation,nomClinique ,adresseClinique){
    this.loading = false;
    //this.user = new User(nom, prenom, email, password, specialisation,nomClinique ,adresseClinique);
    this.photos.map((photo) => {
      this.user.photos.push(photo);
    })
    let faceids = [];
    this.err = '';
    this.loginService.upload(this.user.photos).subscribe((res :any) => {
      if(res.faceIds){
        faceids = res.faceIds;
        this.user.faceIds = faceids;
        this.loginService.signup(this.user)
        .subscribe((res: any) => {
          this.loading = true;
          console.log(res);
          document.getElementById('sign-in-btn').click();
        }, err => {
          this.loading = true;
        });
      }else{
        this.err =  "You cannot detect a face in your images";
        this.loading = true;
      }
    })
  }

  selectFiles(target){
    this.photos = [];
    const files = target.files;
    for(let i=0; i<files.length; i++){
      if(files[i].type != "image/jpeg" && files[i].type !== "image/png" && files[i].type !== "image/jpg"){
        alert("just images");
        return;
      }else{
        this.photos.push(files[i]);
      }
    }
  }

  takeScreen(webcam?){
    // webcam.video.nativeElement.pause();
    // const canvas = document.createElement("canvas");
    // // scale the canvas accordingly
    // canvas.width = webcam.video.nativeElement.videoWidth;
    // canvas.height = webcam.video.nativeElement.videoHeight;
    // // draw the video at that frame
    // canvas.getContext('2d')
    //   .drawImage(webcam.video.nativeElement, 0, 0, canvas.width, canvas.height);
    // // convert it to a usable data URL
    let img = document.getElementById('img');

    const blob = this.dataURItoBlob(this.getDataUrl(img));
    this.loginService.detectFaceByCamera(blob)
    .subscribe((res: any) => {
      if(res.lenght == 0){
        this.errorTakeImage = "error, repeat";
      }else{
        this.loginService.signinByCamera(res[0].faceId)
        .subscribe((data: any) => {
          if(data.token){
            localStorage.setItem('token', data.token);
          }
        })
      }
    }, err => {
    })
  }

  getDataUrl(img) {
    // Create canvas
    const canvas = document.createElement("canvas");;
    const ctx = canvas.getContext('2d');
    // Set width and height
    canvas.width = img.width;
    canvas.height = img.height;
    // Draw the image
    ctx.drawImage(img, 0, 0);
    return canvas.toDataURL('image/jpeg');
 }

  dataURItoBlob(dataURI) {
    var byteString = atob(dataURI.split(',')[1]);  
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]
      var ab = new ArrayBuffer(byteString.length);
      var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    var blob = new Blob([ab], {type: mimeString});
    return blob;
  }
}
