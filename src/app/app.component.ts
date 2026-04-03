import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  mostrarCookies = false;

  ngOnInit() {
    // 🔥 FIX: Preguntamos si existe 'window' para evitar que Angular colapse en el servidor
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {

      // Le cambiamos el nombre a la llave para "reiniciar" la memoria de tu navegador en esta prueba
      if (!localStorage.getItem('cookies_asvet_v1')) {

        // Esperamos 1.5 segundos para que no salga de golpe al cargar la página
        setTimeout(() => {
          this.mostrarCookies = true;
        }, 1500);

      }
    }
  }

  aceptarCookies() {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      localStorage.setItem('cookies_asvet_v1', 'true');
    }
    this.mostrarCookies = false;
  }
}
