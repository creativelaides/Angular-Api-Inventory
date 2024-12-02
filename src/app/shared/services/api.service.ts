import { Injectable } from '@angular/core';
import exampleProducts from '../../data/examples.products.json';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private products: Product[] = exampleProducts;

  constructor() { }

  // Método para obtener los productos
  getProducts(): Product[] {
    return this.products;
  }

  // Método para agregar un producto
  addProduct(product: Product): void {
    this.products.push(product);
  }

  // Método para eliminar un producto
  deleteProduct(id: number): void {
    this.products = this.products.filter(product => product.id !== id);
  }
}
