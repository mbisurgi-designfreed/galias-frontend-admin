import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

import * as firebase from 'firebase';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logged = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.logged = true;
        console.log(this.logged);
      } else {
        this.logged = false;
        console.log(this.logged);
      }
    });
  }

  onLogout() {
    this.authService.signOut();
  }
}
