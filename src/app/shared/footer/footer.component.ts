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
  enviando = false;
  enviado = false;

  enviarPQR(event: Event) {
    // 1. Evitamos que la página se recargue o redireccione
    event.preventDefault();
    this.enviando = true;

    // 2. Tomamos los datos del formulario
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    // 3. Enviamos los datos "por debajo de la mesa" usando la API /ajax/ de FormSubmit
    fetch('https://formsubmit.co/ajax/wialgica@gmail.com', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      this.enviando = false;
      this.enviado = true;
      form.reset(); // Limpiamos las cajas de texto

      // Ocultamos el mensaje de éxito después de 5 segundos
      setTimeout(() => {
        this.enviado = false;
      }, 5000);
    })
    .catch(error => {
      this.enviando = false;
      alert('Hubo un error al enviar el mensaje. Inténtalo de nuevo.');
    });
  }
}
