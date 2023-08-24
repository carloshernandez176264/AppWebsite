import { Component } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { MatDialog } from '@angular/material/dialog';
import { Product } from '../../interfaces/productInterface/product.interface';
import { PurchaseModalComponent } from '../purchase-modal/purchase-modal.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  cartItems: Product[] = [];

  constructor(
    private cartService: CartService,
    private dialog:MatDialog
  ) {
    this.cartItems = this.cartService.getCartItems();
   }

  openPurchaseModal(){
    const dialogRef = this.dialog.open(PurchaseModalComponent, {
      width: '500px',
      data: this.cartItems
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    }
    );
  }

}
