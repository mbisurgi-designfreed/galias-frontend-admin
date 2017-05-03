import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyASq-7qc0xaToG8vWrNV2jEXarOQMGI9vc',
      authDomain: 'calsa-diaria.firebaseapp.com',
      databaseURL: 'https://calsa-diaria.firebaseio.com',
      projectId: 'calsa-diaria',
      storageBucket: 'calsa-diaria.appspot.com',
      messagingSenderId: '1043858431436'
    });
  }
}
