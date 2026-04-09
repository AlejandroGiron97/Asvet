import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ServicesComponent } from './services/services.component';
import { LocationsComponent } from './locations/locations.component';
import { ExperiencesComponent } from './experiences/experiences.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, ServicesComponent, LocationsComponent, ExperiencesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  private router = inject(Router);

  sedeActiva: 'manizales' | 'pereira' | 'ambas' = 'ambas';
  currentIndex: number = 0;
  private intervalId: any;

  // 📸 Rutas directas a la carpeta public/img
  slides = [
    {
      url: 'img/hero_4Ed.jpeg',
    },
    {
      url: 'img/hero_5Ed.jpeg',
    },
    {
      url: 'img/hero_6Ed.jpeg',
    },
    {
      url: 'img/hero_7Ed.jpeg',
    }
  ];

  ngOnInit() {
    // Timer automático del slider (aprox. 3 segundos por imagen)
    this.intervalId = setInterval(() => { this.nextSlide(); }, 5000);

    // Esto sigue sirviendo por si alguien entra directo con el link localhost:4200/#manizales
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const url = this.router.url;
      const fragment = this.router.routerState.snapshot.root.fragment;

      if (url === '/') {
        this.sedeActiva = 'ambas';
        this.currentIndex = 0;
        return;
      }

      if (fragment === 'sedes') { this.sedeActiva = 'ambas'; }
      else if (fragment === 'manizales') { this.sedeActiva = 'manizales'; }
      else if (fragment === 'pereira') { this.sedeActiva = 'pereira'; }
    });
  }

  ngOnDestroy() {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  nextSlide() { this.currentIndex = (this.currentIndex + 1) % this.slides.length; }
  prevSlide() { this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length; }

  // 🔥 FIX: Función manual para obligar al scroll desde los botones del slider
  irASede(sede: 'manizales' | 'pereira') {
    this.sedeActiva = sede;

    // Le decimos a Angular que cambie la URL por estética
    this.router.navigate(['/'], { fragment: sede });

    setTimeout(() => {
      const elemento = document.getElementById('sedes');
      if (elemento) {
        const y = elemento.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 100);
  }
}
