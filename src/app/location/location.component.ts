import { Component, OnInit } from '@angular/core';
import { LocationService } from './location.service';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
  providers: [LocationService]
})
export class LocationComponent implements OnInit {
  lat = -34.88830109;
  lng = -58.49722524;

  locations = [];
  vendedores = [];

  constructor(private locationService: LocationService, private userService: UserService) { }

  ngOnInit() {
    this.locations = this.locationService.getLocations();
    this.vendedores = this.userService.getUsersByTipo('vendedor');
  }
}
