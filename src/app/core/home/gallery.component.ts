import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { Product } from '../../shared/models/product';
import { CartService } from '../../shared/services/cart.service';
import { SHARED_MODULES } from '../../shared/modules/shared';

@Component({
  imports: SHARED_MODULES,
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
})
export class GalleryComponent implements OnInit {
  products: Product[] = [];

  constructor(private apiService: ApiService, private cartService: CartService) {}

  ngOnInit() {
    this.apiService.getProducts().subscribe({
      next: (data) => (this.products = data),
      error: (err) => console.error('Error fetching products:', err),
    });
  }

  addToCart(product: Product) {
    if (product.quantity > 0) {
      this.cartService.addToCart(product);
      product.quantity--; // Reduce la cantidad disponible localmente
    }
  }
}
