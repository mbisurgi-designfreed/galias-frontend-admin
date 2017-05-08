import { Injectable } from '@angular/core';

import * as firebase from 'firebase';
import { User } from './user.model';

@Injectable()
export class UserService {
  ref = firebase.database().ref('users');

  constructor() {
    this.init();
  }

  init() {

  }

  getUsersByTipo(tipo: string) {
    const refVendedores = this.ref.orderByChild('tipo').equalTo(tipo);

    const vendedores = [];

    refVendedores.on('value', snapshot => {
      snapshot.forEach(childSnapshot => {
        vendedores.push(new User(childSnapshot.key, childSnapshot.val().name, childSnapshot.val().lastname));

        return false;
      });
    });

    return vendedores;
  }
}
