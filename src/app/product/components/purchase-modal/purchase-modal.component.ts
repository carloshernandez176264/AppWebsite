import { Component, Inject } from '@angular/core';
import { Product } from '../../interfaces/productInterface/product.interface';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-purchase-modal',
  templateUrl: './purchase-modal.component.html',
  styleUrls: ['./purchase-modal.component.css']
})
export class PurchaseModalComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public cartItems: Product[],
    private dialogRef: MatDialogRef<PurchaseModalComponent>,
    private cartService: CartService
  ) { }

  ngOnInit(){
    this.cartService.loadLocalStorage()
    this.cartItems  = this.cartService.getCartItems();
  }

  calculateTotal() {
    return this.cartItems.reduce(
      (total, item) => total + item.price.value * item.cantidadSeleccionada, 0
    );
  }

  purchase() {
    this.cartItems.forEach(item => {
      item.amount = item.cantidadSeleccionada;
      this.cartService.clearCart();
      this.dialogRef.close();
    });



  }

}
