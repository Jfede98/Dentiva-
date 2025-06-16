import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {
  cards = [
  {
    titulo: 'Dentales',
    descripcion: 'Desde ortodoncia hasta implantología, nuestros servicios dentales combinan estética y salud en cada tratamiento.',
    imagen: './servicio-dental.png',
    texto: 'Conocer servicios ->',
    link: '/dental'
  },
  {
    titulo: 'Estética',
    descripcion: 'Tecnología estética avanzada al servicio de tu piel y armonía facial. Tratamientos personalizados para revitalizar tu rostro y realzar tu expresión.',
    imagen: './servicio-estetico.png',
    texto: 'Conocer servicios ->',
    link: '/estetico'
  }
];

}
