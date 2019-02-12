import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
// Import our services
import { AuthLoginService } from "./common/auth-login.service";
import { AuthRegisterService } from "./common/auth-register-service";
import { HomeComponent } from './home/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AuthRegisterService,
              AuthLoginService
  ], // Our service providers
  bootstrap: [AppComponent]
})
export class AppModule { }
