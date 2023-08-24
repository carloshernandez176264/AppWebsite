import { EventEmitter, Injectable } from '@angular/core';
import { Product } from '../../interfaces/productInterface/product.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  cartItems: Product[] = [];
  private cartKey ='cartItems';

  // addToCart(product: Product){
  //   const existingCartItems =this.getCartItems();
  //   existingCartItems.push(product);
  //   localStorage.setItem(this.cartKey, JSON.stringify(existingCartItems));
  // }

  // addToCart(product: Product) {
  //   const cartItems = this.getCartItems();
  //   this.cartItems.push(product);
  //   this.saveLocalStorage();
  // }

  getCartItems(): Product[] {
    const cartItems = localStorage.getItem(this.cartKey);
    return cartItems? JSON.parse(cartItems): [];
  }

  addToCart(product: Product) {
    const existingItem = this.cartItems.find(item => item.id.value === product.id.value);

    if (existingItem) {
      existingItem.cantidadSeleccionada += 1; // Incrementa la cantidad seleccionada
    } else {
      this.cartItems.push({ ...product, cantidadSeleccionada: 1 }); // Inicializa la cantidadSeleccionada
    }
    this.saveLocalStorage();

   }

  saveLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  loadLocalStorage() {
    console.log(JSON.parse(localStorage.getItem('cartItems')!))
    if (localStorage.getItem('cartItems')) {
      this.cartItems = JSON.parse(localStorage.getItem('cartItems')!);
    }
  }

  deleteItemCart(id: number) {
    this.cartItems = this.cartItems.filter((item) => item.id.value !== id);
    this.saveLocalStorage();
  }

  clearCart() {
    this.cartItems = [];
    this.deleteLocalStorage();
  }

  deleteLocalStorage() {
    localStorage.clear();
  }

  updateCart(cartItems: Product[]) {
    this.cartItems = cartItems;
    this.saveLocalStorage();
  }


  $modal = new EventEmitter<any>();

  openCentrado(contenido: any) {
    this.$modal.emit(contenido);
  }

}
