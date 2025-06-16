import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  especialistas = [
    {
      nombre: 'Dr. Roberto Chavez',
      especialidad: 'Ortodoncista',
      imagen: './drchavez.png',
      link: 'https://8ae8c9cefc8bfd0f423f19afb00c802f2ae29dbd.agenda.softwaredentalink.com/agenda?modalidad=1'
    },
    {
      nombre: 'Dra. Lisseth Yepez',
      especialidad: 'Endodoncista',
      imagen: './drayepez.png',
      link: 'https://8ae8c9cefc8bfd0f423f19afb00c802f2ae29dbd.agenda.softwaredentalink.com/agenda?modalidad=1'
    },
    {
      nombre: 'Dra. Liset Salas',
      especialidad: 'Ortodoncista',
      imagen: './drasalas.png',
      link: 'https://8ae8c9cefc8bfd0f423f19afb00c802f2ae29dbd.agenda.softwaredentalink.com/agenda?modalidad=1'
    }
  ];
  
  servicios = [
    {
      titulo: 'Ortodoncia avanzada',
      descripcion: 'Tratamientos para alinear tus dientes con tecnología moderna.',
      imagen: './ortodoncia.png',
    },
    {
      titulo: 'Estética dental',
      descripcion: 'Devuélvele la belleza a tu sonrisa con nuestros especialistas.',
      imagen: './estetica-dental.png',
    },
    {
      titulo: 'Nuestro equipo dental',
      descripcion: 'Proveemos la mejor calidad de servicio dental cerca de ti.',
      imagen: './smile-design.png', 
    }
  ];

}
