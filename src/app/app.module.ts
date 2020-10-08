import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CipherService } from './services/cipher.service';
import { EncodeComponent } from './components/encode/encode.component';
import { DecodeComponent } from './components/decode/decode.component';
import { GlobalHttpInterceptorService } from './services/global.http.Interceptor.service';
import { GlobalErrorHandlerService } from './services/global.error.handler.service';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AuthenticationService } from './services/authentication.service';
import { AuthGuardService } from './services/authguard.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    EncodeComponent,
    DecodeComponent,
    ErrorComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CipherService, 
              AuthenticationService,
              AuthGuardService,
              { provide: HTTP_INTERCEPTORS, useClass: GlobalHttpInterceptorService, multi: true  },
              { provide: ErrorHandler, useClass:GlobalErrorHandlerService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
