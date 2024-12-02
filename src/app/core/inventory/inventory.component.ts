import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importar CommonModule
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { Product } from '../../shared/models/product';  // Asegúrate de importar el modelo de producto
import { ApiService } from '../../shared/services/api.service';  // Importar ApiService

@Component({
  selector: 'app-inventory',
  imports: [CommonModule, FormsModule],
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
    imageUrl: '' // Añadir la propiedad 'imageUrl'
  };  // Producto en blanco para agregar

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.products = this.apiService.getProducts();
  }

  addProduct() {
    const newProduct = { ...this.newProduct, id: this.products.length + 1 };  // Asigna un ID único
    this.apiService.addProduct(newProduct);
    this.products.push(newProduct);  // Agregar el producto también a la lista
    this.clearForm();  // Limpia el formulario después de agregar
  }

  deleteProduct(id: number) {
    this.apiService.deleteProduct(id);
    this.products = this.products.filter(product => product.id !== id); // Eliminar el producto de la lista local
  }

  clearForm() {
    this.newProduct = { id: 0, name: '', description: '', price: 0, quantity: 0, imageUrl: '' };
  }
}
