import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule,Routes } from '@angular/router';
import {HttpClientModule } from '@angular/common/http';
import {FormsModule,ReactiveFormsModule}  from '@angular/forms'

const appRoute:Routes=
[
  {
    path: '',
    component: SigninComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'Register',
    component: RegisterComponent
  },
]
  
@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,HttpClientModule,
    RouterModule.forRoot(appRoute),
    FormsModule,
    ReactiveFormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
