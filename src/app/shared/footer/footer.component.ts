import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  // Variables de estado visuales
  enviando = false;
  enviado = false;
  errorFormulario = false; // Nueva variable para poner los bordes rojos si está vacío

  // El número de WhatsApp de Asvet
  telefonoAsvet = '573117771849';

  // Recibimos el evento y directamente las cajas de texto del HTML
  enviarPQR(event: Event, motivoElement: HTMLInputElement, mensajeElement: HTMLTextAreaElement) {
    // 1. Evitamos que la página se recargue
    event.preventDefault();

    const motivo = motivoElement.value.trim();
    const mensaje = mensajeElement.value.trim();

    // 2. 🔥 VALIDACIÓN: Si falta alguno, activamos el error visual y no hacemos nada más
    if (!motivo || !mensaje) {
      this.errorFormulario = true;
      return;
    }

    // 3. Si todo está bien, quitamos el error y mostramos que está "cargando"
    this.errorFormulario = false;
    this.enviando = true;

    // 4. Armamos el texto para WhatsApp (Motivo en mayúsculas y negrita)
    const textoArmado = `*${motivo.toUpperCase()}*\n\n${mensaje}`;
    const textoCodificado = encodeURIComponent(textoArmado);
    const urlWhatsApp = `https://wa.me/${this.telefonoAsvet}?text=${textoCodificado}`;

    // 5. Pequeña pausa (UX) para que se vea el botón "Abriendo WhatsApp... ⏳"
    setTimeout(() => {
      this.enviando = false;
      this.enviado = true;

      // Abre WhatsApp en una pestaña nueva
      window.open(urlWhatsApp, '_blank');

      // Después de 3 segundos, ocultamos el check verde y vaciamos las cajas de texto
      setTimeout(() => {
        this.enviado = false;
        motivoElement.value = '';
        mensajeElement.value = '';
      }, 3000);

    }, 600);
  }
}
