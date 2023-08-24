import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { CartComponent } from './components/cart/cart.component';
import { PurchaseModalComponent } from './components/purchase-modal/purchase-modal.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material/material.module';
import { ProductRoutingModule } from './product-routing.module';
import { ProductService } from './services/product/product.service';
import { ImageFallbackDirective } from './directives/image-fallback.directive';




@NgModule({
  declarations: [
    CardComponent,
    CartComponent,
    PurchaseModalComponent,
    LayoutPageComponent,
    ListPageComponent,
    ProductDetailComponent,
    NewPageComponent,
    SearchPageComponent,
    ImageFallbackDirective,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    ProductRoutingModule,
  ],

  providers:[
    ProductService
  ]

})
export class ProductModule { }
