import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { DeviceTypeComponent } from './device-type/device-type.component';
import { DiscriptionComponent } from './discription/discription.component';
import { LivraisonComponent } from './livraison/livraison.component';

const routes: Routes = [
  {
    path: '', children: [
      {
        path: "",
        component: DeviceTypeComponent
      }
    ]
  },
  {
    path: '', children: [
      {
        path: "livraison",
        component: LivraisonComponent
      }
    ]
  },
  {
    path: '', children: [
      {
        path: "discription",
        component: DiscriptionComponent
      }
    ]
  },
  {
    path: '', children: [
      {
        path: "address",
        component: AddressComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReparationRoutingModule { }
