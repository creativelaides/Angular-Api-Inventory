import { Routes } from '@angular/router';
import { GalleryComponent } from './core/home/gallery.component';
import { InventoryComponent } from './core/inventory/inventory.component';
import { CartComponent } from './core/cart/cart.component';

export const appRoutes: Routes = [
  { path: '', component: GalleryComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'cart', component: CartComponent },
];
