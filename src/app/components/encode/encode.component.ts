import { Component, OnInit } from '@angular/core';
import { CipherService } from 'src/app/services/cipher.service';
import {FormControl, FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-encode',
  templateUrl: './encode.component.html',
  styleUrls: ['./encode.component.css']
})
export class EncodeComponent implements OnInit {
  response: any;
  isValidFormSubmitted = null;
  formModel: FormGroup;
  constructor(private cipherService:  CipherService, private formBuilder: FormBuilder) { 
    this.formModel = this.formBuilder.group({
      userText: ['', Validators.compose([Validators.required,Validators.minLength(1)])]
    });
  }

  submitForm(){
    this.isValidFormSubmitted = false;
    if (this.formModel.invalid) {
      return;
    }
    this.isValidFormSubmitted = true;
    console.log(this.formModel.value.userText);
    this.cipherService.getEncodedText(this.formModel.value.userText).subscribe(res =>{
      this.response = res;
      console.log("In home "+ JSON.stringify(res));
    });
  }

  ngOnInit(): void {
  }

  get userText() {
    return this.formModel.get('userText');
 }
}
