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
    { titulo: 'Consulta Veterinaria', descripcion: '"Si tienes dificultades para desplazarte, contamos con servicio a domicilio o atención en nuestra sede equipada."', imagenUrl: 'img/consulta_2.webp' },
    { titulo: 'Hospitalización', descripcion: '"Contamos con un área de hospitalización 24/7 diseñada para brindar confort con tecnología de punta."', imagenUrl: 'img/hospi.webp' },
    { titulo: 'Cirugía', descripcion: '"Instalaciones adecuadas para esterilizaciones, profilaxis y cirugías de tejidos blandos de alta calidad."', imagenUrl: 'img/cirugia.webp' },
    { titulo: 'Laboratorio', descripcion: '"Realizamos toma de muestras con resultados rápidos, ya sea en clínica o desde la comodidad de tu hogar."', imagenUrl: 'img/labor.webp' },
    { titulo: 'Rayos X', descripcion: '"Disponemos de equipos de rayos X de alta calidad para garantizar un diagnóstico preciso para tu mascota."', imagenUrl: 'img/sinFoto.webp' },
    { titulo: 'Estética Canina y Felina', descripcion: '"Baño, corte, limpieza de oídos y más... ¡Dejamos a tu mejor amigo de película!"', imagenUrl: 'img/pelu.webp' },
    { titulo: 'Pet Shop', descripcion: '"Amplia variedad de medicamentos, concentrados premium y accesorios de las mejores marcas."', imagenUrl: 'img/sinFoto.webp' },
    { titulo: 'Ecografía', descripcion: '"Equipos de última generación y personal calificado garantizando el mejor servicio."', imagenUrl: 'img/eco.webp' }
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
