import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetaServicioComponent } from '../../components/tarjeta-servicio/tarjeta-servicio.component';
import { ModalAgendaComponent } from '../../components/modal-agenda/modal-agenda.component';



@Component({
  selector: 'app-especializaciones',
  standalone: true,
  imports: [CommonModule, TarjetaServicioComponent, ModalAgendaComponent],
  templateUrl: './especializaciones.component.html',
  styleUrl: './especializaciones.component.scss'
})
export class EspecializacionesComponent {

  // Lista de especializaciones (Datos de prueba hasta que el cliente mande los reales)
  especializaciones = [
    { titulo: 'Ortopedia', descripcion: '"Tratamiento de fracturas, problemas articulares y afecciones del sistema musculoesquelético."', imagenUrl: 'img/orto.webp' },
    { titulo: 'Neurología', descripcion: '"Atención especializada en problemas del sistema nervioso, convulsiones y columna vertebral."', imagenUrl: 'img/neuro.webp' },
    { titulo: 'Dermatología', descripcion: '"Cuidado experto para problemas de piel, alergias crónicas y enfermedades del pelaje."', imagenUrl: 'img/derma.webp' },
    { titulo: 'Cardiología', descripcion: '"Diagnóstico y tratamiento de enfermedades del corazón y sistema circulatorio."', imagenUrl: 'img/sinFoto.webp' },
    { titulo: 'Oftamología', descripcion: '"Cuidado experto para problemas oculares, enfermedades de la visión y afecciones como infecciones, irritaciones y cataratas."', imagenUrl: 'img/ofta.webp' },
    { titulo: 'Oncología', descripcion: '"Diagnóstico y tratamiento del cáncer, incluyendo tumores y su manejo integral."', imagenUrl: 'img/onco.webp' },
    { titulo: 'Nutrición', descripcion: '"Planificación y control de la alimentación para mantener la salud y el bienestar."', imagenUrl: 'img/nutri.webp' },
    { titulo: 'Nefrología', descripcion: '"Diagnóstico y tratamiento de enfermedades renales y del sistema urinario."', imagenUrl: 'img/nefro.webp' },
    { titulo: 'Etología', descripcion: '"Estudio y manejo del comportamiento animal para mejorar su bienestar y convivencia."', imagenUrl: 'img/etolo.webp' },
    { titulo: 'Gastroenterología', descripcion: '"Diagnóstico y tratamiento de enfermedades del sistema digestivo."', imagenUrl: 'img/gastro.webp' },
    { titulo: 'Medicina Interna', descripcion: '"Diagnóstico y tratamiento integral de enfermedades internas."', imagenUrl: 'img/mediInter.webp' },
    { titulo: 'Odontología', descripcion: '"Cuidado y tratamiento de la salud dental, incluyendo limpieza, prevención y enfermedades bucales."', imagenUrl: 'img/denta.webp' },
  ];

  // 🔥 LA MISMA LÓGICA DEL MODAL (¡Cero esfuerzo extra!) 🔥
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
