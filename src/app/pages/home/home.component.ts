import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ServicesComponent } from './services/services.component';
import { LocationsComponent } from './locations/locations.component';
import { ExperiencesComponent } from './experiences/experiences.component';

const HORA_FIN_MANANA = 12; // 12:00 PM
const HORA_FIN_TARDE  = 18; // 6:00 PM

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

  // 🆕 Saludo
  mostrarSaludo  = false;
  mensajeSaludo  = '';

  slides = [
    { urlDesktop: 'img/hero_1O.webp', urlMobile: 'img/hero_1O.webp' },
    { urlDesktop: 'img/hero_2O.webp', urlMobile: 'img/hero_2O.webp' },
    { urlDesktop: 'img/hero_3O.webp', urlMobile: 'img/hero_3O.webp' },
    { urlDesktop: 'img/hero_4O.webp', urlMobile: 'img/hero_4O.webp' }
  ];

  ngOnInit() {
    this.intervalId = setInterval(() => { this.nextSlide(); }, 5000);

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const url      = this.router.url;
      const fragment = this.router.routerState.snapshot.root.fragment;
      if (url === '/') { this.sedeActiva = 'ambas'; this.currentIndex = 0; return; }
      if (fragment === 'sedes')          { this.sedeActiva = 'ambas';     }
      else if (fragment === 'manizales') { this.sedeActiva = 'manizales'; }
      else if (fragment === 'pereira')   { this.sedeActiva = 'pereira';   }
    });

    // 🆕 Saludo aparece a los 800ms
    setTimeout(() => { this.iniciarSaludo(); }, 800);
  }

  ngOnDestroy() {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  private iniciarSaludo() {
    const hora = new Date().getHours();

    if (hora >= 0 && hora < HORA_FIN_MANANA) {
      this.mensajeSaludo = '¡Buenos días! Bienvenido a ASVET 🌅';
    } else if (hora >= HORA_FIN_MANANA && hora < HORA_FIN_TARDE) {
      this.mensajeSaludo = '¡Buenas tardes! Bienvenido a ASVET ☀️';
    } else {
      this.mensajeSaludo = '¡Buenas noches! Bienvenido a ASVET 🌙';
    }

    this.mostrarSaludo = true;

    // Desaparece a los 3.5 segundos
    setTimeout(() => { this.mostrarSaludo = false; }, 1500);
  }

  nextSlide() { this.currentIndex = (this.currentIndex + 1) % this.slides.length; }
  prevSlide() { this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length; }

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
