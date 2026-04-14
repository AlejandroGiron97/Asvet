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
    { titulo: 'Cardiología', descripcion: '"Diagnóstico y tratamiento de enfermedades del corazón y sistema circulatorio."', imagenUrl: 'img/cardio.jpg' },
    { titulo: 'Dermatología', descripcion: '"Cuidado experto para problemas de piel, alergias crónicas y enfermedades del pelaje."', imagenUrl: 'img/derma.jpg' },
    { titulo: 'Ortopedia', descripcion: '"Tratamiento de fracturas, problemas articulares y afecciones del sistema musculoesquelético."', imagenUrl: 'img/ortopedia.jpg' },
    { titulo: 'Neurología', descripcion: '"Atención especializada en problemas del sistema nervioso, convulsiones y columna vertebral."', imagenUrl: 'img/neuro.jpg' }
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
