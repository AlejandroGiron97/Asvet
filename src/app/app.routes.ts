import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'empleos',
    loadComponent: () =>
      import('./components/empleos/empleos.component').then(m => m.EmpleosComponent)
  },
  {
    path: 'especializaciones',
    loadComponent: () =>
      import('./pages/especializaciones/especializaciones.component').then(m => m.EspecializacionesComponent)
  },
  { path: '**', redirectTo: '' }
];
