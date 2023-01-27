import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { ErrorLayoutComponent } from './layout/error-layout/error-layout.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {
        path: '',
        loadChildren: () => import('./main/main.module').then(m => m.MainModule)
      }
    ]
  },
  { 
    path: '', component: AuthLayoutComponent, children: [
      {
        path: '',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
      }
    ]
  },
  {
    path: '', component: ErrorLayoutComponent, children: [
      {path: '**', redirectTo: '404', pathMatch: 'full'},
      {
        path: '',
        loadChildren: () =>  import('./error/error.module').then(m => m.ErrorModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
