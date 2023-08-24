import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { publicGuard } from './auth/guards/public.guard';
import { authGuard } from './auth/guards/auth/auth.guard';

const routes: Routes = [

  {
    path: "auth",
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    //  canActivate:[authGuard],
    // canMatch: [publicGuard]
  },
  {
    path: "product",
    loadChildren: () => import('./product/product.module').then(m => m.ProductModule),
    // canActivate:[publicGuard],
    // canMatch: [publicGuard]
  },
  {
    path:'', redirectTo: 'auth', pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
