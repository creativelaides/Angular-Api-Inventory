import { Component, OnInit } from '@angular/core';
import { CartService } from '../../shared/services/cart.service';
import { SHARED_MODULES } from '../../shared/modules/shared';

@Component({
  imports: SHARED_MODULES,
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  cartTotal: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
      this.cartTotal = this.cartService.getCartTotal();
    });
  }

  removeFromCart(productId: number) {
    this.cartService.removeFromCart(productId);
  }

  clearCart() {
    this.cartService.clearCart();
  }
}
