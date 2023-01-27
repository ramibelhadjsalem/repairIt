import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import {faFacebookF, faGoogle} from "@fortawesome/free-brands-svg-icons";
import { AccountServiceService } from 'src/app/services/services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  faFacebookF: any = faFacebookF;
  faGoogleD: any =faGoogle
  loginForm!: FormGroup;
  validationErrors : string[]=[] ; 
  passwordIncorrect:Boolean=false
  emailinvalid:boolean=false


  constructor(private fb: FormBuilder ,
  
    private router:Router,
   ) { }

  ngOnInit(): void {
    this.initLoginForm()
  }

  initLoginForm(){
    this.loginForm=this.fb.group({
      email:['',Validators.required],
      password : ['',Validators.required]

    })
  
  }
  login(){

  }
  loginWithFacebook(){}

}
