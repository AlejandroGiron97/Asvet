import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.scss'
})
export class LocationsComponent {
  @Input() sedeSeleccionada: 'manizales' | 'pereira' | 'ambas' = 'ambas';

  fotoManizales: string = 'img/sede_manizales.webp';
  fotoPereira:   string = 'img/sede_pereira.webp';
  
  // Imágenes para el mapa clickeable
  mapaManizalesImg: string = 'img/maps_manizales.webp';
  mapaPereiramg: string = 'img/maps_pereira.webp';

  // Controlan si ya se cargó el iframe real
  mapaManizalesActivo = false;
  mapaPerieraActivo   = false;
  
  // Abrir Google Maps
  abrirMapsManizales(): void {
    window.open('https://www.google.com/maps/search/Cra+25A+%2353A-66+Manizales+Colombia', '_blank');
  }
  
  abrirMapsPereira(): void {
    window.open('https://www.google.com/maps/place/Asvet+Cl%C3%ADnica+Veterinaria/@4.8105666,-75.6978202,16z/data=!4m10!1m2!2m1!1sCra+12B+%23+08-48,+Barrio+los+Rosales+pereira!3m6!1s0x8e38870032c3c381:0x9ae9e1964c056db2!8m2!3d4.808318!4d-75.6859568!15sCitDcmEgMTJCICMgMDgtNDgsIEJhcnJpbyBsb3MgUm9zYWxlcyBwZXJlaXJhWioiKGNyYSAxMmIgMDggNDggYmFycmlvIGxvcyByb3NhbGVzIHBlcmVpcmGSAR5lbWVyZ2VuY3lfdmV0ZXJpbmFyaWFuX3NlcnZpY2WaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVTmZiVXRVWDFSbkVBReABAPoBBAgAED8!16s%2Fg%2F11y9rt0lsr?hl=es-US&entry=ttu&g_ep=EgoyMDI2MDQyMi4wIKXMDSoASAFQAw%3D%3D', '_blank');
  }
}
