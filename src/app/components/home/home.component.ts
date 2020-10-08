import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CipherService } from 'src/app/services/cipher.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userText: string;
  response: any;
  constructor(private cipherService:  CipherService, public authenticationService: AuthenticationService) { 
  }



  submitForm(){
    console.log(this.userText);
    this.cipherService.getEncodedText(this.userText).subscribe(res =>{
      this.response = res;
      console.log("In home "+ JSON.stringify(res));
    });
  }

  ngOnInit(): void {
  }

}
