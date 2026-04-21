import { Injectable, signal } from '@angular/core';

const HORA_INICIO_NOCHE = 18; // 6:00 PM
const HORA_FIN_NOCHE    = 6;  // 6:00 AM

@Injectable({ providedIn: 'root' })
export class ThemeService {
  isDark = signal<boolean>(false);

  constructor() {
    if (typeof window === 'undefined') return;
    const dark = this.esHoraNocturna();
    this.isDark.set(dark);
    this.apply(dark);
  }

  private esHoraNocturna(): boolean {
    const hora = new Date().getHours();
    return hora >= HORA_INICIO_NOCHE || hora < HORA_FIN_NOCHE;
  }

  private apply(dark: boolean) {
    document.documentElement.classList.toggle('dark', dark);
  }
}
