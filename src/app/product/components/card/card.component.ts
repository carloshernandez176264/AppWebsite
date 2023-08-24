import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/productInterface/product.interface';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input()
  public product!: Product;

  constructor(
    private cartService: CartService,
  ) { }

  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  ngOnInit(): void {
  if(!this.product)throw new Error('Product is required');
  }


  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }


}
