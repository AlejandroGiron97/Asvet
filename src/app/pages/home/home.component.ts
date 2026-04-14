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
  currentIndex = 0;
  private intervalId: any;

  slides = [
    { urlDesktop: 'img/hero_1O.webp',   urlMobile: 'img/hero_1O.webp' },
    { urlDesktop: 'img/hero_2O.webp',   urlMobile: 'img/hero_2O.webp' },
    { urlDesktop: 'img/hero_3O.webp',   urlMobile: 'img/hero_3O.webp' },
    { urlDesktop: 'img/hero_4O.webp',   urlMobile: 'img/hero_4O.webp' }
  ];

  ngOnInit() {
    this.intervalId = setInterval(() => { this.nextSlide(); }, 5000);

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const url      = this.router.url;
      const fragment = this.router.routerState.snapshot.root.fragment;

      if (url === '/') { this.sedeActiva = 'ambas'; this.currentIndex = 0; return; }
      if (fragment === 'sedes')      { this.sedeActiva = 'ambas';     }
      else if (fragment === 'manizales') { this.sedeActiva = 'manizales'; }
      else if (fragment === 'pereira')   { this.sedeActiva = 'pereira';   }
    });
  }

  ngOnDestroy() {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  nextSlide() { this.currentIndex = (this.currentIndex + 1) % this.slides.length; }
  prevSlide() { this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length; }

  // 🆕 Nuevo: ir a slide específico y reiniciar timer
  goToSlide(index: number) {
    this.currentIndex = index;
    if (this.intervalId) clearInterval(this.intervalId);
    this.intervalId = setInterval(() => { this.nextSlide(); }, 5000);
  }

  irASede(sede: 'manizales' | 'pereira') {
    this.sedeActiva = sede;
    this.router.navigate(['/'], { fragment: sede });
    setTimeout(() => {
      const el = document.getElementById('sedes');
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 100);
  }
}
