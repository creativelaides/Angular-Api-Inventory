import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../shared/services/api.service';
import { Product } from '../../shared/models/product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importar FormsModule

@Component({
  selector: 'app-gallery',
  imports: [RouterModule, CommonModule, FormsModule],  // Agregar FormsModule aquí
  templateUrl: './gallery.component.html',
})
export class GalleryComponent implements OnInit {
  products: Product[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.products = this.apiService.getProducts();
  }

  addToCart(product: Product) {
    console.log('Adding to cart:', product);
    // Lógica para agregar al carrito
  }
}
