import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-estetico',
  imports: [CommonModule],
  templateUrl: './estetico.component.html',
  styleUrl: './estetico.component.css'
})
export class EsteticoComponent {
  serviciosEsteticos = [
    {
      titulo: 'Diseño de Sonrisa',
      descripcion: 'Mejora la armonía de tu sonrisa con un enfoque integral en estética y proporciones faciales.',
      imagen: './estetico/sonrisa.png',
      link: 'https://8ae8c9cefc8bfd0f423f19afb00c802f2ae29dbd.agenda.softwaredentalink.com/agenda?modalidad=1'
    },
    {
      titulo: 'Hilos Revitalizantes',
      descripcion: ' Estimulación de colágeno para una piel más firme y luminosa.',
      imagen: './estetico/revitalizantes.png',
      link: 'https://8ae8c9cefc8bfd0f423f19afb00c802f2ae29dbd.agenda.softwaredentalink.com/agenda?modalidad=1'
    },
    {
      titulo: 'Hilos Tensores',
      descripcion: 'Lifting facial sin bisturí. Resultados naturales y progresivos.',
      imagen: './estetico/tensores.png',
      link: 'https://8ae8c9cefc8bfd0f423f19afb00c802f2ae29dbd.agenda.softwaredentalink.com/agenda?modalidad=1'
    },
    {
      titulo: 'Reducción de Papada',
      descripcion: 'Mejora el contorno facial eliminando el exceso de grasa localizada.',
      imagen: './estetico/papada.png',
      link: 'https://8ae8c9cefc8bfd0f423f19afb00c802f2ae29dbd.agenda.softwaredentalink.com/agenda?modalidad=1'
    },
    {
      titulo: 'Full Face',
      descripcion: 'Tratamiento integral para rejuvenecer rostro, cuello y expresión.',
      imagen: './estetico/face.png',
      link: 'https://8ae8c9cefc8bfd0f423f19afb00c802f2ae29dbd.agenda.softwaredentalink.com/agenda?modalidad=1'
    },
    {
      titulo: 'Pink Glow',
      descripcion: 'Luminosidad, hidratación y revitalización en una sola sesión.',
      imagen: './estetico/pink.png',
      link: 'https://8ae8c9cefc8bfd0f423f19afb00c802f2ae29dbd.agenda.softwaredentalink.com/agenda?modalidad=1'
    },
        {
      titulo: 'Vitaminas',
      descripcion: 'Suplemento dérmico que nutre y mejora la calidad de la piel desde dentro.',
      imagen: './estetico/vitaminas.png',
      link: 'https://8ae8c9cefc8bfd0f423f19afb00c802f2ae29dbd.agenda.softwaredentalink.com/agenda?modalidad=1'
    },
        {
      titulo: 'Ácido Hialurónico ',
      descripcion: 'Hidratación profunda, volumen y definición facial sin cirugía.',
      imagen: './estetico/acido.png',
      link: 'https://8ae8c9cefc8bfd0f423f19afb00c802f2ae29dbd.agenda.softwaredentalink.com/agenda?modalidad=1'
    }
  ];
}
