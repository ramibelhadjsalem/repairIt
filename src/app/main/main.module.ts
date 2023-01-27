import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { SearchComponent } from './search/search.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReparationComponent } from './reparation/reparation.component';


@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    ReparationComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    PaginationModule.forRoot(),
    NgbModule,
    FormsModule
  ],
  exports:[
    HomeComponent 
  ]
})
export class MainModule { }
