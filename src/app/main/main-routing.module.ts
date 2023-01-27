import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReparationComponent } from './reparation/reparation.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: '', children: [
      {
        path: "",
        component: HomeComponent
      }
    ]
  },
  {
    path: '', children: [
      {
        path: "search", 
        component: SearchComponent,
      }
    ]
  },
  {
    path: '', children: [
      {
        path: "reparation", 
        component: ReparationComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
