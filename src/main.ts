import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routes';  // Importa el array de rutas
import { provideRouter } from '@angular/router';  // Usar provideRouter para configurar las rutas

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes),  // Pasa directamente el array de rutas
  ]
})
  .catch((err) => console.error(err));
