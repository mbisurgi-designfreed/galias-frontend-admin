import { Injectable } from '@angular/core';
import { User } from 'firebase/app';
import { Router } from '@angular/router';

import * as firebase from 'firebase';

@Injectable()
export class AuthService {
  users = [];

  constructor(private router: Router) {

  }

  signIn(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response => {
        this.router.navigate(['/']);
      })
      .catch(error => {
        console.log(error.message);
      });
  }

  signOut() {
    firebase.auth().signOut();
  }

  getUser(): User {
    return firebase.auth().currentUser;
  }
}
