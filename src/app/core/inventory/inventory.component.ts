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
  isEditing = false;

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

  addOrUpdateProduct() {
    if (this.isEditing) {
      // Llamar al servicio para actualizar el producto
      this.apiService.updateProduct(this.newProduct.id, this.newProduct).subscribe({
        next: (updatedProduct) => {
          // Actualizar el producto en la lista local
          const index = this.products.findIndex(p => p.id === updatedProduct.id);
          if (index !== -1) {
            this.products[index] = updatedProduct;
          }
          // Limpiar el formulario y salir del modo edición
          this.clearForm();
        },
        error: (err) => console.error('Error updating product:', err),
      });
    } else {
      // Agregar un nuevo producto
      this.apiService.addProduct(this.newProduct).subscribe({
        next: (product) => {
          this.products.push(product);
          this.clearForm();
        },
        error: (err) => console.error('Error adding product:', err),
      });
    }
  }


  editProduct(product: Product) {
    this.newProduct = { ...product };
    this.isEditing = true;
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
    this.isEditing = false;
  }

}
