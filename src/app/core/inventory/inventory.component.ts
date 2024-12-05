import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/models/product';
import { ApiService } from '../../shared/services/api.service';
import { SHARED_MODULES } from '../../shared/modules/shared';

@Component({
  imports: SHARED_MODULES,
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
})
export class InventoryComponent implements OnInit {
  products: Product[] = [];
  newProduct: Product = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    quantity: 0,
    imageUrl: '',
  };

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.apiService.getProducts().subscribe({
      next: (data) => (this.products = data),
      error: (err) => console.error('Error fetching products:', err),
    });
  }

  addProduct() {
    this.apiService.addProduct(this.newProduct).subscribe({
      next: (product) => {
        this.products.push(product);
        this.clearForm();
      },
      error: (err) => console.error('Error adding product:', err),
    });
  }

  deleteProduct(id: number) {
    this.apiService.deleteProduct(id).subscribe({
      next: () => {
        this.products = this.products.filter((product) => product.id !== id);
      },
      error: (err) => console.error('Error deleting product:', err),
    });
  }

  clearForm() {
    this.newProduct = { id: 0, name: '', description: '', price: 0, quantity: 0, imageUrl: '' };
  }
}
