import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dental',
  imports: [CommonModule],
  templateUrl: './dental.component.html',
  styleUrl: './dental.component.css'
})
export class DentalComponent {
  serviciosDentales = [
    {
      titulo: 'Ortodoncia y Ortopedia',
      descripcion: 'Corrección funcional y estética de dientes y mordida.',
      imagen: './dental/ortodoncia.png',
      link: 'https://8ae8c9cefc8bfd0f423f19afb00c802f2ae29dbd.agenda.softwaredentalink.com/agenda?modalidad=1'
    },
    {
      titulo: 'Estética Dental',
      descripcion: 'Blanqueamiento, carillas y más para una sonrisa armónica.',
      imagen: './dental/estetica.png',
      link: 'https://8ae8c9cefc8bfd0f423f19afb00c802f2ae29dbd.agenda.softwaredentalink.com/agenda?modalidad=1'
    },
    {
      titulo: 'Implantología',
      descripcion: 'Reemplazo dental seguro y duradero con tecnología avanzada.',
      imagen: './ortodoncia.png',
      link: 'https://8ae8c9cefc8bfd0f423f19afb00c802f2ae29dbd.agenda.softwaredentalink.com/agenda?modalidad=1'
    },
    {
      titulo: 'Endodoncia',
      descripcion: 'Tratamientos de conducto que salvan y restauran piezas dentales.',
      imagen: './estetica-dental.png',
      link: 'https://8ae8c9cefc8bfd0f423f19afb00c802f2ae29dbd.agenda.softwaredentalink.com/agenda?modalidad=1'
    },
    {
      titulo: 'Odontología General',
      descripcion: 'Limpiezas, diagnósticos y cuidados preventivos.',
      imagen: './dental/general.png',
      link: 'https://8ae8c9cefc8bfd0f423f19afb00c802f2ae29dbd.agenda.softwaredentalink.com/agenda?modalidad=1'
    },
    {
      titulo: 'Rehabilitación Oral',
      descripcion: 'Soluciones completas para restaurar función y estética.',
      imagen: './smile-design.png',
      link: 'https://8ae8c9cefc8bfd0f423f19afb00c802f2ae29dbd.agenda.softwaredentalink.com/agenda?modalidad=1'
    },
    {
      titulo: 'Radiografías',
      descripcion: 'Diagnóstico preciso y rápido con imágenes digitales de alta calidad.',
      imagen: './dental/radiografia.png',
      link: 'https://8ae8c9cefc8bfd0f423f19afb00c802f2ae29dbd.agenda.softwaredentalink.com/agenda?modalidad=1'
    }
  ];
}
