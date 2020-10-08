import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EncodeComponent } from './components/encode/encode.component';
import { DecodeComponent } from './components/decode/decode.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AuthGuardService } from 'src/app/services/authguard.service';

const routes: Routes = [
  { path: '', component: HomeComponent, runGuardsAndResolvers: 'always'},
  { path: 'encode-component', component: EncodeComponent, canActivate:[AuthGuardService]},
  { path: 'decode-component', component: DecodeComponent, canActivate:[AuthGuardService]},
  { path: 'error', component: ErrorComponent},
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent, canActivate:[AuthGuardService]}
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
