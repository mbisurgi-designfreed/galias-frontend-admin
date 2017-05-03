import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { User } from 'firebase/app';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  constructor(private router: Router) { }

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

  getOnAuthStateChanged(): boolean {
    let logged = false;

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        logged = true;
      }
    });

    return logged;
  }
}
