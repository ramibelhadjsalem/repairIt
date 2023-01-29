import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceTypeComponent } from './device-type/device-type.component';

const routes: Routes = [
  {
    path: '', children: [
      {
        path: "",
        component: DeviceTypeComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReparationRoutingModule { }
