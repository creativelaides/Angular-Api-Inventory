
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly apiUrl = 'http://localhost:5224/api/Product';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }

  updateProduct(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/${id}`, product);
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}



/* import { Injectable } from '@angular/core';
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
}*/
