import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReparationRoutingModule } from './reparation-routing.module';
import { DeviceTypeComponent } from './device-type/device-type.component';
import { DiscriptionComponent } from './discription/discription.component';
import { AddressComponent } from './address/address.component';
import { LivraisonComponent } from './livraison/livraison.component';




@NgModule({
  declarations: [
    DeviceTypeComponent,
    DiscriptionComponent,
    AddressComponent,
    LivraisonComponent
  ],
  imports: [
    CommonModule,
    ReparationRoutingModule,
    

  ]
})
export class ReparationModule { }
