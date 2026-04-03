import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Ruta principal (la de los perritos)
  { path: '**', redirectTo: '' } // Si escriben una URL que no existe, los devuelve al inicio
];
