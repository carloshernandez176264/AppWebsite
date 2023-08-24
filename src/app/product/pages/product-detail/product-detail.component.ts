import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductService } from '../../services/product/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../interfaces/productInterface/product.interface';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {

  public product?: Product;

  constructor(
    private productService:ProductService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    ){}

    ngOnInit(): void {
      this.activatedRouter.params
      .pipe(
        switchMap( ({id}) => this.productService.getProductById(id)),
      )
      .subscribe(product => {

        if(!product) return this.router.navigate([ '/product' ]);

          this.product = product;
        return;
      });
      

    }

    goBack():void {
      this.router.navigateByUrl('product/list')
    }

}
