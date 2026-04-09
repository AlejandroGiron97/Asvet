import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private router = inject(Router);
  theme          = inject(ThemeService);
  menuAbierto    = false;

  toggleMenu() { this.menuAbierto = !this.menuAbierto; }

  navegarA(seccion: string) {
    this.menuAbierto = false;
    this.router.navigate(['/'], { fragment: seccion });
    setTimeout(() => {
      const el = document.getElementById(seccion);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 100);
  }

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

  irAEspecializaciones() {
    this.menuAbierto = false;
    this.router.navigate(['/especializaciones']);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
