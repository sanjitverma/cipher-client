import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CipherService {

  baseUrl: string;
  encodedResponse: any;
  constructor(private http: HttpClient) { 
    this.baseUrl = "http://localhost:8080/cipher/data/"
  }

  getEncodedText(inputText: string): Observable<any>{
    return this.http.get(this.baseUrl+`encode?text=${inputText}`);
  }

  getDecodedText(inputText: string): Observable<any>{
    return this.http.get(this.baseUrl+`decode?text=${inputText}`);
  }
}
