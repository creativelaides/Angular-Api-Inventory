import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = new BehaviorSubject<any[]>([]); // Lista de productos en el carrito
  cartItems$ = this.cartItems.asObservable();

  addToCart(product: any) {
    const currentItems = this.cartItems.value;
    const existingItem = currentItems.find(item => item.id === product.id);

    if (existingItem) {
      // Incrementa la cantidad solo si hay stock disponible
      if (existingItem.quantity < product.quantity) {
        existingItem.quantity += 1;
      }
    } else {
      currentItems.push({ ...product, quantity: 1 });
    }

    this.cartItems.next([...currentItems]); // Notifica a los suscriptores
  }

  removeFromCart(productId: number) {
    const updatedItems = this.cartItems.value.filter(item => item.id !== productId);
    this.cartItems.next(updatedItems);
  }

  clearCart() {
    this.cartItems.next([]);
  }

  getCartTotal() {
    return this.cartItems.value.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
  }
}
