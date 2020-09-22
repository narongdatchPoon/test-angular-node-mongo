
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  auth2: any;
  @ViewChild('loginRef', {static: true }) loginElement: ElementRef;

  title = 'angular-project-test';

  constructor(private http:HttpClient){

  }
  ngOnInit(): void {
    //this.googleSDK()
    // let data = {feedback: 'testeststestststse'}
    // this.http.post<any>('http://localhost:3000/api',data).subscribe(result=>{
    //   //alert(JSON.stringify(result))
    // })
  }

  // googleSDK() {
 
  //   window['googleSDKLoaded'] = () => {
  //     window['gapi'].load('auth2', () => {
  //       this.auth2 = window['gapi'].auth2.init({
  //         client_id: '996675115608-4mfdn86h28jn5ilvqg4g891a54gtqikc.apps.googleusercontent.com',
  //         cookiepolicy: 'single_host_origin',
  //         scope: 'profile email'
  //       });
  //       this.prepareLoginButton();
  //     });
  //   }
   
  //   (function(d, s, id){
  //     var js, fjs = d.getElementsByTagName(s)[0];
  //     if (d.getElementById(id)) {return;}
  //     js = d.createElement(s); js.id = id;
  //     js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
  //     fjs.parentNode.insertBefore(js, fjs);
  //   }(document, 'script', 'google-jssdk'));
   
  // }

  // prepareLoginButton() {
 
  //   this.auth2.attachClickHandler(this.loginElement.nativeElement, {},
  //     (googleUser) => {
   
  //       let profile = googleUser.getBasicProfile();
  //       console.log('Token || ' + googleUser.getAuthResponse().id_token);
  //       console.log('ID: ' + profile.getId());
  //       console.log('Name: ' + profile.getName());
  //       console.log('Image URL: ' + profile.getImageUrl());
  //       console.log('Email: ' + profile.getEmail());
  //       //YOUR CODE HERE
   
   
  //     }, (error) => {
  //       alert(JSON.stringify(error, undefined, 2));
  //     });
   
  // }

}
