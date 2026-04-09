import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  isDark = signal<boolean>(false);

  constructor() {
    if (typeof window === 'undefined') return;
    const saved       = localStorage.getItem('asvet_theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const dark        = saved ? saved === 'dark' : prefersDark;
    this.isDark.set(dark);
    this.apply(dark);
  }

  toggle() {
    const next = !this.isDark();
    this.isDark.set(next);
    this.apply(next);
    localStorage.setItem('asvet_theme', next ? 'dark' : 'light');
  }

  private apply(dark: boolean) {
    document.documentElement.classList.toggle('dark', dark);
  }
}
