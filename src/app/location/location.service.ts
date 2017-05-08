import { Injectable } from '@angular/core';
import { Location } from './location.model';

import * as firebase from 'firebase';

@Injectable()
export class LocationService {
  ref = firebase.database().ref('locations');

  locations = [];

  constructor() {
    this.init();
  }

  private init() {
    this.ref.on('child_added', snapshot => {
      console.log(snapshot.key);
      console.log(snapshot.val());

      const lat = snapshot.val().lat;
      const lng = snapshot.val().lng;
      const fecha = snapshot.key;

      this.locations.push(new Location(lat, lng, fecha));
    });
  }

  getLocations() {
    return this.locations;
  }
}
