import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-livraison',
  templateUrl: './livraison.component.html',
  styleUrls: ['./livraison.component.scss']
})
export class LivraisonComponent implements OnInit {

  livraisonForm !: FormGroup

  constructor(private fb: FormBuilder,private route:Router) { }
  ngOnInit(): void {
    this.initLivraisonForm()
  }

  initLivraisonForm() {
    this.livraisonForm = this.fb.group({
      methodeLivraison: ["parpost", Validators.required],
    })
  }

  submitlivraisonForm(){
    this.route.navigateByUrl("/")
  }

}
