import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-agenda',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-agenda.component.html' // Apuntando a su propio HTML
})
export class ModalAgendaComponent {
  @Input() mostrar: boolean = false;
  @Input() servicioSeleccionado: string = '';
  @Output() cerrar = new EventEmitter<void>();

  agendarPorWhatsApp(sede: 'manizales' | 'pereira') {
    let telefono = '';

    if (sede === 'manizales') {
      telefono = '573117771849';
    } else if (sede === 'pereira') {
      telefono = '573007493929';
    }

    const mensaje = `Hola, deseo agendar el servicio de ${this.servicioSeleccionado}.`;
    const urlWa = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

    window.open(urlWa, '_blank');

    // Le decimos al componente padre que cierre el modal
    this.cerrar.emit();
  }
}
