import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetaServicioComponent } from '../../../components/tarjeta-servicio/tarjeta-servicio.component';
import { ModalAgendaComponent } from '../../../components/modal-agenda/modal-agenda.component';


@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, TarjetaServicioComponent, ModalAgendaComponent], // Los agregamos aquí
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  servicios = [
    { titulo: 'Consulta Veterinaria', descripcion: '"Si tienes dificultades para desplazarte, contamos con servicio a domicilio o atención en nuestra sede equipada."', imagenUrl: 'img/consulta_2.jpeg' },
    { titulo: 'Hospitalización', descripcion: '"Contamos con un área de hospitalización 24/7 diseñada para brindar confort con tecnología de punta."', imagenUrl: 'img/hosp.jpeg' },
    { titulo: 'Cirugía', descripcion: '"Instalaciones adecuadas para esterilizaciones, profilaxis y cirugías de tejidos blandos de alta calidad."', imagenUrl: 'img/cirugia.jpeg' },
    { titulo: 'Laboratorio', descripcion: '"Realizamos toma de muestras con resultados rápidos, ya sea en clínica o desde la comodidad de tu hogar."', imagenUrl: 'img/lab.jpeg' },
    { titulo: 'Rayos X', descripcion: '"Disponemos de equipos de rayos X de alta calidad para garantizar un diagnóstico preciso para tu mascota."', imagenUrl: 'img/rx.jpeg' },
    { titulo: 'Estética Canina y Felina', descripcion: '"Baño, corte, limpieza de oídos y más... ¡Dejamos a tu mejor amigo de película!"', imagenUrl: 'img/pelu.jpeg' },
    { titulo: 'Pet Shop', descripcion: '"Amplia variedad de medicamentos, concentrados premium y accesorios de las mejores marcas."', imagenUrl: 'img/pet.jpeg' },
    { titulo: 'Ecografía', descripcion: '"Equipos de última generación y personal calificado garantizando el mejor servicio."', imagenUrl: 'img/eco.jpeg' }
  ];

  // 🔥 VARIABLES PARA EL MODAL DE AGENDA 🔥
  mostrarModal = false;
  servicioSeleccionado = '';

  abrirAgenda(titulo: string) {
    this.servicioSeleccionado = titulo;
    this.mostrarModal = true;
  }

  cerrarAgenda() {
    this.mostrarModal = false;
    this.servicioSeleccionado = '';
  }
}
