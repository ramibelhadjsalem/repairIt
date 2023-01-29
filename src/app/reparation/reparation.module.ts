import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReparationRoutingModule } from './reparation-routing.module';
import { DeviceTypeComponent } from './device-type/device-type.component';


@NgModule({
  declarations: [
    DeviceTypeComponent
  ],
  imports: [
    CommonModule,
    ReparationRoutingModule
  ]
})
export class ReparationModule { }
