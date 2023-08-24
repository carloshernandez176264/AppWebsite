import { Component } from '@angular/core';
import { Product } from '../../interfaces/productInterface/product.interface';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css'],
})
export class ListPageComponent {
  public products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((products) => {
      this.products = products;
    });
    // this.productService.getProductByName('').subscribe((products) => {});
  }

  getProductsByName(nombre: string): void {
    this.productService.getProductByName(nombre).subscribe((products) => {
      this.products = products;
    });
  }
}
