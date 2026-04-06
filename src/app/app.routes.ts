import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
// AGREGAR ESTA LÍNEA (Asegúrate de que la ruta del archivo sea correcta)
import { EmpleosComponent } from './components/empleos/empleos.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'empleos', component: EmpleosComponent }, // Ahora sí sabe qué es EmpleosComponent
  { path: '**', redirectTo: '' } // Mueve esta línea al final SIEMPRE.
];
