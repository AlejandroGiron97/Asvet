import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private router = inject(Router);
  menuAbierto = false;

  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
  }

  // 🔥 FIX: Función manual para obligar al scroll desde el menú
  navegarA(seccion: string) {
    this.menuAbierto = false;

    // Cambiamos la URL visualmente
    this.router.navigate(['/'], { fragment: seccion });

    // Forzamos el scroll manual
    setTimeout(() => {
      const elemento = document.getElementById(seccion);
      if (elemento) {
        const y = elemento.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 100);
  }

  // 🔥 FIX: Obligar a subir al top
  irInicio() {
    this.menuAbierto = false;
    this.router.navigate(['/']);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  irAEmpleos() {
    this.menuAbierto = false;
    this.router.navigate(['/empleos']);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
