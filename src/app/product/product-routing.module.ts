import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

const routes: Routes = [
  { path: '',
   component: LayoutPageComponent,
    children: [
      {path: 'new', component: NewPageComponent},
      {path: 'search', component: SearchPageComponent},
      {path: 'edit/:id', component: NewPageComponent},
      {path: 'list', component: ListPageComponent},
      {path: ':id', component: ProductDetailComponent},
      {path: 'product/:name', component: ListPageComponent},
      { path: '', redirectTo: 'list', pathMatch: 'full' },
    ]
   },
]

@NgModule ({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProductRoutingModule { }
