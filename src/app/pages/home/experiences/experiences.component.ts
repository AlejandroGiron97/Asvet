import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  url: string;
  name: string;
  comment: string;
}

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent implements OnInit, OnDestroy {

  customerIndex = 0;
  slides: Experience[][] = [];
  private intervalId!: ReturnType<typeof setInterval>;

  customerExperiences: Experience[] = [
    { url: 'img/comen_1.webp', name: 'Cliente 1', comment: 'Excelente servicio, muy recomendado.' },
    { url: 'img/comen_2.webp', name: 'Cliente 2', comment: 'Profesionales y atentos.' },
    { url: 'img/comen_3.webp', name: 'Cliente 3', comment: 'Me encantó la atención.' },
    { url: 'img/comen_4.webp', name: 'Cliente 4', comment: 'Servicio de calidad.' },
    { url: 'img/comen_5.webp', name: 'Cliente 5', comment: 'Muy satisfecho con el cuidado.' },
    { url: 'img/comen_6.webp', name: 'Cliente 6', comment: 'Recomiendo ampliamente.' },
    { url: 'img/comen_7.webp', name: 'Cliente 7', comment: 'Excelente veterinaria.' }
  ];

  ngOnInit(): void {
    this.slides = this.buildSlides(this.customerExperiences, 2);
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.clearTimer();
  }

  private buildSlides(data: Experience[], chunkSize: number): Experience[][] {
    const result: Experience[][] = [];
    for (let i = 0; i < data.length; i += chunkSize) {
      result.push(data.slice(i, i + chunkSize));
    }
    return result;
  }

  private startAutoSlide(): void {
    this.intervalId = setInterval(() => this.nextCustomerSlide(), 5000);
  }

  private clearTimer(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  prevCustomerSlide(): void {
    this.customerIndex =
      (this.customerIndex - 1 + this.slides.length) % this.slides.length;
  }

  nextCustomerSlide(): void {
    this.customerIndex =
      (this.customerIndex + 1) % this.slides.length;
  }

  // 🔥 Mejora de rendimiento
  trackByIndex(index: number): number {
    return index;
  }

  trackByExperience(index: number, item: Experience): string {
    return item.url;
  }
}