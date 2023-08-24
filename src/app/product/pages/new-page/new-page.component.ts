import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/product/product.service';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../interfaces/productInterface/product.interface';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrls: ['./new-page.component.css']
})
export class NewPageComponent implements OnInit {

  public productForm = new FormGroup({
    id: new FormControl( Validators.required),
    name: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),
    code: new FormControl(''),
    brand: new FormControl(''),
    model: new FormControl(''),
    stock: new FormControl(''),
    photo: new FormControl(''),
  });

  constructor(
    private productService:ProductService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private dialog:MatDialog,
  ) { }

  get currentProduct(): Product {
    const product = this.productForm.value as unknown as Product ;
    return product;
  }

  ngOnInit(): void {
    if(!this.router.url.includes('edit')) return;

    this.activatedRouter.params
    .pipe(
      switchMap( ({id}) => this.productService.getProductById(id)),
      )
      .subscribe(product => {

        if(!product){
        return this.router.navigate([ '/product' ]);
      }
      this.productForm.reset();
      return;


      });
  }

  onSubmit():void{
    if(this.productForm.invalid)return;

    if(this.currentProduct.id.value){
      this.productService.updateProduct(this.currentProduct)
      }
    }




}
