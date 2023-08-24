import { Component } from '@angular/core';
import { PurchaseModalComponent } from '../../components/purchase-modal/purchase-modal.component';
import { ModalService } from '../../services/modal/modal.service';
import { CartService } from '../../services/cart/cart.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})
export class LayoutPageComponent {

  constructor(
    private modalService: ModalService,
    private cartService: CartService,
    private authService: AuthService,
    private router: Router
  ) { }

  public sidebarItems = [
    { label: 'Productos', icon: 'label', url: './list' },
    { label: 'Televisores', icon: 'tv', url: './Televisor' },
    { label: 'Añadir', icon: 'add', url: './new' },
    { label: 'Buscar', icon: 'search', url: './search' },

  ]

  openCartModal(){
    this.modalService.openModal(PurchaseModalComponent, null, '400px');
  }

  onLogout():void{
    this.authService.Logout()
      this.router.navigate(['/auth/login']);
    };
  




}
