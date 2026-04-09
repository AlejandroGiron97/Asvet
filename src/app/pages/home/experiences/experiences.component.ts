import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent implements OnInit, OnDestroy {

  // Slider de experiencias de clientes
  customerIndex = 0;
  slides: any[] = [];
  intervalId: any;

  customerExperiences = [
    {
      url: '/img/comen_1.png',
      name: 'Cliente 1',
      comment: 'Excelente servicio, muy recomendado.'
    },
    {
      url: '/img/comen_2.png',
      name: 'Cliente 2',
      comment: 'Profesionales y atentos.'
    },
    {
      url: '/img/comen_3.png',
      name: 'Cliente 3',
      comment: 'Me encantó la atención.'
    },
    {
      url: '/img/comen_4.png',
      name: 'Cliente 4',
      comment: 'Servicio de calidad.'
    },
    {
      url: '/img/comen_5.png',
      name: 'Cliente 5',
      comment: 'Muy satisfecho con el cuidado.'
    },
    {
      url: '/img/comen_6.png',
      name: 'Cliente 6',
      comment: 'Recomiendo ampliamente.'
    },
    {
      url: '/img/comen_7.png',
      name: 'Cliente 7',
      comment: 'Excelente veterinaria.'
    }
  ];

  ngOnInit() {
    for (let i = 0; i < this.customerExperiences.length; i += 2) {
      this.slides.push(this.customerExperiences.slice(i, i + 2));
    }

    // Timer automático del slider (5 segundos por slide)
    this.intervalId = setInterval(() => { this.nextCustomerSlide(); }, 5000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  prevCustomerSlide() {
    this.customerIndex = (this.customerIndex - 1 + this.slides.length) % this.slides.length;
  }

  nextCustomerSlide() {
    this.customerIndex = (this.customerIndex + 1) % this.slides.length;
  }
}