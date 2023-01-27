import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss']
})
export class VerificationComponent implements OnInit {
  verificationForm !:FormGroup ; 
  constructor(private fb:FormBuilder,private route:Router) { }

  ngOnInit(): void {
    this.initVerificationForm()
  }

  initVerificationForm(){
    this.verificationForm  =this.fb.group({
      Cin:[''],
      MF:['']
    })
  }

  SubmitveificationForm(){
    this.route.navigateByUrl("livraison")
  }

}
