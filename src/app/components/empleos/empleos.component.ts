import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-empleos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './empleos.component.html',
  styleUrl: './empleos.component.scss'
})
export class EmpleosComponent {
  registrarConversion(): void {
    (window as any).gtag('event', 'conversion', { send_to: 'AW-317889940' });
  }
}
