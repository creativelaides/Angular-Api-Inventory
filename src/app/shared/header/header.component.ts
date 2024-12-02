import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  imports: [RouterModule],  // Asegúrate de que RouterModule esté en el imports de los componentes donde usas routerLink
})
export class HeaderComponent {}
