import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidLogin = false;
  isValidFormSubmitted = null;
  formModel: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private loginservice: AuthenticationService) {
    this.formModel = this.formBuilder.group({
      userName: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    });
  }
    
  ngOnInit() {
  }

  checkLogin() {
    this.isValidFormSubmitted = false;
    if (this.formModel.invalid) {
      return;
    }
    this.isValidFormSubmitted = true;
    console.log(this.formModel.value.userName);
    (this.loginservice.authenticate(this.formModel.value.userName, this.formModel.value.password).subscribe(
      data => {
        this.router.navigate([''])
        this.invalidLogin = false
      },
      error => {
        console.log("Authentication error has taken place");
        this.invalidLogin = true
      }
    ));
  }
  get userName() {
    return this.formModel.get('userName');
  }
  get password() {
    return this.formModel.get('password');
  }
}
