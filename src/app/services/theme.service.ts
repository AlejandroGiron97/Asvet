import { Injectable, signal } from '@angular/core';

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
    return hora >= 18 || hora < 6;
  }

  private apply(dark: boolean) {
    document.documentElement.classList.toggle('dark', dark);
  }
}
