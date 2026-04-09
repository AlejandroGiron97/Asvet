import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tarjeta-servicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tarjeta-servicio.component.html' // Ya apuntando a su propio HTML
})
export class TarjetaServicioComponent {
  @Input() titulo: string = '';
  @Input() descripcion: string = '';
  @Input() imagenUrl: string = '';

  @Output() agendar = new EventEmitter<string>();

  clickAgendar() {
    this.agendar.emit(this.titulo);
  }
}
