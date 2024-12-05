import { Component } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { Product } from '../../shared/models/product';
import { SHARED_MODULES } from '../../shared/modules/shared';

@Component({
  imports: SHARED_MODULES,
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent {
  cart: Product[] = [];

  constructor(private apiService: ApiService) { }

  getCartItems() {
    // Aquí se podría agregar lógica para obtener los productos del carrito si se almacena de forma persistente
  }

  removeFromCart(product: Product) {
    this.cart = this.cart.filter((item) => item.id !== product.id);
  }
}
