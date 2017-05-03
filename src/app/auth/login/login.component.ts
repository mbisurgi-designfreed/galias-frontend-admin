import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) { }

  ngOnInit() {

  }

  onLogin(f: NgForm) {
    const email = f.value.email;
    const password = f.value.password;

    this.authService.signIn(email, password);
  }

  onCurrent() {
    console.log(this.authService.getUser());
  }
}
