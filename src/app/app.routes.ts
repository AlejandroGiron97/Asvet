import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EmpleosComponent } from './components/empleos/empleos.component';
// 1. Importamos el nuevo componente
import { EspecializacionesComponent } from './pages/especializaciones/especializaciones.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'empleos', component: EmpleosComponent },
  { path: 'especializaciones', component: EspecializacionesComponent }, // 2. Nueva ruta independiente
  { path: '**', redirectTo: '' } // SIEMPRE AL FINAL
];
